package org.daming.jobs.base.shiro;

import java.io.Serializable;
import java.util.StringJoiner;

public class UserBean implements Serializable {

    private long id;

    private String username;

    private String password;

    private String role;

    private String permission;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getPermission() {
        return permission;
    }

    public void setPermission(String permission) {
        this.permission = permission;
    }

    public UserBean() {
        super();
    }

    public UserBean(String username, String password, String role, String permission) {
        super();
        this.username = username;
        this.password = password;
        this.role = role;
        this.permission = permission;
    }

    @Override
    public String toString() {
        return new StringJoiner(", ", UserBean.class.getSimpleName() + "[", "]")
                .add("username='" + username + "'")
                .add("password='" + password + "'")
                .add("role='" + role + "'")
                .add("permission='" + permission + "'")
                .toString();
    }
}
