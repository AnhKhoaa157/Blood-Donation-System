package org.fpt.blooddonate.services;

import org.fpt.blooddonate.configs.AppConfig;
import org.fpt.blooddonate.dtos.requests.CreateBlogRequestDTO;
import org.fpt.blooddonate.dtos.requests.UpdateBlogRequestDTO;
import org.fpt.blooddonate.models.Blog;
import org.fpt.blooddonate.models.BlogCategory;
import org.fpt.blooddonate.repositories.BlogCategoryRepository;
import org.fpt.blooddonate.repositories.BlogRepository;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.Optional;

@Service
public class BlogService {
    private final BlogRepository repository;
    private final BlogCategoryRepository blogCategoryRepository;

    public BlogService(BlogRepository repository, BlogCategoryRepository blogCategoryRepository) {
        this.repository = repository;
        this.blogCategoryRepository = blogCategoryRepository;
    }

    public Page<Blog> getAll(int page, Integer categoryId, Integer status, String keyword) {
        Pageable pageable = PageRequest.of(page - 1, 10);
        return repository.paginated(categoryId, status, keyword, pageable);
    }

    public Optional<Blog> getById(Integer id) {
        return repository.findById(id);
    }

    public Blog create(CreateBlogRequestDTO payload) throws IOException {
        // Check existed blood
        BlogCategory category = this.blogCategoryRepository.findById(payload.getDanhmuc())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Not existed category"));

        String UPLOAD_DIR = "uploads/blogs/";
        Path uploadPath = Paths.get(UPLOAD_DIR);
        if (!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);
        }

        MultipartFile file = payload.getAnh();
        String fileName = System.currentTimeMillis() + "_" + file.getOriginalFilename();
        Files.copy(file.getInputStream(), uploadPath.resolve(fileName), StandardCopyOption.REPLACE_EXISTING);

        Blog blog = new Blog();
        blog.setDanhMuc(category);
        blog.setTieuDe(payload.getTieude());
        blog.setNoiDung(payload.getNoidung());
        blog.setNguoiTao(1);
        blog.setAnh(UPLOAD_DIR + fileName);
        return repository.save(blog);
    }

    public Optional<Blog> update(Integer id, UpdateBlogRequestDTO payload) throws IOException {
        String fileName = "";
        String UPLOAD_DIR = "uploads/blogs/";
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
        return repository.findById(id).map(blog -> {
            blog.setTieuDe(payload.getTieude());
            blog.setNoiDung(payload.getNoidung());
            if (payload.getAnh() != null) {
                blog.setAnh(UPLOAD_DIR + finalFileName);
            }

            return repository.save(blog);
        });
    }

    public long getTotal() {
        return repository.count();
    }

    public Optional<Blog> delete(Integer id) {
        return repository.findById(id).map(blog -> {
            blog.setTrangThai(AppConfig.INACTIVE_STATUS);
            return repository.save(blog);
        });
    }
}
