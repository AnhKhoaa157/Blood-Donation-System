package org.fpt.blooddonate.dtos.responses;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class LoginResponseDTO {
    private UserResponseDTO user;
    private String token;
}
