package org.daming.jobs.pojo.request;


import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

import java.io.Serializable;

@ApiModel("add job request")
public class AddJobRequest implements Serializable {

    @ApiModelProperty(name = "jod name", dataType = "String", required = true, example="job1")
    private String name;

    @ApiModelProperty(name = "group name", dataType = "String", required = true, example="group1")
    private String group;

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

    public AddJobRequest() {
        super();
    }

    public AddJobRequest(String name, String group) {
        super();
        this.name = name;
        this.group = group;
    }
}
