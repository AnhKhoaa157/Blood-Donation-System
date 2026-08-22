package org.fpt.blooddonate.models;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.fpt.blooddonate.models.converters.LegacyDomainValueConverter;
import org.fpt.blooddonate.models.enums.BloodReceiveRequestStatus;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "blood_requests", indexes = {
        @Index(name = "idx_blood_requests_status_scheduled_date", columnList = "status,scheduled_receive_date"),
        @Index(name = "idx_blood_requests_recipient_id", columnList = "recipient_id"),
        @Index(name = "idx_blood_requests_blood_type_id", columnList = "blood_type_id")
})
@Data
@NoArgsConstructor
public class BloodReceiveRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "recipient_id")
    private User nguoiNhan;

    @Column(name = "scheduled_receive_date")
    private LocalDate ngayNhanMauDuKien;

    @ManyToOne(optional = false)
    @JoinColumn(name = "blood_type_id", nullable = false)
    private Blood nhomMau;

    @Convert(converter = LegacyDomainValueConverter.class)
    @Column(name = "required_blood_component", length = 255)
    private String thanhPhanMauCan;

    @Column(name = "quantity_units", nullable = false)
    private Integer soLuongDonVi;

    @Column(name = "reason")
    private String lyDo;

    @Column(name = "urgent", nullable = false)
    private Boolean khanCap = false;

    @Column(name = "receiving_address", length = 255)
    private String diaChiNhanMau;

    @Column(name = "notes")
    private String ghiChu;

    @ManyToOne
    @JoinColumn(name = "approved_by_id")
    private User nguoiDuyet;

    @Column(name = "approved_at")
    private LocalDateTime ngayDuyet;

    @Convert(converter = BloodReceiveRequestStatus.JpaConverter.class)
    @Column(name = "status", nullable = false, length = 20)
    private BloodReceiveRequestStatus trangThai = BloodReceiveRequestStatus.PENDING;

    @Column(name = "current_health", nullable = true)
    private String sucKhoeHienTai = "";

    @Column(name = "pregnancy_flag", nullable = true)
    private int dangMangThai = 0;

    @Column(name = "screening_form", nullable = true)
    private String formKham = "";

    @Column(name = "infectious_disease_flag", nullable = true)
    private int macBenhTruyenNhiem = 0;

    @Column(name = "created_at", updatable = false)
    private LocalDateTime ngayTao = LocalDateTime.now();

    @Column(name = "updated_at")
    private LocalDateTime ngayCapNhat = LocalDateTime.now();

    @Version
    @Column(nullable = false)
    private long version;

    @PreUpdate
    public void preUpdate() {
        this.ngayCapNhat = LocalDateTime.now();
    }
}
