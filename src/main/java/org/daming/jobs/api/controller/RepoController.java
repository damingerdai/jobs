package org.daming.jobs.api.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.daming.jobs.service.IRepoService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/repos")
@Api(tags = "Repo Controller")
public class RepoController {

    private IRepoService repoService;

    @ApiOperation(value = "commits api")
    @GetMapping("/commits")
    public String listCommits() throws Exception {
        return this.repoService.listCommits();
    }

    public RepoController(IRepoService repoService) {
        this.repoService = repoService;
    }
}
