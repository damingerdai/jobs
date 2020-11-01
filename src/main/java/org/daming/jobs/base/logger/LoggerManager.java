package org.daming.jobs.base.logger;

import org.slf4j.LoggerFactory;

import java.util.HashMap;
import java.util.Map;

public class LoggerManager {

    private static Map<String, DamingLogger> cache = new HashMap<>();

    public static DamingLogger getLogger(String loggerName) {
        return cache.computeIfAbsent(loggerName, LoggerManager::buildLogger);
    }

    public static DamingLogger getLogger(Class<?> className) {
        return getLogger(className.getName());
    }

    private static DamingLogger buildLogger(String loggerName) {
        return new DamingLogger(LoggerFactory.getLogger(loggerName));
    }
}
