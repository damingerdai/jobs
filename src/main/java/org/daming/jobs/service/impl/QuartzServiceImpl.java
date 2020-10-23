package org.daming.jobs.service.impl;

import org.daming.jobs.service.IQuartzService;
import org.quartz.CronScheduleBuilder;
import org.quartz.Job;
import org.quartz.JobBuilder;
import org.quartz.JobDetail;
import org.quartz.Scheduler;
import org.quartz.SchedulerException;
import org.quartz.Trigger;
import org.quartz.TriggerBuilder;
import org.quartz.TriggerKey;
import org.springframework.stereotype.Service;

@Service
public class QuartzServiceImpl implements IQuartzService {

    private Scheduler scheduler;

    @Override
    public void addJob(String name, String group, String className) throws SchedulerException {
        try {
            TriggerKey triggerKey = TriggerKey.triggerKey(name, group);
            Class<? extends Job> clazz = (Class<? extends Job>) Class.forName(className);
            JobDetail jobDetail = JobBuilder.newJob(clazz).withIdentity(name, group).build();
            Trigger trigger = TriggerBuilder.newTrigger().withIdentity(triggerKey).withSchedule(CronScheduleBuilder.cronSchedule("*/5 * * * * ?")).build();
            scheduler.scheduleJob(jobDetail, trigger);
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
            throw new SchedulerException(e.getMessage(), e.getCause());
        }
    }

    @Override
    public Trigger getJob(String name, String group) throws SchedulerException {
        return null;
    }

    @Override
    public boolean modifyJob(String name, String group) throws SchedulerException {
        return false;
    }

    public QuartzServiceImpl(Scheduler scheduler) {
        super();
        this.scheduler = scheduler;
    }
}
