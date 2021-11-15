package org.daming.jobs.base.utils;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class JwtToolTest {

    @Test
    void testToken() throws InterruptedException {
        var secret = "daming";
        var expireTime = 5 * 1000L;
        var token = JwtTool.createToken(secret, expireTime);
        assertNotNull(token);
        var b1 = JwtTool.verifyToken(token, secret);
        assertTrue(b1);
        Thread.sleep(10 * 1000L);
        var b2 = JwtTool.verifyToken(token, secret);
        assertFalse(b2);
    }
}