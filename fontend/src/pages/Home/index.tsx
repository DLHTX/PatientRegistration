/*
 * @Author: DLHTX
 * @LastEditors: DLHTX
 */
import React, { useState } from 'react';
import { inject, observer } from "mobx-react";
import { ITemplateStore } from "../../store/interface/ITemplateStore";
import styles from "./style.module.css"
import { Button } from 'antd';
import LoginPop from '../../components/LoginPop';
import { useHistory } from 'react-router-dom';

const Home = (props: { templateStore: ITemplateStore }) => {
    const [showLoginPop, setShowLoginPop] = useState(false)
    const history = useHistory()

    const handleAdminPanelClick = () => {
        console.log(213)
        /**
         * @todo: This place should jugement is user login or not!
         */
        if (localStorage.getItem('user')) {
            history.push('/admin')
        } else {
            setShowLoginPop(true)
        }
    }

    const handleGoPatient = () => {
        history.push('/patient')
    }
    return (
        <div>
            <div className={styles.root}>
                {/* @ts-ignore */}
                <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_uhrsndot.json" background="transparent" speed="1" style={{ width: '500px', margin: "0 auto" }} loop autoplay></lottie-player>
                <div className={styles.title}>Patient Registration System</div>
                <div className={styles.subTitle}>If you are an administrator, please click the login button. If you are a patient, please click patient registration</div>
                <div className={styles.panelBox}>
                    <div className={styles.adminPanel} onClick={() => handleAdminPanelClick()}>
                        {/* @ts-ignore */}
                        <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_hkgs1fkb.json" background="transparent" speed="1" style={{ width: '110px' }} loop autoplay></lottie-player>
                        <div style={{ color: "white", width: '100px', fontWeight: "bolder" }}>Go to admin panel</div>
                    </div>
                    <div className={styles.patientPanel} onClick={() => handleGoPatient()}>
                        {/* @ts-ignore */}
                        <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_q5pk6p1k.json" background="transparent" speed="1" style={{ width: '70px', marginRight: "20px" }} loop autoplay></lottie-player>
                        <div style={{ color: "white", width: '100px', fontWeight: "bolder" }}>Patient Registration</div>
                    </div>
                </div>
                <div className={styles.footer}>
                    github
                </div>
                <LoginPop show={showLoginPop} callback={() => setShowLoginPop(false)}></LoginPop>
            </div>
        </div>
    )
}

export default inject('templateStore')(observer(Home));


