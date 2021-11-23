package org.daming.jobs.api.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.daming.jobs.pojo.JobInfo;
import org.daming.jobs.pojo.request.AddJobRequest;
import org.daming.jobs.pojo.request.DeleteJobRequest;
import org.daming.jobs.pojo.request.PauseResumeJobRequest;
import org.daming.jobs.service.IQuartzService;
import org.quartz.SchedulerException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @ApiOperation(value = "pause job api", notes = "pause a quartz job")
    @PutMapping(path = "/job/pause")
    public ResponseEntity<Boolean> pauseJob(@RequestBody PauseResumeJobRequest request) {
        try {
            var job = request.getName();
            var group = request.getGroup();
            return ResponseEntity.ok(this.quartzService.pauseJob(job, group));
        } catch (SchedulerException e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body(false);
        }
    }

    @ApiOperation(value = "resume job api", notes = "resume a quartz job")
    @PutMapping(path = "/job/resume")
    public ResponseEntity<Boolean> resumeJob(@RequestBody PauseResumeJobRequest request) {
        try {
            var job = request.getName();
            var group = request.getGroup();
            return ResponseEntity.ok(this.quartzService.resumeJob(job, group));
        } catch (SchedulerException e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body(false);
        }
    }

    public JobController(IQuartzService quartzService) {
        super();
        this.quartzService = quartzService;
    }
}
