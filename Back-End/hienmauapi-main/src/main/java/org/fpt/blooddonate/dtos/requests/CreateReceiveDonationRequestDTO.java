package org.fpt.blooddonate.dtos.requests;

import jakarta.validation.constraints.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class CreateReceiveDonationRequestDTO {
    @NotBlank()
    private String ngayNhanMauDuKien;

    @NotNull()
    private Integer nhomMau;

    @NotBlank()
    private String thanhPhanMauCan;

    @NotNull
    @Positive
    @Max(100)
    private Integer soLuongDonVi;

    private String lyDo;

    @NotBlank()
    private String diaChiNhanMau;

    @NotNull
    @Min(0)
    @Max(1)
    private Integer khanCap = 1;

    @NotBlank()
    private String sucKhoeHienTai;

    @NotNull
    @Min(0)
    @Max(1)
    private int dangMangThai;

    @NotNull
    @Min(0)
    @Max(1)
    private int macBenhTruyenNhiem;
}
