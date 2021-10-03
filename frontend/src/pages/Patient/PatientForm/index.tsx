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
import React, { useState } from 'react';
import { inject, observer } from "mobx-react";
import styles from "./style.module.css"
import { Form, Input, Button, Radio, DatePicker, Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import moment from 'moment';
import patientApi from "../../../apis/patient"
import useAsyncFn from '../../../hooks/useAsyncFn';
import { IPatient } from '../../../apis/types/patient';
import authApi from "../../../apis/auth"

enum formField {
  name, email, phone, address, driver_license = 'driver_license', appointment_time = "appointment_time", sex = 'sex', birth = 'birth'
}

type RequiredMark = boolean | 'optional';

const { Dragger } = Upload;

const PatientForm = () => {
  /**
  * @description: add patient function , the state contain loading status and response data
  */
  const [state, addPatientRegistration] = useAsyncFn(patientApi.add)

  /**
  * @description: The form control instance created by form. Useform() will be automatically created when it is not provided
  */
  const [form] = Form.useForm();

  const dateFormat = 'YYYY/MM/DD';

  /**
   * @description: Required type change function
   */
  const onRequiredTypeChange = ({ requiredMarkValue }: { requiredMarkValue: RequiredMark }) => {
  };

  /**
   * @description: Props of pictures in the form
   */
  const props = {
    name: 'file',
    multiple: false,
    action: authApi.upload,
    onChange(info: any) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
        form.setFieldsValue({
          driver_license: info.file.response.data[0].url
        })
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e: any) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

  /**
   * @description: Used to display validation error prompts
   */
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

  /**
   * @description: Submit successful request method
   */
  const handleFormSubmit = async () => {
    // Parameters consistent with the interface need to be constructed
    const addPatientParam: IPatient = {
      name: String(form.getFieldValue(formField.name)),
      birth: String(form.getFieldValue(formField.birth)),
      sex: String(form.getFieldValue(formField.sex)),
      email: String(form.getFieldValue(formField.email)),
      address: form.getFieldValue(formField.address) ? String(form.getFieldValue(formField.address)) : null,
      phone: String(form.getFieldValue(formField.phone)),
      driver_license: String(form.getFieldValue(formField.driver_license)),
      appointment_time: String(form.getFieldValue(formField.appointment_time)),
    }
    try {
      let res = await addPatientRegistration(addPatientParam)
      if (res.code == 200) {
        message.success('Patient Registed Success')
        form.resetFields()
      }
    } catch (error) {
      message.error('Patient Registed Failed!')
    }
  }

  /**
    * @description: Appointment time change function
    */
  const handleAppointmentChange = () => {
  }

  return (
    <div className={styles.root}>
      <Form
        form={form}
        layout="vertical"
        onValuesChange={onRequiredTypeChange}
        validateMessages={validateMessages}
        onFinish={handleFormSubmit}
        initialValues={{
          birth: moment('1995/01/01', dateFormat),
          sex: "Male"
        }}
      >
        {/* @description:NAME */}
        <Form.Item label="Name" name={formField.name} rules={[{ required: true }]} >
          <Input placeholder="input your name" />
        </Form.Item>

        {/* @description:SEX */}
        <Form.Item label="Sex" name={formField.sex} rules={[{ required: true }]} >
          <Radio.Group>
            <Radio.Button value="Male">Male</Radio.Button>
            <Radio.Button value="Female">Female</Radio.Button>
          </Radio.Group>
        </Form.Item>

        {/* @description:BIRTH */}
        <Form.Item label="Birth" name={formField.birth} rules={[{ required: true }]} tooltip="Select your birth date">
          <DatePicker defaultValue={moment('1995/01/01', dateFormat)} format={dateFormat} />
        </Form.Item>

        {/* @description:EMAIL */}
        <Form.Item label="Email" name={formField.email} tooltip="This is a required field" rules={[{ type: 'email' }, { required: true }]}>
          <Input placeholder='Input your email' />
        </Form.Item>

        {/* @description:PHONE */}
        <Form.Item label="Phone" name={formField.phone} rules={[{ required: true }]} >
          <Input placeholder="input your phone number" />
        </Form.Item>

        {/* @description:ADDRESS */}
        <Form.Item label="Address" name={formField.address}>
          <Input placeholder="input your Address" />
        </Form.Item>

        {/* @description:DRIVER LICENSE */}
        <Form.Item label="Driver license" name={formField.driver_license} tooltip="Can upload .png/.jpeg">
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
          </Dragger>
        </Form.Item>

        {/* @description:APPOINTMENTTIME */}
        <Form.Item label="Appointment Time" rules={[{ required: true }]} name={formField.appointment_time}>
          <DatePicker showTime onChange={handleAppointmentChange} onOk={() => { }} />
        </Form.Item>

        {/* @description:SUBMIT */}
        <Form.Item>
          <Button type="primary" htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default PatientForm;
