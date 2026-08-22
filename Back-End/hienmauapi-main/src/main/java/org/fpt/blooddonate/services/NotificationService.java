package org.fpt.blooddonate.services;

import org.fpt.blooddonate.configs.AppConfig;
import org.fpt.blooddonate.dtos.requests.CreateNotificationRequestDTO;
import org.fpt.blooddonate.dtos.requests.UpdateNotificationRequestDTO;
import org.fpt.blooddonate.models.Notification;
import org.fpt.blooddonate.models.User;
import org.fpt.blooddonate.repositories.NotificationRepository;
import org.fpt.blooddonate.repositories.UserRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.time.LocalDate;
import java.util.Optional;

@Service
public class NotificationService {
    private final NotificationRepository repository;
    private final UserRepository userRepository;

    public NotificationService(NotificationRepository repository, UserRepository userRepository) {
        this.repository = repository;
        this.userRepository = userRepository;
    }

    public Page<Notification> getAll(int page, Integer status, String keyword) {
        Pageable pageable = PageRequest.of(page - 1, 10);
        return repository.paginated(status, keyword, pageable);
    }

    public Page<Notification> getAllActive(int page, String keyword) {
        Pageable pageable = PageRequest.of(page - 1, 10);
        return repository.getAllActive(keyword, pageable, LocalDate.now());
    }

    public Optional<Notification> getById(Integer id) {
        return repository.findById(id);
    }

    public Notification create(CreateNotificationRequestDTO payload) throws IOException {
        Integer userId = (Integer) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User user = userRepository.findById(userId).get();
        String UPLOAD_DIR = "uploads/notifications/";
        Path uploadPath = Paths.get(UPLOAD_DIR);
        if (!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);
        }

        MultipartFile file = payload.getAnh();
        String fileName = System.currentTimeMillis() + "_" + file.getOriginalFilename();
        Files.copy(file.getInputStream(), uploadPath.resolve(fileName), StandardCopyOption.REPLACE_EXISTING);

        Notification notification = new Notification();
        notification.setTieuDe(payload.getTieude());
        notification.setNoiDung(payload.getNoidung());
        notification.setNguoiTao(user);
        notification.setAnh(UPLOAD_DIR + fileName);
        notification.setNgayBatDau(LocalDate.parse(payload.getNgayBatDau()));
        notification.setNgayKetThuc(LocalDate.parse(payload.getNgayKetThuc()));
        return repository.save(notification);
    }

    public Optional<Notification> update(Integer id, UpdateNotificationRequestDTO payload) throws IOException {
        String fileName = "";
        String UPLOAD_DIR = "uploads/notifications/";
        if (payload.getAnh() != null) {
            Path uploadPath = Paths.get(UPLOAD_DIR);
            if (!Files.exists(uploadPath)) {
                Files.createDirectories(uploadPath);
            }

            MultipartFile file = payload.getAnh();
            fileName = System.currentTimeMillis() + "_" + file.getOriginalFilename();
            Files.copy(file.getInputStream(), uploadPath.resolve(fileName), StandardCopyOption.REPLACE_EXISTING);
        }

        final String finalFileName = fileName;
        return repository.findById(id).map(notification -> {
            notification.setTieuDe(payload.getTieude());
            notification.setNoiDung(payload.getNoidung());
            notification.setNgayBatDau(LocalDate.parse(payload.getNgayBatDau()));
            notification.setNgayKetThuc(LocalDate.parse(payload.getNgayKetThuc()));
            if (payload.getAnh() != null) {
                notification.setAnh(UPLOAD_DIR + finalFileName);
            }

            return repository.save(notification);
        });
    }

    public Optional<Notification> delete(Integer id) {
        return repository.findById(id).map(blog -> {
            blog.setTrangThai(AppConfig.INACTIVE_STATUS);
            return repository.save(blog);
        });
    }
}
