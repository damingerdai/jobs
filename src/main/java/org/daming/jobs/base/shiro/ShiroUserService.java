package org.daming.jobs.base.shiro;

import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Deprecated
@Service
public class ShiroUserService {

    private Map<String, UserBean> datasource;

    public UserBean getUser(String username) {
        return this.datasource.get(username);
    }


    @PostConstruct
    private void init() {
        this.datasource = new HashMap<>(2);
        this.datasource.put("admin", new UserBean("admin", "12345", "admin", "view,edit"));
        this.datasource.put("daming", new UserBean("daming", "12345", "user", "view"));
    }

}
