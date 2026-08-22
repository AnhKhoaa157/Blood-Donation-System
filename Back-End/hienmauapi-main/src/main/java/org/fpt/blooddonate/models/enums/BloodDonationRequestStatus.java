package org.fpt.blooddonate.models.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

import java.util.Arrays;

public enum BloodDonationRequestStatus {
    PENDING("dangcho", "pending"),
    CANCELLED("huy", "cancelled"),
    APPROVED("xacnhan", "approved"),
    REJECTED("tuchoi", "rejected"),
    COMPLETED("dahien", "completed");

    private final String apiCode;
    private final String databaseCode;

    BloodDonationRequestStatus(String apiCode, String databaseCode) {
        this.apiCode = apiCode;
        this.databaseCode = databaseCode;
    }

    @JsonValue
    public String getCode() {
        return apiCode;
    }

    public String getDatabaseCode() {
        return databaseCode;
    }

    @JsonCreator
    public static BloodDonationRequestStatus fromCode(String code) {
        return Arrays.stream(values())
                .filter(status -> status.apiCode.equalsIgnoreCase(code)
                        || status.databaseCode.equalsIgnoreCase(code))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Unsupported blood donation request status: " + code));
    }

    @Converter
    public static class JpaConverter implements AttributeConverter<BloodDonationRequestStatus, String> {
        @Override
        public String convertToDatabaseColumn(BloodDonationRequestStatus attribute) {
            return attribute == null ? null : attribute.databaseCode;
        }

        @Override
        public BloodDonationRequestStatus convertToEntityAttribute(String value) {
            return value == null ? null : fromCode(value);
        }
    }
}
