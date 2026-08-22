package org.fpt.blooddonate.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.fpt.blooddonate.models.converters.LegacyDomainValueConverter;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "users", indexes = {
        @Index(name = "idx_users_blood_type_id", columnList = "blood_type_id"),
        @Index(name = "idx_users_role_status", columnList = "role,status")
})
@Data
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "name", nullable = false, length = 100)
    private String ten;

    @Column(name = "username", nullable = false, unique = true, length = 50)
    private String tenDangNhap;

    @JsonIgnore
    @Column(name = "password_hash", nullable = false, length = 255)
    private String matKhau;

    @Column(name = "email", nullable = false, unique = true, length = 100)
    private String email;

    @Column(name = "phone_number", length = 20)
    private String soDienThoai;

    @Column(name = "birth_date")
    private LocalDate ngaySinh;

    @Convert(converter = LegacyDomainValueConverter.class)
    @Column(name = "gender", length = 10)
    private String gioiTinh;

    @Column(name = "address", length = 255)
    private String diaChi;

    @Column(name = "latitude", nullable = true)
    private double latitude = 21.030653;

    @Column(name = "longitude", nullable = true)
    private double longitude = 105.847130;

    @ManyToOne
    @JoinColumn(name = "blood_type_id", nullable = true)
    private Blood nhomMau;

    @OneToOne(mappedBy = "nguoiDung", cascade = CascadeType.ALL)
    @JsonManagedReference
    private EmployeeInformation thongTinNhanVien;

    @Column(name = "rh_factor", length = 1)
    private String yeuToRh;

    @JdbcTypeCode(SqlTypes.LONGVARCHAR)
    @Column(name = "medical_history")
    private String tienSuBenh;

    @Column(name = "weight_kg", precision = 5, scale = 2)
    private BigDecimal canNang;

    @Column(name = "height_cm", precision = 5, scale = 2)
    private BigDecimal chieuCao;

    @Convert(converter = LegacyDomainValueConverter.class)
    @Column(name = "role", nullable = false, length = 20)
    private String vaiTro;

    @Column(name = "status", nullable = false)
    private Integer trangThai = 1; // 0: inactive, 1: active

    @Column(name = "created_at", updatable = false)
    private LocalDateTime ngayTao;

    @Column(name = "updated_at")
    private LocalDateTime ngayCapNhat;

    @PrePersist
    protected void onCreate() {
        this.ngayTao = LocalDateTime.now();
        this.ngayCapNhat = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        this.ngayCapNhat = LocalDateTime.now();
    }

    @Transient
    private double distance;
}
