package org.daming.jobs.config.service.impl;

import org.daming.jobs.config.prop.TokenProp;
import org.daming.jobs.config.service.ITokenConfigService;
import org.springframework.stereotype.Service;

/**
 * TokenConfigService
 *
 * @author daming
 * @date 2020-11-17 23:06:23:06
 */
@Service
public class TokenConfigServiceImpl implements ITokenConfigService {

    private TokenProp tokenProp;

    @Override
    public TokenProp getTokenPropInfo() {
        return tokenProp;
    }

    public TokenConfigServiceImpl(TokenProp tokenProp) {
        super();
        this.tokenProp = tokenProp;
    }
}
