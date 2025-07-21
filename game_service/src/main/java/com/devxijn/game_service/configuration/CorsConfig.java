package com.devxijn.game_service.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * @author devxijn
 * @since 21/07/2025
 */
@Configuration
public class CorsConfig {
    //CORS
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**") // cho phép tất cả đường dẫn
                        .allowedOrigins("http://localhost:5080") // cho phép domain frontend
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // các method HTTP
                        .allowedHeaders("*") // cho phép tất cả header
                        .allowCredentials(true); // nếu bạn cần gửi cookie, token
            }
        };
    }
}
