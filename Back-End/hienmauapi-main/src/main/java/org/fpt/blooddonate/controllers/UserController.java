package org.fpt.blooddonate.controllers;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.fpt.blooddonate.dtos.requests.CreateEmployeeRequestDTO;
import org.fpt.blooddonate.dtos.responses.UserResponseDTO;
import org.fpt.blooddonate.models.User;
import org.fpt.blooddonate.services.EmployeeService;
import org.fpt.blooddonate.services.UserService;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;
    private final EmployeeService employeeService;

    @GetMapping
    public ResponseEntity<Page<UserResponseDTO>> getAll(
            @RequestParam(defaultValue = "1") int page,
            @RequestParam(required = false) String role,
            @RequestParam(required = false) String keyword
    ) {
        return ResponseEntity.ok(userService.getAll(page, role, keyword).map(UserResponseDTO::from));
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable Integer id) {
        Optional<User> result = userService.getById(id);
        if (result.isPresent()) {
            return ResponseEntity.ok(UserResponseDTO.from(result.get()));
        } else {
            return ResponseEntity.status(404).body("Not found user");
        }
    }

    @GetMapping("/near-me")
    public ResponseEntity<?> getListNearMe() {
        return ResponseEntity.ok(userService.getListNearMe().stream().map(UserResponseDTO::from).toList());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Integer id) {
        return userService.delete(id)
            .map(UserResponseDTO::from)
            .<ResponseEntity<?>>map(ResponseEntity::ok)
            .orElseGet(() -> ResponseEntity.status(404).body("Not found user"));
    }

    @PostMapping("/employee")
    public ResponseEntity<UserResponseDTO> createEmployee(@Valid @RequestBody CreateEmployeeRequestDTO payload) {
        return ResponseEntity.ok(UserResponseDTO.from(this.employeeService.create(payload)));
    }
}
