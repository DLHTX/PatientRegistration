package com.company.project.model.dto;

import com.company.project.model.SysUser;

public class loginReturn extends SysUser {
    String token;

    String auth_list;

    public String getAuth_list() {
        return auth_list;
    }

    public void setAuth_list(String auth_list) {
        this.auth_list = auth_list;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
