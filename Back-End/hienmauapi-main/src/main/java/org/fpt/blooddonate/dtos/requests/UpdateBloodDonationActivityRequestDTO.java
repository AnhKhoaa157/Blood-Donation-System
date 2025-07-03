package org.fpt.blooddonate.dtos.requests;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class UpdateBloodDonationActivityRequestDTO {
    @NotBlank()
    private String ten;

    @NotNull()
    private String ngayBatDau;

    @NotNull()
    private String ngayKetThuc;

    @NotBlank()
    private String diaDiem;

    @NotBlank()
    private String moTa;

    @NotBlank()
    private String trangthai;

    @Positive()
    private Integer soLuongNguoiToiDa;
}
