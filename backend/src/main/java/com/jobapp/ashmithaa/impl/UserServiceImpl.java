package com.jobapp.ashmithaa.impl;


import java.util.List;
import java.util.stream.Collectors;
import org.springframework.stereotype.Service;
import com.jobapp.ashmithaa.model.User;
import com.jobapp.ashmithaa.repository.UserRepository;
// import com.jobapp.ashmithaa.controller.;
import com.jobapp.ashmithaa.response.BasicResponse;
import com.jobapp.ashmithaa.response.UserResponse;
import com.jobapp.ashmithaa.service.UserService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepo;
    @Override
    public BasicResponse <UserResponse> getAllUser(){
        List<User> users=userRepo.findAll();
        List<UserResponse> userResponses=users.stream().map(user-> UserResponse.builder()
        .id(user.getId())
        .username(user.getUsername())
        .role(user.getRole())
        .build()).collect(Collectors.toList());
        return BasicResponse.<UserResponse>builder().message("success!").data(userResponses).build();   
    }
}