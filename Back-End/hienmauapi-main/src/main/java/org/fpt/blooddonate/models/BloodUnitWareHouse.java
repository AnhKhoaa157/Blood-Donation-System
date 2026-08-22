package org.fpt.blooddonate.models;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;
import org.fpt.blooddonate.models.converters.LegacyDomainValueConverter;
import org.fpt.blooddonate.models.enums.BloodUnitStatus;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "blood_units", indexes = {
        @Index(name = "idx_blood_units_status_expires_at", columnList = "status,expires_at"),
        @Index(name = "idx_blood_units_blood_type_id", columnList = "blood_type_id"),
        @Index(name = "idx_blood_units_blood_request_id", columnList = "blood_request_id")
})
@Data
@NoArgsConstructor
public class BloodUnitWareHouse {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "blood_type_id")
    private Blood nhomMau;

    @Convert(converter = LegacyDomainValueConverter.class)
    @Column(name = "blood_component")
    private String thanhPhan = "toanphan";

    @Column(name = "quantity")
    private int soLuong;

    @Column(name = "collected_at")
    private LocalDateTime ngayLayMau;

    @Column(name = "expires_at")
    private LocalDateTime ngayHetHan;

    @ManyToOne
    @JoinColumn(name = "donor_id")
    private User nguoiHien;

    @JdbcTypeCode(SqlTypes.LONGVARCHAR)
    @Column(name = "test_result")
    private String ketQuaXetNghiem;

    @Column(name = "storage_location")
    private String viTriLuuTru;

    @Column(name = "notes")
    private String ghiChu;

    @Convert(converter = BloodUnitStatus.JpaConverter.class)
    @Column(name = "status", nullable = false, length = 20)
    private BloodUnitStatus trangThai = BloodUnitStatus.WAITING_FOR_TESTING;

    @ManyToOne
    @JoinColumn(name = "blood_request_id")
    private BloodReceiveRequest yeuCauCanMau;

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
