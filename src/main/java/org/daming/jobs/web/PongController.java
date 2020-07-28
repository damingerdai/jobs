package org.daming.jobs.web;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PongController {

    @RequestMapping(path = "ping")
    public String ping() {
        return "pong";
    }
}
