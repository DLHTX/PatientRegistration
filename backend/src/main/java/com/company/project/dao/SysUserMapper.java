package com.company.project.dao;

import com.company.project.core.Mapper;
import com.company.project.model.SysUser;
import com.company.project.model.dto.findUserListDto;
import com.company.project.model.dto.loginReturn;

import java.util.List;

public interface SysUserMapper extends Mapper<SysUser> {
    List<loginReturn> findUser(SysUser sysUser);

    List<findUserListDto> findUserList();
}