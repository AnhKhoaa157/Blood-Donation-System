package org.fpt.blooddonate.services;
import org.fpt.blooddonate.configs.AppConfig;
import org.fpt.blooddonate.dtos.requests.ChangePasswordRequestDTO;
import org.fpt.blooddonate.dtos.requests.LoginRequestDTO;
import org.fpt.blooddonate.dtos.requests.UpdateProfileRequestDTO;
import org.fpt.blooddonate.dtos.responses.LoginResponseDTO;
import org.fpt.blooddonate.dtos.responses.UserResponseDTO;
import org.fpt.blooddonate.models.Blood;
import org.fpt.blooddonate.repositories.BloodRepository;
import org.fpt.blooddonate.utils.AuthUtil;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;

import org.fpt.blooddonate.dtos.requests.RegisterRequestDTO;
import org.fpt.blooddonate.models.User;
import org.fpt.blooddonate.repositories.UserRepository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.util.Optional;

@Service
public class AuthService {
    private final UserRepository userRepository;
    private final BloodRepository bloodRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthUtil authUtil;

    public AuthService(
            UserRepository userRepository,
            BloodRepository bloodRepository,
            PasswordEncoder passwordEncoder,
            AuthUtil authUtil
    ) {
        this.userRepository = userRepository;
        this.bloodRepository = bloodRepository;
        this.passwordEncoder = passwordEncoder;
        this.authUtil = authUtil;
    }

    public LoginResponseDTO login(LoginRequestDTO payload) {
        User user = this.userRepository.findByTenDangNhap(payload.getTendangnhap())
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Username or password is incorrect"));

        if (!passwordEncoder.matches(payload.getMatkhau(), user.getMatKhau())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Username or password is incorrect");
        }
        if (!Integer.valueOf(1).equals(user.getTrangThai())) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "This account is inactive");
        }

        LoginResponseDTO loginResponseDTO = new LoginResponseDTO();
        loginResponseDTO.setToken(authUtil.generateToken(user));
        loginResponseDTO.setUser(UserResponseDTO.from(user));
        return loginResponseDTO;
    }

    @Transactional
    public LoginResponseDTO register(RegisterRequestDTO payload) {
        User user = new User();
        // Check existed username
        Optional<User> existedUser = this.userRepository.findByTenDangNhap(payload.getTendangnhap());
        if (existedUser.isPresent()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Username is already registered");
        }
        if (this.userRepository.existsByEmail(payload.getEmail())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Email is already registered");
        }

        // Check existed blood
        Blood blood = this.bloodRepository.findById(payload.getNhommau())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Not existed blood"));

        user.setEmail(payload.getEmail());
        user.setNhomMau(blood);
        user.setTen(payload.getTen());
        user.setMatKhau(passwordEncoder.encode(payload.getMatkhau()));
        user.setDiaChi(payload.getDiachi());
        user.setGioiTinh(payload.getGioitinh());
        user.setCanNang(payload.getCannang());
        user.setChieuCao(payload.getChieucao());
        user.setTienSuBenh(payload.getTiensubenh());
        user.setYeuToRh(payload.getYeutorh());
        user.setTenDangNhap(payload.getTendangnhap());
        user.setNgaySinh(parseDate(payload.getNgaysinh(), "ngaysinh"));
        user.setSoDienThoai(payload.getSodienthoai());
        user.setVaiTro(AppConfig.USER_CUSTOMER_ROLE);
        user.setLatitude(payload.getLatitude());
        user.setLongitude(payload.getLongitude());
        User registeredUser = userRepository.save(user);
        LoginResponseDTO loginResponseDTO = new LoginResponseDTO();
        loginResponseDTO.setToken(authUtil.generateToken(registeredUser));
        loginResponseDTO.setUser(UserResponseDTO.from(registeredUser));
        return loginResponseDTO;
    }

    @Transactional
    public UserResponseDTO changePassword(ChangePasswordRequestDTO payload) {
        Integer userId = (Integer) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User user = this.userRepository.findById(userId)
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "User not found"));

        if (!passwordEncoder.matches(payload.getMatkhaucu(), user.getMatKhau())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Old password is incorrect");
        }

        user.setMatKhau(passwordEncoder.encode(payload.getMatkhaumoi()));
        return UserResponseDTO.from(this.userRepository.save(user));
    }

    @Transactional
    public UserResponseDTO updateProfile(UpdateProfileRequestDTO payload) {
        Integer userId = (Integer) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User user = this.userRepository.findById(userId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "User not found"));
        // Check existed blood
        Blood blood = this.bloodRepository.findById(payload.getNhommau())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Not existed blood"));

        user.setNhomMau(blood);
        user.setTen(payload.getTen());
        user.setDiaChi(payload.getDiachi());
        user.setGioiTinh(payload.getGioitinh());
        user.setCanNang(payload.getCannang());
        user.setChieuCao(payload.getChieucao());
        user.setTienSuBenh(payload.getTiensubenh());
        user.setYeuToRh(payload.getYeutorh());
        user.setNgaySinh(parseDate(payload.getNgaysinh(), "ngaysinh"));
        user.setSoDienThoai(payload.getSodienthoai());
        return UserResponseDTO.from(this.userRepository.save(user));
    }

    private LocalDate parseDate(String value, String field) {
        try {
            return LocalDate.parse(value);
        } catch (RuntimeException ex) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                    field + " must use yyyy-MM-dd format");
        }
    }
}
