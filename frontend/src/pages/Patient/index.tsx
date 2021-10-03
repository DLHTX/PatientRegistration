/*
 * @Date: 2021-10-03 09:13:21
 * @Author: DLHTX
 * @LastEditors: DLHTX
 */
/*
 * @Author: DLHTX
 * @LastEditors: DLHTX
 */
import React, { useState } from 'react';
import { inject, observer } from "mobx-react";
import { ITemplateStore } from "../../store/interface/ITemplateStore";
import styles from "./style.module.css"
import PatientForm from '../Patient/PatientForm';
import { Button } from 'antd';
import LoginPop from '../../components/LoginPop';
import { useHistory } from 'react-router-dom';

const Patient = (props: { templateStore: ITemplateStore }) => {
    const [showLoginPop, setShowLoginPop] = useState(false)
    const history = useHistory()

    const handleAdminPanelClick = () => {
        /**
         * @todo: This place should jugement is user login or not!
         */
        if (localStorage.getItem('user')) {
            history.push('/admin')
        } else {
            setShowLoginPop(true)
        }
    }
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <div className={styles.title}>
                    {/* patient title */}
                    <span>Patitent Registration</span>
                    {/* A Button when click can show login popup */}
                    <Button style={{ marginLeft: 'auto' }} type="primary" onClick={handleAdminPanelClick}>Admin Panel</Button>
                </div>
                <PatientForm></PatientForm>
                <LoginPop show={showLoginPop} callback={() => setShowLoginPop(false)}></LoginPop>
            </div>
        </div>
    )
}

export default inject('templateStore')(observer(Patient));


