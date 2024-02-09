package com.jobapp.ashmithaa.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.jobapp.ashmithaa.enumerated.Role;
import com.jobapp.ashmithaa.model.User;
import com.jobapp.ashmithaa.repository.UserRepository;


import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
@SuppressWarnings("null")
public class UserCLI implements CommandLineRunner{
    
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
        // TODO Auto-generated method stub
        // throw new UnsupportedOperationException("Unimplemented method 'run'");
        if(userRepository.count()>0)
        {
            return;
        }
        var user = User.builder()
                 .name("Admin")
                 .email("admin@gmail.com")
                 .password(passwordEncoder.encode("Admin@123"))
                 .role(Role.ADMIN)
                 .build();
        userRepository.save(user);
    }

}