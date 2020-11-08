package org.daming.jobs;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;
import springfox.documentation.oas.annotations.EnableOpenApi;

@SpringBootApplication
@EnableOpenApi
@EnableScheduling
public class JobsApplication {

    public static void main(String[] args) {
        var app = new SpringApplication(JobsApplication.class);
        app.run(args);
    }

}
