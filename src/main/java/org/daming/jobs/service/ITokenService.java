package org.daming.jobs.service;

import org.daming.jobs.base.token.UserToken;

public interface ITokenService {

    UserToken createToken(String username, String password);

    UserToken refreshToken(String token);
}
