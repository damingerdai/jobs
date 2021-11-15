package org.daming.jobs.base.token;

import java.io.Serializable;
import java.util.Date;
import java.util.StringJoiner;

/**
 * user token
 *
 * @author daming
 * @date 2020-11-19 23:51:23:51
 */
public class UserToken implements Serializable  {

    private static final long serialVersionUID = -5524823722894986324L;

    private String	token;
    private String	refreshToken;
    private Date exp;

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getRefreshToken() {
        return refreshToken;
    }

    public void setRefreshToken(String refreshToken) {
        this.refreshToken = refreshToken;
    }

    public Date getExp() {
        return exp;
    }

    public void setExp(Date exp) {
        this.exp = exp;
    }

    public UserToken(String token, String refreshToken, Date exp) {
        super();
        this.token = token;
        this.refreshToken = refreshToken;
        this.exp = exp;
    }

    public UserToken() {
        super();
    }

    @Override
    public String toString() {
        return new StringJoiner(", ", UserToken.class.getSimpleName() + "[", "]")
                .add("token='" + token + "'")
                .add("refreshToken='" + refreshToken + "'")
                .add("exp=" + exp)
                .toString();
    }
}
