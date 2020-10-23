package org.daming.jobs.web;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.daming.jobs.pojo.request.AddJobRequest;
import org.daming.jobs.service.IQuartzService;
import org.quartz.SchedulerException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/api/v1")
@Api(tags = "Api Controller")
public class ApiController {

    private IQuartzService quartzService;

    @ApiOperation(value = "add job api", notes = "add a quartz job detail")
    @PostMapping(path = "/job")
    public ResponseEntity<Boolean> addJob(@RequestBody AddJobRequest request) {
        try {
            this.quartzService.addJob(request.getName(), request.getGroup(), "org.daming.jobs.task.HelloTask");
            return ResponseEntity.of(Optional.of(true));
        } catch (SchedulerException e) {
            return ResponseEntity.of(Optional.of(false));
        }

    }

    public ApiController(IQuartzService quartzService) {
        super();
        this.quartzService = quartzService;
    }
}
