package com.jobapp.ashmithaa.response;

import com.jobapp.ashmithaa.enumerated.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;



@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserResponse {
    private String message;
    private String id;
    private String username;
    private Role role;
}