package org.daming.jobs.base.annotations;

import org.daming.jobs.base.registrar.JobComponentScannerRegistrar;
import org.springframework.context.annotation.Import;

import java.lang.annotation.Documented;
import java.lang.annotation.ElementType;
import java.lang.annotation.Inherited;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Documented
@Retention(RetentionPolicy.RUNTIME)
@Import(JobComponentScannerRegistrar.class)
@Target({ElementType.TYPE})
public @interface JobComponentScan {

    String[] basePackage() default {};

}
