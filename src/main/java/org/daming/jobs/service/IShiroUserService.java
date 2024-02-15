package org.daming.jobs.service;

import org.daming.jobs.base.shiro.UserBean;

/**
 * @author gming001
 * @version 2024-02-14 13:37
 */
public interface IShiroUserService {

    UserBean getUser(String username);
}
