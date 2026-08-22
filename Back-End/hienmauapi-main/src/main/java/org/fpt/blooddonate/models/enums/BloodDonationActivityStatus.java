package org.fpt.blooddonate.models.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

import java.util.Arrays;

public enum BloodDonationActivityStatus {
    COMING_SOON("sapdienra", "coming_soon"),
    IN_PROGRESS("dangdienra", "in_progress"),
    COMPLETED("daketthuc", "completed"),
    CANCELLED("huy", "cancelled");

    private final String apiCode;
    private final String databaseCode;

    BloodDonationActivityStatus(String apiCode, String databaseCode) {
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
    public static BloodDonationActivityStatus fromCode(String code) {
        return Arrays.stream(values())
                .filter(status -> status.apiCode.equalsIgnoreCase(code)
                        || status.databaseCode.equalsIgnoreCase(code))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Unsupported blood donation activity status: " + code));
    }

    @Converter
    public static class JpaConverter implements AttributeConverter<BloodDonationActivityStatus, String> {
        @Override
        public String convertToDatabaseColumn(BloodDonationActivityStatus attribute) {
            return attribute == null ? null : attribute.databaseCode;
        }

        @Override
        public BloodDonationActivityStatus convertToEntityAttribute(String value) {
            return value == null ? null : fromCode(value);
        }
    }
}
