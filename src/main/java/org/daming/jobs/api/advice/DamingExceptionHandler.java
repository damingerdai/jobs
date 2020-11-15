package org.daming.jobs.api.advice;

import org.daming.jobs.base.constant.ErrorCodeConstant;
import org.daming.jobs.base.exceptions.DamingException;
import org.daming.jobs.base.logger.LoggerManager;
import org.daming.jobs.pojo.ApiError;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

/**
 * daming exception handler
 *
 * @author daming
 * @date 2020-11-15 20:25:20:25
 */
@RestControllerAdvice
public class DamingExceptionHandler {

    @ExceptionHandler(value = DamingException.class)
    public ResponseEntity<ApiError> baseErrorHandler(Exception e) throws Exception {
        DamingException de = (DamingException) e;

        return ResponseEntity.status(-1)
                .body(new ApiError().setCode(de.getCode()).setMessage(de.getMessage()));
    }

    @ExceptionHandler(value = Exception.class)
    public ResponseEntity<ApiError> defaultErrorHandler(Exception e) throws Exception {
        LoggerManager.getErrorLogger().error("ERR-" + ErrorCodeConstant.ERR_SYSTEM+ ", " + e.getMessage(),e);
        var error = new ApiError().setCode("ERR-" + ErrorCodeConstant.ERR_SYSTEM).setMessage(e.getMessage());

        return ResponseEntity.status(-1).body(error);
    }
}
