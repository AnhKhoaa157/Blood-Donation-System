package org.fpt.blooddonate.models;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Data;
import org.fpt.blooddonate.models.enums.BloodDonationActivityStatus;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "donation_events", indexes = {
        @Index(name = "idx_donation_events_status_start_end", columnList = "status,start_date,end_date"),
        @Index(name = "idx_donation_events_created_by_id", columnList = "created_by_id")
})
@Data
public class BloodDonationActivity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "name", nullable = false, length = 255)
    private String ten;

    @Column(name = "start_date", nullable = false)
    private LocalDate ngayBatDau;

    @Column(name = "end_date", nullable = false)
    private LocalDate ngayKetThuc;

    @Column(name = "location", nullable = false, length = 255)
    private String diaDiem;

    @Column(name = "description", nullable = false)
    private String moTa;

    @Column(name = "max_participants", nullable = false)
    private Integer soLuongNguoiToiDa;

    @Column(name = "current_participants", nullable = false)
    private Integer soLuongNguoiDangKyHienTai = 0;

    @ManyToOne
    @JoinColumn(name = "created_by_id")
    private User nguoiTao;

    @Convert(converter = BloodDonationActivityStatus.JpaConverter.class)
    @Column(name = "status", length = 20)
    private BloodDonationActivityStatus trangThaiHoatDong;

    @OneToMany(mappedBy = "hoatDongHienMau", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonManagedReference
    private List<BloodDonationRequest> danhSachYeuCauHieuMau = new ArrayList<>();

    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime ngayTao;

    @Column(name = "updated_at", nullable = false)
    private LocalDateTime ngayCapNhat;

    @Version
    @Column(nullable = false)
    private long version;

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
