package com.company.project.model;

import java.util.Date;
import javax.persistence.*;

@Table(name = "sys_user")
public class SysUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;

    private String password;

    private String head_img;

    private String nick_name;

    private String info;

    private String sex;

    private Integer auth_id;

    private Date creat_time;

    /**
     * @return id
     */
    public Integer getId() {
        return id;
    }

    /**
     * @param id
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * @return name
     */
    public String getName() {
        return name;
    }

    /**
     * @param name
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * @return password
     */
    public String getPassword() {
        return password;
    }

    /**
     * @param password
     */
    public void setPassword(String password) {
        this.password = password;
    }

    /**
     * @return head_img
     */
    public String getHead_img() {
        return head_img;
    }

    /**
     * @param head_img
     */
    public void setHead_img(String head_img) {
        this.head_img = head_img;
    }

    /**
     * @return nick_name
     */
    public String getNick_name() {
        return nick_name;
    }

    /**
     * @param nick_name
     */
    public void setNick_name(String nick_name) {
        this.nick_name = nick_name;
    }

    /**
     * @return info
     */
    public String getInfo() {
        return info;
    }

    /**
     * @param info
     */
    public void setInfo(String info) {
        this.info = info;
    }

    /**
     * @return sex
     */
    public String getSex() {
        return sex;
    }

    /**
     * @param sex
     */
    public void setSex(String sex) {
        this.sex = sex;
    }

    /**
     * @return auth_id
     */
    public Integer getAuth_id() {
        return auth_id;
    }

    /**
     * @param auth_id
     */
    public void setAuth_id(Integer auth_id) {
        this.auth_id = auth_id;
    }

    /**
     * @return creat_time
     */
    public Date getCreat_time() {
        return creat_time;
    }

    /**
     * @param creat_time
     */
    public void setCreat_time(Date creat_time) {
        this.creat_time = creat_time;
    }
}