package com.jobapp.ashmithaa.impl;

import static com.jobapp.ashmithaa.enumerated.Role.USER;

import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.jobapp.ashmithaa.dto.request.LoginRequest;
import com.jobapp.ashmithaa.dto.request.RegisterRequest;
import com.jobapp.ashmithaa.model.User;
import com.jobapp.ashmithaa.repository.UserRepository;
import com.jobapp.ashmithaa.response.LoginResponse;
import com.jobapp.ashmithaa.response.RegisterResponse;
import com.jobapp.ashmithaa.service.AuthenticationService;
import com.jobapp.ashmithaa.utils.JwtUtil;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@SuppressWarnings("null")
//add unimplemented methods having cursor in AuthenticationServiceImpl
public class AuthenticationServiceImpl implements AuthenticationService{
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;
    @Override
    public RegisterResponse register(RegisterRequest request) {
        Optional<User> isUserExists=userRepository.findByEmail(request.getEmail());
        if(isUserExists.isPresent()){
            return RegisterResponse.builder().message("User with mail id "+request.getEmail()+ "is already exists!").build();
        }
        var user=User.builder()
        .name(request.getName())
        .email(request.getEmail())
        .password(passwordEncoder.encode(request.getPassword()))
        //Role.USER
        .role(USER)
        .build();
        userRepository.save(user);
        return RegisterResponse.builder()
        .message("User created successfully!")
        .build();
    }

    @Override
    public LoginResponse login(LoginRequest request) {
        //according to our project email&password
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(),request.getPassword()));
        var user=userRepository.findByEmail(request.getEmail()).orElseThrow();
        var token = jwtUtil.generateToken(user);
        return LoginResponse.builder()
        .message("User logged in successfully!")
        .token(token)
        .build();
    }
}