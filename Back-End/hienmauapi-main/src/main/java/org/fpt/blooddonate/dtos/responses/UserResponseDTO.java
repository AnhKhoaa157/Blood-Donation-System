package org.fpt.blooddonate.dtos.responses;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import org.fpt.blooddonate.models.User;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Builder
@AllArgsConstructor
public class UserResponseDTO {
    private Integer id;
    private String ten;
    private String tenDangNhap;
    private String email;
    private String soDienThoai;
    private LocalDate ngaySinh;
    private String gioiTinh;
    private String diaChi;
    private double latitude;
    private double longitude;
    private BloodSummaryDTO nhomMau;
    private String yeuToRh;
    private BigDecimal canNang;
    private BigDecimal chieuCao;
    private String vaiTro;
    private Integer trangThai;
    private LocalDateTime ngayTao;
    private LocalDateTime ngayCapNhat;
    private double distance;

    public static UserResponseDTO from(User user) {
        BloodSummaryDTO blood = user.getNhomMau() == null
                ? null
                : new BloodSummaryDTO(user.getNhomMau().getId(), user.getNhomMau().getTen());
        return UserResponseDTO.builder()
                .id(user.getId())
                .ten(user.getTen())
                .tenDangNhap(user.getTenDangNhap())
                .email(user.getEmail())
                .soDienThoai(user.getSoDienThoai())
                .ngaySinh(user.getNgaySinh())
                .gioiTinh(user.getGioiTinh())
                .diaChi(user.getDiaChi())
                .latitude(user.getLatitude())
                .longitude(user.getLongitude())
                .nhomMau(blood)
                .yeuToRh(user.getYeuToRh())
                .canNang(user.getCanNang())
                .chieuCao(user.getChieuCao())
                .vaiTro(user.getVaiTro())
                .trangThai(user.getTrangThai())
                .ngayTao(user.getNgayTao())
                .ngayCapNhat(user.getNgayCapNhat())
                .distance(user.getDistance())
                .build();
    }
}
