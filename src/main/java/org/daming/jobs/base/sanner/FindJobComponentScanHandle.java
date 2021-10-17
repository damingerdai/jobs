package org.daming.jobs.base.sanner;

import org.daming.jobs.base.annotations.JobComponent;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.beans.factory.config.BeanDefinitionHolder;
import org.springframework.beans.factory.support.BeanDefinitionRegistry;
import org.springframework.context.annotation.AnnotationBeanNameGenerator;
import org.springframework.context.annotation.ClassPathBeanDefinitionScanner;
import org.springframework.core.type.filter.AnnotationTypeFilter;
import org.springframework.lang.NonNull;

import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class FindJobComponentScanHandle extends ClassPathBeanDefinitionScanner {

    public FindJobComponentScanHandle(BeanDefinitionRegistry registry, boolean useDefaultFilters) {
        super(registry, useDefaultFilters);
    }

    @Override
    @NonNull
    protected Set<BeanDefinitionHolder> doScan(@NonNull String... basePackages) {
        //添加过滤条件，这里是只添加了@JobComponent注解才会被扫描到
        super.addIncludeFilter(new AnnotationTypeFilter(JobComponent.class));
        Set<BeanDefinitionHolder> beanDefinitionHolders = Stream
                .of(basePackages)
                .map(this::findCandidateComponents)
                .flatMap(Collection::stream)
                .map(candidate -> {
                    var beanName = AnnotationBeanNameGenerator.INSTANCE.generateBeanName(candidate, this.getRegistry());
                    return new BeanDefinitionHolder(candidate, beanName);
                })
                .collect(Collectors.toSet());
        beanDefinitionHolders.forEach(beanDefinitionHolder -> {
            System.out.println(beanDefinitionHolder.getBeanName());
        });
        return beanDefinitionHolders;
    }

    @Override
    protected boolean checkCandidate(@NonNull String beanName, @NonNull BeanDefinition beanDefinition) throws IllegalStateException {
        return Objects.requireNonNull(this.getRegistry()).containsBeanDefinition(beanName);
    }
}
