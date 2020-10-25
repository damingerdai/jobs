package org.daming.jobs.service.impl;

import org.daming.jobs.service.IQuartzService;
import org.quartz.*;
import org.springframework.stereotype.Service;

@Service
public class QuartzServiceImpl implements IQuartzService {

    private Scheduler scheduler;

    @Override
    public void addJob(String name, String group, String cron, String className) throws SchedulerException {
        try {
            TriggerKey triggerKey = TriggerKey.triggerKey(name, group);
            Class<? extends Job> clazz = (Class<? extends Job>) Class.forName(className);
            JobDetail jobDetail = JobBuilder.newJob(clazz).withIdentity(name, group).build();
            Trigger trigger = TriggerBuilder.newTrigger().withIdentity(triggerKey).withSchedule(CronScheduleBuilder.cronSchedule(cron)).build();
            scheduler.scheduleJob(jobDetail, trigger);
        } catch (ClassNotFoundException e) {
            throw new SchedulerException(e.getMessage(), e.getCause());
        }
    }

    @Override
    public Trigger getJob(String name, String group) throws SchedulerException {
        var triggerKey = TriggerKey.triggerKey(name, group);
        return scheduler.getTrigger(triggerKey);
    }

    @Override
    public boolean modifyJob(String name, String group, String cron) throws SchedulerException {
        var triggerKey = TriggerKey.triggerKey(name, group);
        var scheduleBuilder = CronScheduleBuilder.cronSchedule(cron);
        var cronTrigger = TriggerBuilder.newTrigger().withIdentity(triggerKey).withSchedule(scheduleBuilder).build();
        scheduler.rescheduleJob(triggerKey, cronTrigger);
        return false;
    }

    @Override
    public boolean deleteJob(String name, String group) throws SchedulerException {
        var triggerKey = TriggerKey.triggerKey(name, group);
        scheduler.pauseTrigger(triggerKey);
        scheduler.unscheduleJob(triggerKey);
        var jobKey = JobKey.jobKey(name, group);
        scheduler.deleteJob(jobKey);
        return true;
    }

    public QuartzServiceImpl(Scheduler scheduler) {
        super();
        this.scheduler = scheduler;
    }
}
