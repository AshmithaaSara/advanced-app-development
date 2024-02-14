package com.jobapp.ashmithaa.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
// import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

import com.jobapp.ashmithaa.response.BasicResponse;
import com.jobapp.ashmithaa.response.UserResponse;
import com.jobapp.ashmithaa.service.UserService;



import com.jobapp.ashmithaa.utils.MyConstant;
@RestController
@RequestMapping(MyConstant.USERS)
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;
    @GetMapping(MyConstant.LIST)
    public ResponseEntity<BasicResponse<UserResponse>> create(){
        BasicResponse<UserResponse> response=new BasicResponse<>();
        try
        {
            response=userService.getAllUser();
            return new ResponseEntity<>(response,HttpStatus.OK);
        }
        catch(Exception e)
        {
            response.setMessage("Something went wrong!");
            return new ResponseEntity<>(response,HttpStatus.EXPECTATION_FAILED);
        }
    }
}
