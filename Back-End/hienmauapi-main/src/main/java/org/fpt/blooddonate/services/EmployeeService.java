package org.fpt.blooddonate.services;

import org.fpt.blooddonate.configs.AppConfig;
import org.fpt.blooddonate.dtos.requests.CreateEmployeeRequestDTO;
import org.fpt.blooddonate.models.EmployeeInformation;
import org.fpt.blooddonate.models.User;
import org.fpt.blooddonate.repositories.EmployeeInformationRepository;
import org.fpt.blooddonate.repositories.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.util.Optional;

@Service
public class EmployeeService {
    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    private final EmployeeInformationRepository employeeInformationRepository;

    public EmployeeService(
            PasswordEncoder passwordEncoder,
            UserRepository userRepository,
            EmployeeInformationRepository employeeInformationRepository
    ) {
        this.passwordEncoder = passwordEncoder;
        this.userRepository = userRepository;
        this.employeeInformationRepository = employeeInformationRepository;
    }

    @Transactional
    public User create(CreateEmployeeRequestDTO payload) {
        User user = new User();
        // Check existed username
        Optional<User> existedUser = this.userRepository.findByTenDangNhap(payload.getTendangnhap());
        if (existedUser.isPresent()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Username is already registered");
        }
        if (this.userRepository.existsByEmail(payload.getEmail())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Email is already registered");
        }

        Optional<EmployeeInformation> existedEmployee = this.employeeInformationRepository.findByMaSoNhanVien(payload.getMaSoNhanVien());
        if (existedEmployee.isPresent()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Ma so nhan vien is already registered");
        }

        user.setEmail(payload.getEmail());
        user.setTen(payload.getTen());
        user.setMatKhau(passwordEncoder.encode(payload.getMatkhau()));
        user.setDiaChi(payload.getDiachi());
        user.setGioiTinh(payload.getGioitinh());
        user.setTenDangNhap(payload.getTendangnhap());
        user.setNgaySinh(parseDate(payload.getNgaysinh(), "ngaysinh"));
        user.setSoDienThoai(payload.getSodienthoai());
        user.setVaiTro(AppConfig.USER_EMPLOYEE_ROLE);
        User registeredUser = userRepository.save(user);

        EmployeeInformation employeeInformation = new EmployeeInformation();
        employeeInformation.setChucVu(payload.getChucVu());
        employeeInformation.setMaSoNhanVien(payload.getMaSoNhanVien());
        employeeInformation.setPhongBan(payload.getPhongBan());
        employeeInformation.setNgayVaoLam(parseDate(payload.getNgayVaoLam(), "ngayVaoLam"));
        employeeInformation.setTrangThaiLamViec(payload.getTrangThaiLamViec());
        employeeInformation.setNguoiDung(user);
        employeeInformationRepository.save(employeeInformation);

        return registeredUser;
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
