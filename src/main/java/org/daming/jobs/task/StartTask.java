package org.daming.jobs.task;

import org.daming.jobs.base.annotations.JobComponent;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

// @Component
@JobComponent
public class StartTask implements CommandLineRunner {

    @Override
    public void run(String... args) throws Exception {
        System.out.println("Jobs starting");
    }
}
