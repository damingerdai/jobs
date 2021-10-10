package org.daming.jobs.config.prop;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class ErrorPropTest {

    @Autowired
    private ErrorProp errorProp;

    @Test
    public void commonTest() {
       var errors = errorProp.getErrors();
       assertNotNull(errors);
       assertNotEquals(0, errors.size());
       errors.forEach(System.out::println);
    }
}