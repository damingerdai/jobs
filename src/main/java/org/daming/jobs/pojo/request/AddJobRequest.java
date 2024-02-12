package org.daming.jobs.pojo.request;

import io.swagger.v3.oas.annotations.media.Schema;

import java.io.Serializable;

@Schema(name = "add job request")
public class AddJobRequest implements Serializable {

    @Schema(name = "jod name", type = "string", required = true, example="job1")
    private String name;

    @Schema(name = "group name", type = "string", required = true, example="group1")
    private String group;

    @Schema(name = "job cron name", type = "string", required = true, example = "*/5 * * * * ?")
    private String cron;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getGroup() {
        return group;
    }

    public void setGroup(String group) {
        this.group = group;
    }

    public String getCron() {
        return cron;
    }

    public void setCron(String cron) {
        this.cron = cron;
    }

    public AddJobRequest() {
        super();
    }

    public AddJobRequest(String name, String group, String cron) {
        super();
        this.name = name;
        this.group = group;
        this.cron = cron;
    }
}
