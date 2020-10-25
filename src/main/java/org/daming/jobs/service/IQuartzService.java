package org.daming.jobs.service;

import org.quartz.SchedulerException;
import org.quartz.Trigger;

public interface IQuartzService {

    void addJob(String name, String group, String cron, String className) throws SchedulerException;

    Trigger getJob(String name, String group) throws SchedulerException;

    boolean modifyJob(String name, String group, String cron) throws SchedulerException;

    boolean deleteJob(String name, String group) throws SchedulerException;
}
