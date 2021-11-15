package org.daming.jobs.service.impl;

import org.daming.jobs.base.shiro.ShiroUserService;
import org.daming.jobs.base.token.UserToken;
import org.daming.jobs.base.utils.JwtTool;
import org.daming.jobs.service.ITokenService;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.Map;
import java.util.Objects;

@Service
public class TokenServiceImpl implements ITokenService {

    private static final String SECRET = "daming";
    private static final long EXPIRE_TIME = 5 * 60*1000;

    private ShiroUserService shiroUserService;

    @Override
    public UserToken createToken(String username, String password) {
        var userBean = this.shiroUserService.getUser(username);
        if (Objects.isNull(userBean)) {
            throw new RuntimeException("INVALID USER");
        }
        if (!password.equals(userBean.getPassword())) {
            throw new RuntimeException("INVALID USER");
        }
        Map<String, Object> claims = Map.of("username", username);
        var exp = new Date(System.currentTimeMillis() + EXPIRE_TIME);
        var token = JwtTool.createToken(SECRET, EXPIRE_TIME, claims);
        var refreshToken = JwtTool.createToken(SECRET, 12 * EXPIRE_TIME, claims);
        var userToken = new UserToken(token, refreshToken, exp);
        return userToken;
    }

    @Override
    public UserToken refreshToken(String token) {
        if (!JwtTool.verifyToken(token, SECRET)) {

        }
        return null;
    }

    public TokenServiceImpl(ShiroUserService shiroUserService) {
        this.shiroUserService = shiroUserService;
    }
}
