package org.daming.jobs;

import org.daming.jobs.base.annotations.JobComponentScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
@JobComponentScan
public class JobsApplication {

    public static void main(String[] args) {
        var app = new SpringApplication(JobsApplication.class);
        app.run(args);
    }

}
