package org.daming.jobs.pojo.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

import java.io.Serializable;
import java.util.StringJoiner;

@ApiModel("delete job request")
public class DeleteJobRequest implements Serializable  {

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

    public DeleteJobRequest() {
        super();
    }

    public DeleteJobRequest(String name, String group) {
        super();
        this.name = name;
        this.group = group;
    }

    @Override
    public String toString() {
        return new StringJoiner(", ", DeleteJobRequest.class.getSimpleName() + "[", "]")
                .add("name='" + name + "'")
                .add("group='" + group + "'")
                .toString();
    }
}
