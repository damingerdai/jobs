package org.daming.jobs;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Objects;

// @SpringBootTest
class JobsApplicationTests {

    @Test
    void contextLoads() {
        var a = new Object[]{1, 2, 2.718, 3.14159};
        System.out.println(Objects.hash(a));
        System.out.println(Objects.hashCode(a));
    }

}
