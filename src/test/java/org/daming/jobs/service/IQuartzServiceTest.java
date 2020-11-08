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
import java.util.Optional;
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
        var trigger = Optional.ofNullable((CronTrigger) quartzService.getJob(name, group));
        trigger.ifPresent(System.out::println);
    }

    @Test
    public void listJob() throws SchedulerException {
       this.quartzService.listJob().forEach(System.out::println);
    }

}