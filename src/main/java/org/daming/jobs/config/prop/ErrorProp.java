package org.daming.jobs.config.prop;

import org.daming.jobs.base.support.YamlPropertySourceFactory;
import org.daming.jobs.pojo.ApiError;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

import java.util.List;

@Configuration
@ConfigurationProperties()
@PropertySource(value = "classpath:errors.yml", factory = YamlPropertySourceFactory.class)
public class ErrorProp {

    private List<ApiError> errors;

    public List<ApiError> getErrors() {
        return errors;
    }

    public void setErrors(List<ApiError> errors) {
        this.errors = errors;
    }
}
