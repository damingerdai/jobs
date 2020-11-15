package org.daming.jobs.config.service;

public interface IErrorCodeService {

    String getErrorMessage(int errCode);

    String getErrorMessage(int errCode, Object ... params);
}
