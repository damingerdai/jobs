package org.daming.jobs.base.logger;

import org.slf4j.Logger;

import java.util.function.Supplier;

public class DamingLogger {

    private final Logger logger;

    public void trace(String message) {
        if (this.logger.isTraceEnabled()) {
            this.logger.trace(message);
        }
    }

    public void trace(String message, Object...params) {
        if (this.logger.isTraceEnabled()) {
            this.logger.trace(message, params);
        }
    }

    public void trace(String message, Throwable cause) {
        if (this.logger.isTraceEnabled()) {
            this.logger.trace(message, cause);
        }
    }

    public void trace(Supplier<String> messageSupplier) {
        if (this.logger.isTraceEnabled()) {
            this.logger.trace(messageSupplier.get());
        }
    }

    public void debug(String message) {
        if (this.logger.isDebugEnabled()) {
            this.debug(message);
        }
    }

    public void debug(String message, Object...params) {
        if (this.logger.isDebugEnabled()) {
            this.debug(message, params);
        }
    }

    public void debug(String message, Throwable cause) {
        if (this.logger.isDebugEnabled()) {
            this.debug(message, cause);
        }
    }

    public void debug(Supplier<String> messageSupplier) {
        if (this.logger.isTraceEnabled()) {
            this.logger.debug(messageSupplier.get());
        }
    }

    public void info(String message) {
        if (this.logger.isInfoEnabled()) {
            this.logger.info(message);
        }
    }

    public void info(String message, Object...params) {
        if (this.logger.isInfoEnabled()) {
            this.logger.info(message, params);
        }
    }

    public void info(String message, Throwable cause) {
        if (this.logger.isInfoEnabled()) {
            this.logger.info(message, cause);
        }
    }

    public void info(Supplier<String> messageSupplier) {
        if (this.logger.isInfoEnabled()) {
            this.logger.info(messageSupplier.get());
        }
    }

    public void warn(String message) {
        if (this.logger.isWarnEnabled()) {
            this.logger.warn(message);
        }
    }

    public void warn(String message, Object...params) {
        if (this.logger.isWarnEnabled()) {
            this.logger.warn(message, params);
        }
    }

    public void warn(String message, Throwable cause) {
        if (this.logger.isWarnEnabled()) {
            this.logger.warn(message, cause);
        }
    }

    public void warn(Supplier<String> messageSupplier) {
        if (this.logger.isWarnEnabled()) {
            this.logger.warn(messageSupplier.get());
        }
    }

    public void error(String message) {
        if (this.logger.isErrorEnabled()) {
            this.logger.error(message);
        }
    }

    public void error(String message, Object...params) {
        if (this.logger.isErrorEnabled()) {
            this.logger.error(message, params);
        }
    }

    public void error(String message, Throwable cause) {
        if (this.logger.isErrorEnabled()) {
            this.logger.error(message, cause);
        }
    }

    public void error(Supplier<String> messageSupplier) {
        if (this.logger.isErrorEnabled()) {
            this.logger.error(messageSupplier.get());
        }
    }

    public DamingLogger(Logger logger) {
        this.logger = logger;
    }
}
