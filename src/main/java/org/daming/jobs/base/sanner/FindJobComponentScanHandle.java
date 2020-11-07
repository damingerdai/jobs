package org.daming.jobs.base.sanner;

import org.daming.jobs.base.annotations.JobComponent;
import org.springframework.beans.factory.config.BeanDefinitionHolder;
import org.springframework.beans.factory.support.BeanDefinitionRegistry;
import org.springframework.context.annotation.ClassPathBeanDefinitionScanner;
import org.springframework.core.type.filter.AnnotationTypeFilter;
import org.springframework.lang.NonNull;

import java.util.Set;


public class FindJobComponentScanHandle extends ClassPathBeanDefinitionScanner {

    public FindJobComponentScanHandle(BeanDefinitionRegistry registry, boolean useDefaultFilters) {
        super(registry, useDefaultFilters);
    }

    @Override
    @NonNull
    protected Set<BeanDefinitionHolder> doScan(@NonNull String... basePackages) {
        //添加过滤条件，这里是只添加了@NRpcServer的注解才会被扫描到
        addIncludeFilter(new AnnotationTypeFilter(JobComponent.class));
        //调用spring的扫描
        return super.doScan(basePackages);
    }
}
