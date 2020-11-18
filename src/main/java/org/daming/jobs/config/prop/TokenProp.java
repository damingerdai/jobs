package org.daming.jobs.config.prop;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import java.io.Serializable;

/**
 * TokenProp
 *
 * @author daming
 * @date 2020-11-17 22:45:22:45
 */
@Component
@ConfigurationProperties(prefix = "token.ttl")
public class TokenProp implements Serializable {

    private static final long serialVersionUID = 6856129291634880626L;

    private int accessTokenTTL;
    private int refreshTokenTTL;

    public int getAccessTokenTTL() {
        return accessTokenTTL;
    }

    public TokenProp setAccessTokenTTL(int accessTokenTTL) {
        this.accessTokenTTL = accessTokenTTL;
        return this;
    }

    public int getRefreshTokenTTL() {
        return refreshTokenTTL;
    }

    public TokenProp setRefreshTokenTTL(int refreshTokenTTL) {
        this.refreshTokenTTL = refreshTokenTTL;
        return this;
    }

    public TokenProp() {
        super();
    }
}
