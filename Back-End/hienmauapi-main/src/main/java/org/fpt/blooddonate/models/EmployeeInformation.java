package org.fpt.blooddonate.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.fpt.blooddonate.models.enums.EmploymentStatus;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "employees", indexes = {
        @Index(name = "idx_employees_user_id", columnList = "user_id")
})
@Data
@NoArgsConstructor
public class EmployeeInformation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "employee_number", nullable = false, unique = true, length = 50)
    private String maSoNhanVien;

    @Column(name = "job_title", length = 100)
    private String chucVu;

    @Column(name = "department", length = 100)
    private String phongBan;

    @Column(name = "start_date")
    private LocalDate ngayVaoLam;

    @Convert(converter = EmploymentStatus.JpaStringConverter.class)
    @Column(name = "employment_status")
    private String trangThaiLamViec;

    @OneToOne
    @JoinColumn(name = "user_id", unique = true, nullable = false)
    @JsonBackReference
    private User nguoiDung;

    @Column(name = "created_at", updatable = false)
    private LocalDateTime ngayTao = LocalDateTime.now();

    @Column(name = "updated_at")
    private LocalDateTime ngayCapNhat = LocalDateTime.now();

    @PreUpdate
    public void preUpdate() {
        this.ngayCapNhat = LocalDateTime.now();
    }
}
