package org.daming.jobs.api.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.Parameters;
import io.swagger.v3.oas.annotations.enums.ParameterIn;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.daming.jobs.base.token.UserToken;
import org.daming.jobs.service.ITokenService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
@Tag( name = "Token Controller")
public class TokenController {

    private ITokenService tokenService;

    @Operation(summary = "create", description = "create token api")
    @Parameters({
            @Parameter(name = "username", description = "username", required = true, allowEmptyValue = false, in = ParameterIn.HEADER, example = "admin"),
            @Parameter(name = "password", description = "password", required = true, allowEmptyValue = false, in = ParameterIn.HEADER, example = "12345")
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
