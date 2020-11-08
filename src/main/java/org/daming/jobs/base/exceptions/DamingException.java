package org.daming.jobs.base.exceptions;

import java.util.StringJoiner;

public class DamingException extends RuntimeException {

    private static final long serialVersionUID = 7497804251302753765L;

    private String code;

    private String message;

    private Throwable cause;

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    @Override
    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    @Override
    public Throwable getCause() {
        return cause;
    }

    public void setCause(Throwable cause) {
        this.cause = cause;
    }

    public DamingException() {
        super();
    }

    public DamingException(String code, String message) {
        super(message);
        this.code = code;
        this.message = message;
    }

    public DamingException(String code, String message, Throwable cause) {
        super(message, cause);
        this.code = code;
        this.message = message;
        this.cause = cause;
    }

    @Override
    public String toString() {
        return new StringJoiner(", ", DamingException.class.getSimpleName() + "[", "]")
                .add("code='" + code + "'")
                .add("message='" + message + "'")
                .add("cause=" + cause)
                .toString();
    }
}
