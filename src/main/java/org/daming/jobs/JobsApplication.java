package org.daming.jobs;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.scheduling.annotation.EnableScheduling;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableSwagger2
@EnableScheduling
public class JobsApplication {

    public static void main(String[] args) {
        SpringApplication.run(JobsApplication.class, args);
    }

//    @Bean
//    public Docket createRestApi(){
//        return new Docket(DocumentationType.SWAGGER_2).apiInfo(apiInfo())
//                .select()
//                .apis(RequestHandlerSelectors.any())
//                .paths(PathSelectors.any()).build();
//    }
//
//    private ApiInfo apiInfo(){
//        return new ApiInfoBuilder()
//                .title("Jobs API Doc")
//                .description("This is a restful api document of Jobs.")
//                .version("1.0")
//                .build();
//    }

}
