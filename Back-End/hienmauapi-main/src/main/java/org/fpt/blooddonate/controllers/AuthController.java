package org.fpt.blooddonate.controllers;

import jakarta.validation.Valid;
import org.fpt.blooddonate.dtos.requests.ChangePasswordRequestDTO;
import org.fpt.blooddonate.dtos.requests.LoginRequestDTO;
import org.fpt.blooddonate.dtos.requests.RegisterRequestDTO;
import org.fpt.blooddonate.dtos.requests.UpdateProfileRequestDTO;
import org.fpt.blooddonate.dtos.responses.LoginResponseDTO;
import org.fpt.blooddonate.services.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    private AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<LoginResponseDTO> login(@Valid @RequestBody LoginRequestDTO payload) {
        return ResponseEntity.ok(this.authService.login(payload));
    }

    @PostMapping("/register")
    public ResponseEntity<LoginResponseDTO> register(@Valid @RequestBody RegisterRequestDTO payload) {
        return ResponseEntity.ok(this.authService.register(payload));
    }

    @PostMapping("/change-password")
    public ResponseEntity<?> changePassword(@Valid @RequestBody ChangePasswordRequestDTO payload) {
        return ResponseEntity.ok(this.authService.changePassword(payload));
    }

    @PostMapping("/update-profile")
    public ResponseEntity<?> updateProfile(@Valid @RequestBody UpdateProfileRequestDTO payload) {
        return ResponseEntity.ok(this.authService.updateProfile(payload));
    }
}
