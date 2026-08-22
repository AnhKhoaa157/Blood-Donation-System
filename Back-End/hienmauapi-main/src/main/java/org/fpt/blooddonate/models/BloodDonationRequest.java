package org.fpt.blooddonate.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;
import org.fpt.blooddonate.models.converters.LegacyDomainValueConverter;
import org.fpt.blooddonate.models.enums.BloodDonationRequestStatus;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "donation_requests", indexes = {
        @Index(name = "idx_donation_requests_status_scheduled_date", columnList = "status,scheduled_donation_date"),
        @Index(name = "idx_donation_requests_donor_id", columnList = "donor_id"),
        @Index(name = "idx_donation_requests_donation_event_id", columnList = "donation_event_id")
})
@Data
@NoArgsConstructor
public class BloodDonationRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "donor_id", nullable = false)
    private User nguoiHien;

    @ManyToOne
    @JoinColumn(name = "donation_event_id", nullable = true)
    @JsonBackReference
    private BloodDonationActivity hoatDongHienMau;

    @Column(name = "scheduled_donation_date", nullable = false)
    private LocalDate ngayHienMauDuKien;

    @Column(name = "last_recovery_date")
    private LocalDate ngayPhucHoiGanNhat;

    @JdbcTypeCode(SqlTypes.LONGVARCHAR)
    @Column(name = "notes")
    private String ghiChu;

    @ManyToOne
    @JoinColumn(name = "approved_by_id")
    private User nguoiDuyet;

    @Column(name = "approved_at")
    private LocalDateTime ngayDuyet;

    @Column(name = "amount_ml")
    private int soLuong;

    @Convert(converter = LegacyDomainValueConverter.class)
    @Column(name = "donation_type", nullable = false, length = 20)
    private String loaiHien = "toanphan";

    @Convert(converter = BloodDonationRequestStatus.JpaConverter.class)
    @Column(name = "status", nullable = false, length = 20)
    private BloodDonationRequestStatus trangThai = BloodDonationRequestStatus.PENDING;

    @Column(name = "current_health", nullable = true)
    private String sucKhoeHienTai = "";

    @Column(name = "screening_form", nullable = true)
    private String formKham = "";

    @Column(name = "pregnancy_flag", nullable = true)
    private int dangMangThai = 0;

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
