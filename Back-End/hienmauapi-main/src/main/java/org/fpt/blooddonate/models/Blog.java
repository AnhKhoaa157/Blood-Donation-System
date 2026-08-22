package org.fpt.blooddonate.models;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@Table(name = "blog_posts", indexes = {
        @Index(name = "idx_blog_posts_category_status", columnList = "category_id,status")
})
public class Blog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @JdbcTypeCode(SqlTypes.LONGVARCHAR)
    @Column(name = "title", nullable = false)
    private String tieuDe;

    @Column(name = "image_path", nullable = false, length = 255)
    private String anh;

    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false)
    private BlogCategory danhMuc;

    @JdbcTypeCode(SqlTypes.LONGVARCHAR)
    @Column(name = "content", nullable = false)
    private String noiDung;

    @Column(name = "view_count", nullable = false)
    private Integer luotXem = 0;

    @Column(name = "created_by_id", nullable = false)
    private Integer nguoiTao;

    @Column(name = "status", nullable = false)
    private Integer trangThai = 1; // 0: inactive, 1: active

    @Column(name = "created_at", nullable = false)
    private LocalDateTime ngayTao = LocalDateTime.now();

    @Column(name = "updated_at", nullable = false)
    private LocalDateTime ngayCapNhat = LocalDateTime.now();

    @PrePersist
    protected void onCreate() {
        this.ngayTao = LocalDateTime.now();
        this.ngayCapNhat = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        this.ngayCapNhat = LocalDateTime.now();
    }
}
