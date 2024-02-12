package org.daming.jobs.config;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.ExternalDocumentation;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import io.swagger.v3.oas.models.security.SecurityScheme;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI openAPI() {
        return new OpenAPI()
                .info(info())
                .components(components())
                .externalDocs(externalDocumentation());
    }


    private Info info() {
        return new Info()
                .title("Jobs API Do")
                .description("This is a restful api document of Jobs.")
                .version("1.0")
                .license(license());
    }

    private ExternalDocumentation externalDocumentation() {
        return new ExternalDocumentation()
                .description("damingerdai's job")
                .url("https://github.com/damingerdai/jobs");
    }

    private License license() {
        return new License()
                .name("MIT")
                .url("https://opensource.org/licenses/MIT");
    }

    private Components components() {
        return new Components()
                .addSecuritySchemes("bearer-key", new SecurityScheme().type(SecurityScheme.Type.HTTP).scheme("bearer").bearerFormat("JWT"));
    }
}
