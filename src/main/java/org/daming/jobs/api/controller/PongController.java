package org.daming.jobs.api.controller;

import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PongController {

    @ApiOperation(value = "ping api", notes = "use a heath check")
    @RequestMapping(path = "ping")
    public String ping() {
        return "pong";
    }
}
