package org.daming.jobs.pojo.request;

import io.swagger.v3.oas.annotations.media.Schema;

import java.io.Serial;
import java.io.Serializable;
import java.util.StringJoiner;

@Schema(name = "delete job request")
public class DeleteJobRequest implements Serializable  {

    @Serial
    private static final long serialVersionUID = -119673591373760086L;

    @Schema(name = "jod name", type = "string", required = true, example="job1")
    private String name;

    @Schema(name = "group name", type = "string", required = true, example="group1")
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
