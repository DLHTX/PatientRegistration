/*
 * @Date: 2021-10-02 22:46:25
 * @Author: DLHTX
 * @LastEditors: DLHTX
 */
import React, { useState } from 'react';
import { inject, observer } from "mobx-react";
import styles from "./style.module.css"
import { Button, Form, Input, message, Modal } from 'antd';
import authApi from "../../apis/auth"
import useAsyncFn from '../../hooks/useAsyncFn';
import { ILoginRequest } from '../../apis/types/auth';
import { useHistory } from 'react-router-dom';
import { Md5 } from "md5-typescript";
enum formField {
    name, password
}

interface IProps {
    show: boolean,
    callback: Function
}

const LoginPop: React.FC<IProps> = ({ show, callback }) => {
    const [state, login] = useAsyncFn(authApi.login)
    const history = useHistory()

    /**
    * @description: The form control instance created by form. Useform() will be automatically created when it is not provided
    */
    const [form] = Form.useForm();

    const handleOk = () => {
        //In order to prevent other business logic, it is written separately for the time being
        handleFormSubmit()
    };

    const handleCancel = () => {
        callback(false);
    };

    /**
     * @description: Submit successful request method
     */
    const handleFormSubmit = async () => {
        const loginParam: ILoginRequest = {
            name: String(form.getFieldValue(formField.name)),
            password: Md5.init(String(form.getFieldValue(formField.password))),
        }

        try {
            let res = await login(loginParam)
            if (res.code == 200) {
                callback(false);
                history.push("/admin")
                localStorage.setItem('user', res.data)
            } else {
                message.error(res.message)
            }
        } catch (error) {
            message.error(String(error))
        }
    }

    return (
        <div>
            <Modal title="Login" visible={show} onOk={handleOk} onCancel={handleCancel}>
                <div style={{ marginBottom: '10px' }}>
                    Please login with admin account
                </div>
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleFormSubmit}
                >
                    {/* @description:Name */}
                    <Form.Item label="User Name" name={formField.name} rules={[{ required: true }]} >
                        <Input placeholder="input your username" />
                    </Form.Item>

                    {/* @description:PASSWORD */}
                    <Form.Item label="Password" name={formField.password} rules={[{ required: true }]} >
                        <Input placeholder="input your password" type="password" />
                    </Form.Item>

                </Form>
            </Modal>
        </div>
    )
}

export default LoginPop;


