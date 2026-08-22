package org.fpt.blooddonate.models.converters;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

import java.util.Map;

/**
 * Keeps legacy API codes stable while storing English domain values in PostgreSQL.
 */
@Converter
public class LegacyDomainValueConverter implements AttributeConverter<String, String> {

    private static final Map<String, String> TO_DATABASE = Map.ofEntries(
            Map.entry("nguoidung", "user"),
            Map.entry("customer", "user"),
            Map.entry("nhanvien", "employee"),
            Map.entry("administrator", "admin"),
            Map.entry("nam", "male"),
            Map.entry("nu", "female"),
            Map.entry("khac", "other"),
            Map.entry("toanphan", "whole_blood"),
            Map.entry("hongcau", "red_cells"),
            Map.entry("tieucau", "platelets"),
            Map.entry("huyettuong", "plasma")
    );

    private static final Map<String, String> TO_API = Map.ofEntries(
            Map.entry("user", "nguoidung"),
            Map.entry("employee", "nhanvien"),
            Map.entry("admin", "admin"),
            Map.entry("male", "nam"),
            Map.entry("female", "nu"),
            Map.entry("other", "khac"),
            Map.entry("whole_blood", "toanphan"),
            Map.entry("red_cells", "hongcau"),
            Map.entry("platelets", "tieucau"),
            Map.entry("plasma", "huyettuong")
    );

    @Override
    public String convertToDatabaseColumn(String attribute) {
        return attribute == null ? null : TO_DATABASE.getOrDefault(attribute, attribute);
    }

    @Override
    public String convertToEntityAttribute(String value) {
        return value == null ? null : TO_API.getOrDefault(value, value);
    }
}
