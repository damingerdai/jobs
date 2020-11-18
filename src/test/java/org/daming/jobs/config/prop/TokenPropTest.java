package org.daming.jobs.config.prop;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class TokenPropTest {

    @Autowired
    private TokenProp tokenProp;

    @Test
    void getAccessTokenTTL() {
    }

    @Test
    void setAccessTokenTTL() {
    }

    @Test
    void getRefreshTokenTTL() {
    }

    @Test
    void setRefreshTokenTTL() {
    }
}