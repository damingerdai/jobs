package org.daming.jobs.service;

import org.junit.jupiter.api.Test;
import org.quartz.CronTrigger;
import org.quartz.JobKey;
import org.quartz.Scheduler;
import org.quartz.SchedulerException;
import org.quartz.Trigger;
import org.quartz.impl.matchers.GroupMatcher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Date;
import java.util.List;
import java.util.Timer;
import java.util.concurrent.TimeUnit;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class IQuartzServiceTest {

    @Autowired
    private Scheduler scheduler;

    @Autowired
    private IQuartzService quartzService;

    @Test
    public void getJob() throws SchedulerException {
        var name = "job1";
        var group = "group1";
        var trigger = (CronTrigger) quartzService.getJob(name, group);
        System.out.println(trigger.getJobKey());
    }

    @Test
    public void listJob() throws SchedulerException {
        for (String groupName : scheduler.getJobGroupNames()) {
            for (JobKey jobKey : scheduler.getJobKeys(GroupMatcher.jobGroupEquals(groupName))) {
                String jobName = jobKey.getName();
                String jobGroup = jobKey.getGroup();
                //get job's trigger
                List<Trigger> triggers = (List<Trigger>) scheduler.getTriggersOfJob(jobKey);
                Date nextFireTime = triggers.get(0).getNextFireTime();
                var jobDetail = scheduler.getJobDetail(jobKey);
                System.out.println("[jobName] : " + jobName + " [groupName] : "
                        + jobGroup + " - " + nextFireTime + jobDetail.getJobClass());
                triggers.forEach(trigger -> {
                    try {
                        var triggerState = scheduler.getTriggerState(trigger.getKey());
                        System.out.println(triggerState);
                    } catch (SchedulerException e) {
                        e.printStackTrace();
                    }
                });
            }

        }
    }

}