package com.jobapp.ashmithaa.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder//In order to set the data
@NoArgsConstructor
@AllArgsConstructor

public class MessageRequest {
    private String id;
    private String sender;
    private String recipient;

}
