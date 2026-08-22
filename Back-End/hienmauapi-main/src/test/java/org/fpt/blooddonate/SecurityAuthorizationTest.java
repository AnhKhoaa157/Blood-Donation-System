package org.fpt.blooddonate;

import org.fpt.blooddonate.controllers.AuthController;
import org.fpt.blooddonate.services.AuthService;
import org.fpt.blooddonate.utils.AuthUtil;
import org.junit.jupiter.api.Test;
import org.springframework.boot.autoconfigure.ImportAutoConfiguration;
import org.springframework.boot.security.autoconfigure.SecurityAutoConfiguration;
import org.springframework.boot.security.autoconfigure.UserDetailsServiceAutoConfiguration;
import org.springframework.boot.security.autoconfigure.web.servlet.SecurityFilterAutoConfiguration;
import org.springframework.boot.security.autoconfigure.web.servlet.ServletWebSecurityAutoConfiguration;
import org.springframework.boot.webmvc.test.autoconfigure.WebMvcTest;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.context.annotation.Import;
import org.springframework.http.MediaType;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.user;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(controllers = AuthController.class)
@Import(org.fpt.blooddonate.configs.SecurityConfig.class)
@ImportAutoConfiguration({
        SecurityAutoConfiguration.class,
        ServletWebSecurityAutoConfiguration.class,
        SecurityFilterAutoConfiguration.class,
        UserDetailsServiceAutoConfiguration.class
})
@TestPropertySource(properties = {
        "app.cors.allowed-origins=http://localhost:5173",
        "app.jwt.secret=test-secret-that-is-at-least-32-characters-long"
})
class SecurityAuthorizationTest {

    @MockitoBean
    private AuthService authService;

    @MockitoBean
    private AuthUtil authUtil;

    @org.springframework.beans.factory.annotation.Autowired
    private MockMvc mockMvc;

    @Test
    void unauthenticatedClientCannotAccessAdminRoutes() throws Exception {
        mockMvc.perform(get("/api/admin/blood-donation-requests"))
                .andExpect(status().isUnauthorized());
    }

    @Test
    void regularUserCannotAccessAdminRoutes() throws Exception {
        mockMvc.perform(get("/api/admin/blood-donation-requests")
                        .with(user("1").roles("USER")))
                .andExpect(status().isForbidden());
    }

    @Test
    void loginRouteRemainsPublic() throws Exception {
        mockMvc.perform(post("/api/auth/login")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{}"))
                .andExpect(status().isBadRequest());
    }
}
