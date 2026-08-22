package org.fpt.blooddonate.models.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

import java.util.Arrays;

public enum SupportTicketStatus {
    NEW("moi", "new"),
    IN_PROGRESS("dangxuly", "in_progress"),
    COMPLETED("hoanthanh", "completed"),
    CANCELLED("dahuy", "cancelled");

    private final String apiCode;
    private final String databaseCode;

    SupportTicketStatus(String apiCode, String databaseCode) {
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
    public static SupportTicketStatus fromCode(String code) {
        return Arrays.stream(values())
                .filter(status -> status.apiCode.equalsIgnoreCase(code)
                        || status.databaseCode.equalsIgnoreCase(code))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Unsupported support ticket status: " + code));
    }

    @Converter
    public static class JpaConverter implements AttributeConverter<SupportTicketStatus, String> {
        @Override
        public String convertToDatabaseColumn(SupportTicketStatus attribute) {
            return attribute == null ? null : attribute.databaseCode;
        }

        @Override
        public SupportTicketStatus convertToEntityAttribute(String value) {
            return value == null ? null : fromCode(value);
        }
    }
}
