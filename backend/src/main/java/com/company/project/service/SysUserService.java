package com.company.project.service;
import com.company.project.model.SysUser;
import com.company.project.core.Service;
import com.company.project.model.dto.findUserListDto;
import com.company.project.model.dto.loginReturn;

import java.util.List;


/**
 * Created by DLHTX on 2020/06/21.
 */
public interface SysUserService extends Service<SysUser> {
    List<loginReturn> findUser(SysUser sysUser) throws Exception;
    List<findUserListDto> findUserList();
}
