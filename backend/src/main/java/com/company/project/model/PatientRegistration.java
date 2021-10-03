package com.company.project.model;

import java.util.Date;
import javax.persistence.*;

@Table(name = "patient_registration")
public class PatientRegistration {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;

    private Date birth;

    private String phone;

    private String email;

    private String address;

    private String driver_license;

    private Date appointment_time;

    private String sex;

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
     * @return birth
     */
    public Date getBirth() {
        return birth;
    }

    /**
     * @param birth
     */
    public void setBirth(Date birth) {
        this.birth = birth;
    }

    /**
     * @return phone
     */
    public String getPhone() {
        return phone;
    }

    /**
     * @param phone
     */
    public void setPhone(String phone) {
        this.phone = phone;
    }

    /**
     * @return email
     */
    public String getEmail() {
        return email;
    }

    /**
     * @param email
     */
    public void setEmail(String email) {
        this.email = email;
    }

    /**
     * @return address
     */
    public String getAddress() {
        return address;
    }

    /**
     * @param address
     */
    public void setAddress(String address) {
        this.address = address;
    }

    /**
     * @return driver_license
     */
    public String getDriver_license() {
        return driver_license;
    }

    /**
     * @param driver_license
     */
    public void setDriver_license(String driver_license) {
        this.driver_license = driver_license;
    }

    /**
     * @return appointment_time
     */
    public Date getAppointment_time() {
        return appointment_time;
    }

    /**
     * @param appointment_time
     */
    public void setAppointment_time(Date appointment_time) {
        this.appointment_time = appointment_time;
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
}