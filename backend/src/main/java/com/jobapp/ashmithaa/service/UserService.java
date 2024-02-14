package com.jobapp.ashmithaa.service;

// import com.jobapp.ashmithaa.request.UserRequest;
import com.jobapp.ashmithaa.response.BasicResponse;
import com.jobapp.ashmithaa.response.UserResponse;

public interface UserService {
     BasicResponse<UserResponse> getAllUser();
    //  BasicResponse<UserResponse> deleteuser(String id);
    //  UserResponse updateUser(String id,UserRequest request);
}