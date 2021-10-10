package org.daming.jobs.config.service;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class IErrorCodeServiceTest {

    @Autowired
    private IErrorCodeService errorCodeService;

    @Test
    void getErrorMessage() {
        var code = 600002;
        var message = errorCodeService.getErrorMessage(code);
        assertEquals("访问拒绝.", message);

        code = 600001;
        message = errorCodeService.getErrorMessage(code, "内部异常");
        assertEquals("系统错误 内部异常", message);
    }


}