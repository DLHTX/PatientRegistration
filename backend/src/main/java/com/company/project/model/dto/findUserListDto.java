package com.company.project.model.dto;

import com.company.project.model.SysUser;

public class findUserListDto extends SysUser {
    private String auth_name;

    public String getAuth_name() {
        return auth_name;
    }

    public void setAuth_name(String auth_name) {
        this.auth_name = auth_name;
    }
}
