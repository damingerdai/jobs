package org.daming.jobs.api.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.daming.jobs.service.IRepoService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/repos")
@Tag(name = "Repo Controller")
public class RepoController {

    private IRepoService repoService;

    @Operation(summary = "commits api")
    @GetMapping("/commits")
    public String listCommits() throws Exception {
        return this.repoService.listCommits();
    }

    public RepoController(IRepoService repoService) {
        this.repoService = repoService;
    }
}
