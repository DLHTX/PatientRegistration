/*
 * @Date: 2021-10-02 22:46:25
 * @Author: DLHTX
 * @LastEditors: DLHTX
 */
import React from 'react';
import { inject, observer } from "mobx-react";
import styles from "./style.module.css"
import { Button, message } from 'antd';
import { ArrowLeftOutlined, LoginOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import PatientList from './PatientList';

const Admin = () => {
    const history = useHistory()

    const handleLogout = () => {
        localStorage.clear()
        message.success('Logout!')
        history.go(-1)
    }

    return (
        <div style={{
            height: '100vh',
            overflowY: 'scroll'
        }}>
            <div className={styles.root}>
                <div className={styles.title}>
                    <Button style={{ marginRight: '20px' }} onClick={() => { history.go(-1) }} type="primary" icon={<ArrowLeftOutlined />} />
                    {/* patient title */}
                    <span>Admin Panel</span>
                    <Button style={{ marginLeft: 'auto' }} onClick={handleLogout} danger icon={<LoginOutlined />} />
                </div>
                <PatientList></PatientList>
            </div>
        </div>
    )
}

export default Admin;


