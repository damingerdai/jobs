package org.daming.jobs.pojo;

import java.io.Serializable;
import java.util.StringJoiner;

public class ApiError implements Serializable {

    private static final long serialVersionUID = 1086089836505049911L;

    private String code;

    private String message;

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public ApiError(String code, String message) {
        super();
        this.code = code;
        this.message = message;
    }

    public ApiError() {
        super();
    }

    @Override
    public String toString() {
        return new StringJoiner(", ", ApiError.class.getSimpleName() + "[", "]")
                .add("code='" + code + "'")
                .add("message='" + message + "'")
                .toString();
    }
}
