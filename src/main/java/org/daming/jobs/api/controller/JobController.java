package org.daming.jobs.api.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.daming.jobs.pojo.JobInfo;
import org.daming.jobs.pojo.request.AddJobRequest;
import org.daming.jobs.pojo.request.DeleteJobRequest;
import org.daming.jobs.service.IQuartzService;
import org.quartz.SchedulerException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1")
@Api(tags = "Jobs Controller")
public class JobController {

    private IQuartzService quartzService;

    @ApiOperation(value = "add job api", notes = "add a quartz job detail")
    @PostMapping(path = "/job")
    public ResponseEntity<Boolean> addJob(@RequestBody AddJobRequest request) {
        try {
            this.quartzService.addJob(request.getName(), request.getGroup(), request.getCron(),"org.daming.jobs.task.HelloTask");
            return ResponseEntity.of(Optional.of(true));
        } catch (SchedulerException e) {
            return ResponseEntity.of(Optional.of(false));
        }
    }

    @ApiOperation(value = "list job api", notes = "list all quartz job detail")
    @GetMapping(path = "/jobs")
    public ResponseEntity<List<JobInfo>> listJobs() {
        try {
            var jobs = this.quartzService.listJob();
            return ResponseEntity.ok(jobs);
        } catch (SchedulerException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @ApiOperation(value = "delete job api", notes = "delete a quartz job detail")
    @DeleteMapping(path = "/job")
    public  ResponseEntity<Boolean> deleteJob(@RequestBody DeleteJobRequest request) {
        try {
            this.quartzService.deleteJob(request.getName(), request.getGroup());
            return ResponseEntity.of(Optional.of(true));
        } catch (SchedulerException e) {
            e.printStackTrace();
            return ResponseEntity.of(Optional.of(false));
        }

    }

    @ApiOperation(value = "get job api", notes = "fetch a quartz job detail")
    @GetMapping(path = "/job")
    public ResponseEntity<JobInfo> getJob(@RequestParam String job, @RequestParam String group) {
        try {
            return ResponseEntity.ok(this.quartzService.getJob(job, group));
        } catch (SchedulerException e) {
           // return ResponseEntity.status(404).body(e.getMessage());
            throw new RuntimeException(e);
        }
    }

    public JobController(IQuartzService quartzService) {
        super();
        this.quartzService = quartzService;
    }
}
