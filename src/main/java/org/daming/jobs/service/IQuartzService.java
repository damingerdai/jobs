package org.daming.jobs.service;

import org.daming.jobs.pojo.JobInfo;
import org.quartz.SchedulerException;
import org.quartz.Trigger;

import java.util.List;

public interface IQuartzService {

    void addJob(String name, String group, String cron, String className) throws SchedulerException;

    JobInfo getJob(String name, String group) throws SchedulerException;

    boolean modifyJob(String name, String group, String cron) throws SchedulerException;

    boolean deleteJob(String name, String group) throws SchedulerException;

    List<JobInfo> listJob() throws SchedulerException;
}
