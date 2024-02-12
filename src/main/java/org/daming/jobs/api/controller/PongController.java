package org.daming.jobs.api.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Tag(name = "ping controller")
public class PongController {

    @Operation(summary = "ping api", description = "use a heath check")
    @RequestMapping(path = "ping")
    public String ping() {
        return "pong";
    }
}
