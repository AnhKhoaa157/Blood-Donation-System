package org.fpt.blooddonate.models.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

import java.util.Arrays;

public enum BloodUnitStatus {
    WAITING_FOR_TESTING("choxetnghiem", "waiting_for_testing"),
    READY("sansang", "ready"),
    USED("dasudung", "used"),
    CANCELLED("huybo", "cancelled");

    private final String apiCode;
    private final String databaseCode;

    BloodUnitStatus(String apiCode, String databaseCode) {
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
    public static BloodUnitStatus fromCode(String code) {
        return Arrays.stream(values())
                .filter(status -> status.apiCode.equalsIgnoreCase(code)
                        || status.databaseCode.equalsIgnoreCase(code))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Unsupported blood unit status: " + code));
    }

    @Converter
    public static class JpaConverter implements AttributeConverter<BloodUnitStatus, String> {
        @Override
        public String convertToDatabaseColumn(BloodUnitStatus attribute) {
            return attribute == null ? null : attribute.databaseCode;
        }

        @Override
        public BloodUnitStatus convertToEntityAttribute(String value) {
            return value == null ? null : fromCode(value);
        }
    }
}
