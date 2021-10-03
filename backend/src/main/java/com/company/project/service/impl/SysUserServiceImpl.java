package com.company.project.service.impl;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.company.project.dao.SysUserMapper;
import com.company.project.model.SysUser;
import com.company.project.model.dto.findUserListDto;
import com.company.project.model.dto.loginReturn;
import com.company.project.service.SysUserService;
import com.company.project.core.AbstractService;
import com.company.project.utilClass.RSA;
import org.apache.commons.codec.binary.Base64;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


/**
 * Created by DLHTX on 2020/06/21.
 */
@Service
@Transactional
public class SysUserServiceImpl extends AbstractService<SysUser> implements SysUserService {
    @Resource
    private SysUserMapper sysUserMapper;
    private RSA RSACoder;

    @Override
    public List<loginReturn> findUser(SysUser sysUser) throws Exception {
        //公钥解密
        List<loginReturn> list = sysUserMapper.findUser(sysUser);
        // @todo 此处可以不用解密 直接对比数据库密码
        // byte[] decryptedPass = RSACoder.decryptByPublicKey(Base64.decodeBase64(list.get(0).getPassword()), Base64.decodeBase64(RSA.publickey));
        // System.out.println(new String(decryptedPass) + " and " + sysUser.getPassword());
        if (list.get(0).getPassword().equals(sysUser.getPassword())) {
            String token = "";
            token = JWT.create().withAudience(list.get(0).getName()).sign(Algorithm.HMAC256(sysUser.getPassword()));
            list.get(0).setToken(token);
            return list;
        } else {
            throw new RuntimeException("密码错误");
        }
    }

    @Override
    public List<findUserListDto> findUserList() {
        List<findUserListDto> list = sysUserMapper.findUserList();
        for(findUserListDto x:list){
            try{
                byte[] pass = Base64.decodeBase64(x.getPassword());
                byte[] decryptedPass = RSACoder.decryptByPublicKey(Base64.decodeBase64(x.getPassword()), Base64.decodeBase64(RSA.publickey));
                System.out.println(new String(decryptedPass) + " and " + x.getPassword());
                x.setPassword(new String(decryptedPass));
            }catch (Exception err){
                System.out.println(err);
            }

        }
        return list;
    }
}
