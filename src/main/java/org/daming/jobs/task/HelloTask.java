package org.daming.jobs.task;

import org.quartz.Job;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class HelloTask implements Job {

    @Override
    //@Scheduled(cron = "0/10 * * * * ?")
    public void execute(JobExecutionContext context) throws JobExecutionException {
       //  var dataMap = context.getJobDetail().getJobDataMap();
        var name = "damingerdai";
        System.out.println("hello " + name);
    }
}
