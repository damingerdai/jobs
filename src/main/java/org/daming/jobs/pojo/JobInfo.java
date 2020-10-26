package org.daming.jobs.pojo;

import java.io.Serializable;
import java.util.StringJoiner;

public class JobInfo implements Serializable {

    private String group;

    private String name;

    private String cron;

    private String state;

    private String timezone;

    private String className;

    public String getGroup() {
        return group;
    }

    public JobInfo setGroup(String group) {
        this.group = group;
        return this;
    }

    public String getName() {
        return name;
    }

    public JobInfo setName(String name) {
        this.name = name;
        return this;
    }

    public String getCron() {
        return cron;
    }

    public JobInfo setCron(String cron) {
        this.cron = cron;
        return this;
    }

    public String getState() {
        return state;
    }

    public JobInfo setState(String state) {
        this.state = state;
        return this;
    }

    public String getTimezone() {
        return timezone;
    }

    public JobInfo setTimezone(String timezone) {
        this.timezone = timezone;
        return this;
    }

    public String getClassName() {
        return className;
    }

    public JobInfo setClassName(String className) {
        this.className = className;
        return this;
    }

    public JobInfo() {
        super();
    }

    public JobInfo(String group, String name, String cron, String state, String timezone, String className) {
        super();
        this.group = group;
        this.name = name;
        this.cron = cron;
        this.state = state;
        this.timezone = timezone;
        this.className = className;
    }

    @Override
    public String toString() {
        return new StringJoiner(", ", JobInfo.class.getSimpleName() + "[", "]")
                .add("group='" + group + "'")
                .add("name='" + name + "'")
                .add("cron='" + cron + "'")
                .add("state='" + state + "'")
                .add("timezone='" + timezone + "'")
                .add("className='" + className + "'")
                .toString();
    }
}
