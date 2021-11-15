package org.daming.jobs.api.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import org.daming.jobs.base.token.UserToken;
import org.daming.jobs.service.ITokenService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
@Api(tags = "Token Controller")
public class TokenController {

    private ITokenService tokenService;

    @ApiOperation(value = "create", notes = "create token api")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "username", value = "username", required = true, allowEmptyValue = false, paramType = "header", dataTypeClass = String.class, example = "admin"),
            @ApiImplicitParam(name = "password", value = "password", required = true, allowEmptyValue = false, paramType = "header", dataTypeClass = String.class, example = "12345")
    })
    @PostMapping("token")
    public UserToken createToken(@RequestHeader String username, @RequestHeader String password) {
        return this.tokenService.createToken(username, password);
    }

    public TokenController(ITokenService tokenService) {
        super();
        this.tokenService = tokenService;
    }
}
