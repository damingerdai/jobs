package org.daming.jobs.service;

import java.io.IOException;
import java.security.KeyManagementException;
import java.security.NoSuchAlgorithmException;

public interface IRepoService {

    String listCommits() throws IOException, InterruptedException, NoSuchAlgorithmException, KeyManagementException;
}
