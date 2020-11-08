package org.daming.jobs.base;

import java.io.Serializable;
import java.time.Instant;
import java.util.StringJoiner;

public class DamingContext implements Serializable {

    private static final long serialVersionUID = 6335881757528034609L;

    private String requestId;

    private Instant in;

    public String getRequestId() {
        return requestId;
    }

    public DamingContext setRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }

    public Instant getIn() {
        return in;
    }

    public DamingContext setIn(Instant in) {
        this.in = in;
        return this;
    }

    public DamingContext() {
        super();
    }

    @Override
    public String toString() {
        return new StringJoiner(", ", DamingContext.class.getSimpleName() + "[", "]")
                .add("requestId='" + requestId + "'")
                .add("in=" + in)
                .toString();
    }
}
