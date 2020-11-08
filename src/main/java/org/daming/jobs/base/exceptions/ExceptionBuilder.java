package org.daming.jobs.base.exceptions;

import org.daming.jobs.base.logger.LoggerManager;

public class ExceptionBuilder {

    public static DamingException buildException(String code, String message, Throwable clause) {
        DamingException ex = new DamingException(code, message, clause);
        logPointEngineException(ex);
        return ex;
    }

    public static DamingException buildException(String code, String message) {
        return buildException(code, message, null);
    }

    private static void logPointEngineException(DamingException e) {
        LoggerManager.getErrorLogger().error(e.getCode() + ", " + e.getMessage(),e);
    }
}
