/*
 * @Date: 2021-10-02 21:06:14
 * @Author: DLHTX
 * @LastEditors: DLHTX
 */
/*
 * @Date: 2021-10-02 21:06:14
 * @Author: DLHTX
 * @LastEditors: DLHTX
 */
import React, { useEffect, useMemo, useState } from 'react';
import styles from "./style.module.css"
import { Table } from 'antd';
import moment from 'moment';
import patientApi from "../../../apis/patient"
import useAsyncFn from '../../../hooks/useAsyncFn';
import { IMG_SERVER } from '../../../constants/server';


const PatientList = () => {
  /**
  * @description: add patient function , the state contain loading status and response data
  */
  const [state, getPatientList] = useAsyncFn(patientApi.list)
  const { value: data, loading: isLoading } = state || {}

  useEffect(() => {
    getPatientList({
      page: 0,
      size: 100
    })
  }, [])

  useEffect(() => {
    console.log(data?.data?.total)
    console.log(data?.data?.list)
  }, [state])

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Birth',
      dataIndex: 'birth',
      key: 'birth',
      render: (birth: string) => (
        <>
          <div>{moment(birth).format('YYYY-MM-DD')}</div>
        </>
      ),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Driver License',
      dataIndex: 'driver_license',
      key: 'driver_license',
      render: (driver_license: string) => (
        <>
          {
            driver_license != 'undefined' && driver_license ? <img src={IMG_SERVER + driver_license} style={{ height: '50px' }}></img> : null
          }
        </>
      ),
    },
    {
      title: 'Appointment Time',
      dataIndex: 'appointment_time',
      key: 'appointment_time',
      render: (appointment_time: string) => (
        <>
          <div>{moment(appointment_time).format('YYYY-MM-DD hh:mm:ss')}</div>
        </>
      ),
    },
  ];

  /**
    * @description: Appointment time change function
    */
  const handleAppointmentChange = () => {
  }

  return (
    <div className={styles.root}>
      {
        isLoading ?
          <div>loading</div> :
          <Table columns={columns} dataSource={data?.data?.list} />
      }
    </div>
  )
}

export default PatientList;
