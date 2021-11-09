package org.daming.jobs.service.impl;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class RepoServiceImplTest {

    @Autowired
    private RepoServiceImpl repoService;

    @Test
    void listCommits() throws Exception {
        this.repoService.listCommits();
    }

}