package org.fpt.blooddonate.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name = "blood_compatibilities", indexes = {
        @Index(name = "idx_blood_compatibilities_recipient_blood_type_id", columnList = "recipient_blood_type_id")
})
@Data
@NoArgsConstructor
public class CompatibleBlood {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "donor_blood_type_id", nullable = false)
    @JsonIgnoreProperties(value = {"danhSachHien", "danhSachNhan"})
    private Blood nhomMauHien;

    @ManyToOne
    @JoinColumn(name = "recipient_blood_type_id", nullable = false)
    @JsonIgnoreProperties(value = {"danhSachHien", "danhSachNhan"})
    private Blood nhomMauNhan;

    @Column(name = "status", nullable = false)
    private Integer trangThai = 1;

    @Column(name = "created_at")
    private LocalDateTime ngayTao;

    @Column(name = "updated_at")
    private LocalDateTime ngayCapNhat;

    @PrePersist
    protected void onCreate() {
        ngayTao = ngayCapNhat = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        ngayCapNhat = LocalDateTime.now();
    }
}
