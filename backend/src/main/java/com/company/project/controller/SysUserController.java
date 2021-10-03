package com.company.project.controller;

import com.auth0.jwt.algorithms.Algorithm;
import com.company.project.core.Result;
import com.company.project.core.ResultGenerator;
import com.company.project.model.SysUser;
import com.company.project.model.dto.findUserListDto;
import com.company.project.model.dto.loginReturn;
import com.company.project.service.SysUserService;
import com.company.project.utilClass.RSA;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.apache.commons.codec.binary.Base64;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.security.interfaces.RSAPrivateKey;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.auth0.jwt.JWT;

/**
 * Created by DLHTX on 2021/10/02.
 */
@RestController
@RequestMapping("/api/user")
public class SysUserController {
    @Resource
    private SysUserService sysUserService;
    private RSA RSACoder;

    @PostMapping("/addUser")
    public Result add(@RequestBody SysUser sysUser) throws Exception {
        //数据的加密
        byte[] encryedPass = RSACoder.encryptByPrivateKey(sysUser.getPassword().getBytes(), Base64.decodeBase64(RSA.privatekey));
        sysUser.setPassword(Base64.encodeBase64String(encryedPass));
        sysUserService.save(sysUser);
        return ResultGenerator.genSuccessResult();
    }

    @PostMapping("/editUser")
    public Result editUser(@RequestBody SysUser sysUser) throws Exception {
        //数据的加密
        if (sysUser.getPassword() != null & sysUser.getPassword() != "") {
            byte[] encryedPass = RSACoder.encryptByPrivateKey(sysUser.getPassword().getBytes(), Base64.decodeBase64(RSA.privatekey));
            sysUser.setPassword(Base64.encodeBase64String(encryedPass));
        }

        sysUserService.update(sysUser);
        return ResultGenerator.genSuccessResult();
    }


    @PostMapping("/login")
    public Result login(@RequestBody SysUser sysUser) throws Exception{
        List<loginReturn> list = sysUserService.findUser(sysUser);
        if(list.isEmpty()){
            return ResultGenerator.genFailResult("查无此用户");
        }else{
            return ResultGenerator.genSuccessResult(list);
        }
    }

    @PostMapping("/getUserList")
    public Result getUserList(@RequestParam(defaultValue = "0") Integer page, @RequestParam(defaultValue = "10") Integer row) {
        List<findUserListDto> list = sysUserService.findUserList();
        return ResultGenerator.genSuccessResult(list);
    }
}
