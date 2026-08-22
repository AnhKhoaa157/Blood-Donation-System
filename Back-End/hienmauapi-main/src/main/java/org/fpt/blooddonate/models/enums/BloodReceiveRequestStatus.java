package org.fpt.blooddonate.models.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

import java.util.Arrays;

public enum BloodReceiveRequestStatus {
    PENDING("dangcho", "pending"),
    CANCELLED("huy", "cancelled"),
    HAVE_BLOOD("dacomau", "blood_allocated"),
    COMPLETED("dahoanthanh", "completed");

    private final String apiCode;
    private final String databaseCode;

    BloodReceiveRequestStatus(String apiCode, String databaseCode) {
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
    public static BloodReceiveRequestStatus fromCode(String code) {
        return Arrays.stream(values())
                .filter(status -> status.apiCode.equalsIgnoreCase(code)
                        || status.databaseCode.equalsIgnoreCase(code))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Unsupported blood receive request status: " + code));
    }

    @Converter
    public static class JpaConverter implements AttributeConverter<BloodReceiveRequestStatus, String> {
        @Override
        public String convertToDatabaseColumn(BloodReceiveRequestStatus attribute) {
            return attribute == null ? null : attribute.databaseCode;
        }

        @Override
        public BloodReceiveRequestStatus convertToEntityAttribute(String value) {
            return value == null ? null : fromCode(value);
        }
    }
}
