package org.daming.jobs.base.token;

import java.io.Serializable;
import java.util.Date;

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
}
