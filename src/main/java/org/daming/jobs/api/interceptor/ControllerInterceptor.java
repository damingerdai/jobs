package org.daming.jobs.api.interceptor;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.HttpServletRequest;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.daming.jobs.base.context.ThreadLocalContextHolder;
import org.daming.jobs.base.logger.LoggerManager;
import org.springframework.stereotype.Component;
import org.springframework.util.Assert;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import java.util.UUID;

/**
 * ControllerInterceptor
 *
 * @author daming
 * @date 2020-11-15 20:51:20:51
 */
@Aspect
@Component
public class ControllerInterceptor {

    private ObjectMapper jsonMapper;

    @Pointcut("execution(* org.daming.jobs.api.controller..*(..)) && (@annotation(org.springframework.web.bind.annotation.RequestMapping) || @annotation(org.springframework.web.bind.annotation.DeleteMapping) || @annotation(org.springframework.web.bind.annotation.GetMapping) || @annotation(org.springframework.web.bind.annotation.PostMapping) || @annotation(org.springframework.web.bind.annotation.PutMapping))")
    public void controllerMethodPointcut(){}

    @Around("controllerMethodPointcut()")
    public Object doAround(ProceedingJoinPoint pjp) throws Throwable {
        RequestAttributes ra = RequestContextHolder.getRequestAttributes();
        ServletRequestAttributes sra = (ServletRequestAttributes) ra;
        Assert.notNull(sra, "no servlet request attributes");
        HttpServletRequest request = sra.getRequest();

        String url = request.getRequestURL().toString();
        String method = request.getMethod();
        String uri = request.getRequestURI();
        Object[] arguments = pjp.getArgs();
        String param = getMethodArgs(arguments);
        String controllerClass = pjp.getTarget().getClass().getName();
        String controllerMethod = pjp.getSignature().getName();
        String requestId = null;
        if (ThreadLocalContextHolder.get() != null) {
            requestId = ThreadLocalContextHolder.get().getRequestId();
        }
        if (requestId == null) {
            requestId = UUID.randomUUID().toString();
        }

        LoggerManager.getApiLogger().info("Request Start. requestId: {}, url: {}, uri: {}, request method: {}, controller class: {}, controller method: {}, request params: {}", requestId,  url, uri, method, controllerClass, controllerMethod, param);

        Object result = pjp.proceed();

        LoggerManager.getApiLogger().info("Request End. requestId: {}, controller class: {}, controller method: {}, response params: {}", requestId, controllerClass, controllerMethod, jsonMapper.writeValueAsString(result));
        ThreadLocalContextHolder.cleanupThread();
        return result;
    }

    private String getMethodArgs(Object[] args) throws JsonProcessingException {
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < args.length; i++) {
            sb.append("arg[").append(i).append("]: ").append(jsonMapper.writeValueAsString(args[i])).append(",");
        }
        if (args.length > 0) {
            sb.deleteCharAt(sb.length() - 1);
        }
        return sb.toString();
    }

    public ControllerInterceptor(ObjectMapper jsonMapper) {
        super();
        this.jsonMapper = jsonMapper;
    }
}
