package com.jobapp.ashmithaa.utils;
import static io.jsonwebtoken.SignatureAlgorithm.HS256;
import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;


import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

@Service
public class JwtUtil {
    @Value("${application.jwt.secret_key}")
    private String secret_key;
    public String extractUsername(String token)
    {
        //Inside the subject,setting a username
        return extractClaim(token,Claims::getSubject);
    }
    private <T> T extractClaim(String token,Function<Claims,T> claimsResolver)
    {
        final Claims claims= extractAllClaims(token);//Data got from unlocked token
        return claimsResolver.apply(claims);
    }
    //unlocking process needs signinkey
    private Claims extractAllClaims(String token)
    {
        return Jwts.parserBuilder().setSigningKey(getSigninKey())
        .build().parseClaimsJws(token).getBody();
        //it starts unlocking json web token
        //extracting data from token;
    }
    //return key from spring security
    //getting signinkey
    private Key getSigninKey(){
        byte[] keyBytes=Decoders.BASE64.decode(secret_key);
        return Keys.hmacShaKeyFor(keyBytes);
    }
    public boolean isTokenValid(String token, UserDetails userDetails) {
        //extracting username from token
        final String username=extractUsername(token);
        //checking the username from database and token username are equal
        return(username.equals(userDetails.getUsername()))&& !isTokenExpired(token);
    }
    private boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }
    private Date extractExpiration(String token) {
        return extractClaim(token,Claims::getExpiration);
    }
    public String generateToken(UserDetails userDetails) {
        return generateToken(new HashMap<>(),userDetails);
    }
    //logic for creating token
    public String generateToken(Map<String,Object>extraClaims,UserDetails userDetails){
        //building token using Jwts.builder()
        return Jwts.builder()
        //more data we can set inside token
        .setClaims(extraClaims).setSubject(userDetails.getUsername())
        .setSubject(userDetails.getUsername())
        //token generated date
        .setIssuedAt(new Date(System.currentTimeMillis()))
        //from today to next 24 hrs after token will expire
        .setExpiration(new Date(System.currentTimeMillis()+1000*24*60))
        //SignatureAlgorithm.HS256 convert to static import
        .signWith(getSigninKey(),HS256)
        .compact();
    }
}