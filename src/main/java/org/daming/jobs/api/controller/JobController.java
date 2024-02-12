package org.daming.jobs.api.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.daming.jobs.pojo.JobInfo;
import org.daming.jobs.pojo.request.AddJobRequest;
import org.daming.jobs.pojo.request.DeleteJobRequest;
import org.daming.jobs.pojo.request.PauseResumeJobRequest;
import org.daming.jobs.service.IQuartzService;
import org.quartz.SchedulerException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1")
@Tag(name = "Jobs Controller")
public class JobController {

    private IQuartzService quartzService;

    @Operation(summary = "add job api", description = "add a quartz job detail")
    @PostMapping(path = "/job")
    public ResponseEntity<Boolean> addJob(@RequestBody AddJobRequest request) {
        try {
            this.quartzService.addJob(request.getName(), request.getGroup(), request.getCron(),"org.daming.jobs.task.HelloTask");
            return ResponseEntity.of(Optional.of(true));
        } catch (SchedulerException e) {
            return ResponseEntity.of(Optional.of(false));
        }
    }

    @Operation(summary= "list job api", description = "list all quartz job detail")
    @GetMapping(path = "/jobs")
    public ResponseEntity<List<JobInfo>> listJobs() {
        try {
            var jobs = this.quartzService.listJob();
            return ResponseEntity.ok(jobs);
        } catch (SchedulerException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @Operation(summary = "delete job api", description = "delete a quartz job detail")
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

    @Operation(summary = "get job api", description = "fetch a quartz job detail")
    @GetMapping(path = "/job")
    public ResponseEntity<JobInfo> getJob(@RequestParam String job, @RequestParam String group) {
        try {
            return ResponseEntity.ok(this.quartzService.getJob(job, group));
        } catch (SchedulerException e) {
           // return ResponseEntity.status(404).body(e.getMessage());
            throw new RuntimeException(e);
        }
    }

    @Operation(summary = "pause job api", description = "pause a quartz job")
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

    @Operation(summary = "resume job api", description = "resume a quartz job")
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
