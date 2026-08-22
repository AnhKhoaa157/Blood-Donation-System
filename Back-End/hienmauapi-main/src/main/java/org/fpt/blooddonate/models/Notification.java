package org.fpt.blooddonate.models;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@Table(name = "notifications", indexes = {
        @Index(name = "idx_notifications_status_start_end", columnList = "status,start_date,end_date")
})
public class Notification {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @JdbcTypeCode(SqlTypes.LONGVARCHAR)
    @Column(name = "title", nullable = false)
    private String tieuDe;

    @Column(name = "image_path", nullable = false, length = 255)
    private String anh;

    @ManyToOne
    @JoinColumn(name = "created_by_id", nullable = false)
    private User nguoiTao;

    @JdbcTypeCode(SqlTypes.LONGVARCHAR)
    @Column(name = "content", nullable = false)
    private String noiDung;

    @Column(name = "start_date", nullable = false)
    private LocalDate ngayBatDau = LocalDate.now();

    @Column(name = "end_date", nullable = false)
    private LocalDate ngayKetThuc = LocalDate.now();

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
