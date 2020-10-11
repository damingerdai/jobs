package org.daming.jobs.task;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class StartTask implements CommandLineRunner {

    @Override
    public void run(String... args) throws Exception {
        System.out.println("Jobs starting");
    }
}
