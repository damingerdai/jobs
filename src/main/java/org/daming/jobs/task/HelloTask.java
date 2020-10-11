package org.daming.jobs.task;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class HelloTask {

    @Scheduled(cron = "0/10 * * * * ?")
    public void run() {
        System.out.println("hello world");
    }
}
