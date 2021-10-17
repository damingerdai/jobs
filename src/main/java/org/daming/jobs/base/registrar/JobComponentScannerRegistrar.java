package org.daming.jobs.base.registrar;

import org.daming.jobs.base.annotations.JobComponentScan;
import org.daming.jobs.base.sanner.FindJobComponentScanHandle;
import org.springframework.beans.factory.support.BeanDefinitionRegistry;
import org.springframework.beans.factory.support.BeanNameGenerator;
import org.springframework.context.ResourceLoaderAware;
import org.springframework.context.annotation.ImportBeanDefinitionRegistrar;
import org.springframework.core.annotation.AnnotationAttributes;
import org.springframework.core.io.ResourceLoader;
import org.springframework.core.type.AnnotationMetadata;
import org.springframework.core.type.StandardAnnotationMetadata;

import java.util.Arrays;
import java.util.Objects;;

public class JobComponentScannerRegistrar implements ImportBeanDefinitionRegistrar, ResourceLoaderAware {

    private ResourceLoader resourceLoader;

    @Override
    public void setResourceLoader(ResourceLoader resourceLoader) {
        this.resourceLoader = resourceLoader;
    }

//    @Override
//    public void registerBeanDefinitions(AnnotationMetadata importingClassMetadata, BeanDefinitionRegistry registry, BeanNameGenerator importBeanNameGenerator) {
//
//    }

    @Override
    public void registerBeanDefinitions(AnnotationMetadata importingClassMetadata, BeanDefinitionRegistry registry) {
        // 获取所有注解的属性和值
        AnnotationAttributes annoAtts = AnnotationAttributes.fromMap(importingClassMetadata.getAnnotationAttributes(JobComponentScan.class.getName()));
        if (Objects.isNull(annoAtts)) {
            return;
        }
        // 获取到basePackage的值
        String[] basePackages = annoAtts.getStringArray("basePackage");
        // 如果没有设置basePackage扫描路径，就扫描对应包下面的值
        if (basePackages.length == 0 && importingClassMetadata instanceof StandardAnnotationMetadata) {
            basePackages = new String[]{ ((StandardAnnotationMetadata)importingClassMetadata).getIntrospectedClass().getPackage().getName() };
        }
        if (basePackages.length == 0) {
            return;
        }
        // 自定义的包扫描器
        FindJobComponentScanHandle scanHandle = new FindJobComponentScanHandle(registry, false);

        if(Objects.nonNull(resourceLoader)) {
            scanHandle.setResourceLoader(resourceLoader);
        }

        scanHandle.scan(basePackages);
    }

    @Deprecated
    private void doRegisterBeanDefinitions(AnnotationMetadata importingClassMetadata, BeanDefinitionRegistry registry, BeanNameGenerator importBeanNameGenerator) {
        var annoAttrs = AnnotationAttributes.fromMap(importingClassMetadata.getAnnotationAttributes(JobComponentScan.class.getName()));
        if (Objects.isNull(annoAttrs)) {
            return;
        }
        String[] basePackages = annoAttrs.getStringArray("basePackage");
        if (basePackages.length == 0 && importingClassMetadata instanceof StandardAnnotationMetadata) {
            basePackages = new String[]{ ((StandardAnnotationMetadata)importingClassMetadata).getIntrospectedClass().getPackage().getName() };
        }
        if (basePackages.length == 0) {
            return;
        }
        var scanHandle = new FindJobComponentScanHandle(registry, false);
        if (Objects.nonNull(this.resourceLoader)) {
            scanHandle.setResourceLoader(this.resourceLoader);
        }

        scanHandle.setBeanNameGenerator(importBeanNameGenerator);
        // Set<BeanDefinitionHolder> beanDefinitionHolders = scanHandle.doScan(basePackages);

    }
}
