package org.daming.jobs.config.service.impl;

import org.daming.jobs.config.prop.ErrorProp;
import org.daming.jobs.config.service.IErrorCodeService;
import org.daming.jobs.pojo.ApiError;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

/**
 * ErrorCodeService
 *
 * @author daming
 * @date 2020-11-14 19:21:19:21
 */
@Service
public class ErrorCodeServiceImpl implements IErrorCodeService {

    private ErrorProp errorProp;
    private Map<Integer, String> errorMap;

    @PostConstruct
    private void init() {
        Optional.ofNullable(errorProp).map(ErrorProp::getErrors).ifPresent(errors -> {
            this.errorMap = errors.stream().collect(Collectors.toMap(apiError -> Integer.valueOf(apiError.getCode()), ApiError::getMessage));
        });

        if (Objects.isNull(errorMap)){
            this.errorMap =  new HashMap<>();
        }
    }

    @Override
    public String getErrorMessage(int errCode) {
        return errorMap.get(errCode);
    }

    @Override
    public String getErrorMessage(int errCode, Object... params) {
        String errorMessage = getErrorMessage(errCode);
        if (errorMessage != null) {
            errorMessage = String.format(errorMessage, params);
        }
        return errorMessage;
    }

    public ErrorCodeServiceImpl(ErrorProp errorProp) {
        super();
        this.errorProp = errorProp;
    }
}
