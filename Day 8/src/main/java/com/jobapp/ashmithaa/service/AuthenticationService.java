package com.jobapp.ashmithaa.service;

import com.jobapp.ashmithaa.dto.request.LoginRequest;
import com.jobapp.ashmithaa.dto.request.RegisterRequest;
import com.jobapp.ashmithaa.response.LoginResponse;
import com.jobapp.ashmithaa.response.RegisterResponse;

public interface AuthenticationService {
    RegisterResponse register(RegisterRequest request);
    LoginResponse login(LoginRequest request);
}
