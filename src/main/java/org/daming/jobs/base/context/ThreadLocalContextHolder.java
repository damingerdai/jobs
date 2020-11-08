package org.daming.jobs.base.context;

import org.daming.jobs.base.DamingContext;

public class ThreadLocalContextHolder {

    private static final ThreadLocal<DamingContext> THREAD_WITH_CONTEXT = ThreadLocal.withInitial(DamingContext::new);

    private ThreadLocalContextHolder() {
    }

    public static void put(DamingContext context) {
        THREAD_WITH_CONTEXT.set(context);
    }

    public static DamingContext get() {
        return THREAD_WITH_CONTEXT.get();
    }

    public static void cleanupThread() {
        THREAD_WITH_CONTEXT.remove();
    }
}
