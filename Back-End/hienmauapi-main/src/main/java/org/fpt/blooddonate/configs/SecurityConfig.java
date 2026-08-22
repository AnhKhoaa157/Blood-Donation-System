package org.fpt.blooddonate.configs;

import org.fpt.blooddonate.middlewares.JwtAuthenticationFilter;
import org.fpt.blooddonate.utils.AuthUtil;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.HttpStatusEntryPoint;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;
import java.util.List;

@Configuration
public class SecurityConfig {
    private final AuthUtil authUtil;
    private final String allowedOrigins;

    public SecurityConfig(
            AuthUtil authUtil,
            @Value("${app.cors.allowed-origins:http://localhost:5173}") String allowedOrigins
    ) {
        this.authUtil = authUtil;
        this.allowedOrigins = allowedOrigins;
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .cors(cors -> cors.configurationSource(corsConfigurationSource()))
                .csrf(csrf -> csrf.disable())
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .exceptionHandling(exceptions -> exceptions
                        .authenticationEntryPoint(new HttpStatusEntryPoint(org.springframework.http.HttpStatus.UNAUTHORIZED)))
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers(HttpMethod.OPTIONS, "/**").permitAll()
                        .requestMatchers("/api/auth/login", "/api/auth/register").permitAll()
                        .requestMatchers(HttpMethod.GET, "/uploads/**", "/api/bloods", "/api/bloods/**",
                                "/api/blogs", "/api/blogs/**", "/api/blog-categories", "/api/blog-categories/**",
                                "/api/compatible-bloods", "/api/compatible-bloods/**",
                                "/api/blood-donation-activities", "/api/blood-donation-activities/**",
                                "/api/notifications/active").permitAll()
                        .requestMatchers("/api/users/near-me")
                        .hasAnyRole("ADMIN", "EMPLOYEE", "USER")
                        .requestMatchers("/api/admin/**", "/api/users/**", "/api/dashboards/**",
                                "/api/blogs/**", "/api/blog-categories/**", "/api/notifications/**",
                                "/api/compatible-bloods/**", "/api/bloods/**",
                                "/api/blood-donation-activities/**")
                        .hasAnyRole("ADMIN", "EMPLOYEE")
                        .requestMatchers("/api/auth/change-password", "/api/auth/update-profile",
                                "/api/blood-donation-requests/**", "/api/blood-receive-requests/**")
                        .hasAnyRole("ADMIN", "EMPLOYEE", "USER")
                        .requestMatchers(HttpMethod.POST, "/api/support-tickets/*/change-status")
                        .hasAnyRole("ADMIN", "EMPLOYEE")
                        .requestMatchers("/api/support-tickets/**").authenticated()
                        .anyRequest().authenticated()
                )
                .addFilterBefore(new JwtAuthenticationFilter(authUtil), UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        List<String> origins = Arrays.stream(allowedOrigins.split(","))
                .map(String::trim)
                .filter(origin -> !origin.isBlank())
                .toList();
        if (origins.isEmpty() || origins.contains("*")) {
            throw new IllegalStateException("CORS_ALLOWED_ORIGINS must contain explicit origins when credentials are enabled");
        }

        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(origins);
        configuration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"));
        configuration.setAllowedHeaders(List.of("Authorization", "Content-Type", "Accept", "Origin", "X-Requested-With"));
        configuration.setExposedHeaders(List.of("Location"));
        configuration.setAllowCredentials(true);
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}
