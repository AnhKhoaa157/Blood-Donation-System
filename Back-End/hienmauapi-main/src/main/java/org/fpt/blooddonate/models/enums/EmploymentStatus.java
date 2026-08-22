package org.fpt.blooddonate.models.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

import java.util.Arrays;

public enum EmploymentStatus {
    ACTIVE("danglamviec", "active"),
    INACTIVE("nghiviec", "inactive");

    private final String apiCode;
    private final String databaseCode;

    EmploymentStatus(String apiCode, String databaseCode) {
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
    public static EmploymentStatus fromCode(String code) {
        return Arrays.stream(values())
                .filter(status -> status.apiCode.equalsIgnoreCase(code)
                        || status.databaseCode.equalsIgnoreCase(code))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Unsupported employment status: " + code));
    }

    @Converter
    public static class JpaConverter implements AttributeConverter<EmploymentStatus, String> {
        @Override
        public String convertToDatabaseColumn(EmploymentStatus attribute) {
            return attribute == null ? null : attribute.databaseCode;
        }

        @Override
        public EmploymentStatus convertToEntityAttribute(String value) {
            return value == null ? null : fromCode(value);
        }
    }

    @Converter
    public static class JpaStringConverter implements AttributeConverter<String, String> {
        @Override
        public String convertToDatabaseColumn(String attribute) {
            return attribute == null ? null : fromCode(attribute).getDatabaseCode();
        }

        @Override
        public String convertToEntityAttribute(String value) {
            return value == null ? null : fromCode(value).getCode();
        }
    }
}
