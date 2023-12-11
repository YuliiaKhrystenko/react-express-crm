import React from 'react'
import { Employee } from '@prisma/client';
import { CustomInput } from '../custom-input';
import { CustomButton } from '../custom-button';
import { Card, Form, Space } from 'antd';
import { ErrorMessage } from '../error';

type Props<T> = {
  onFinish: (values: T) => void;
  btnText: string,
  title: string,
  error?: string,
  employee?: T
}

export const EmployeeForm = ({
  onFinish,
  btnText,
  title,
  error,
  employee
}: Props<Employee>) => {
  return (
    <div>
      <Card title={title} style={{ width: '30rem'}}>
        <Form name='employee-form' onFinish={onFinish} initialValues={employee}>
          <CustomInput placeholder='First name' type='text' name='firstName'/>
          <CustomInput placeholder='Last name' type='text' name='lastName'/>
          <CustomInput placeholder='Age' type='number' name='age'/>
          <CustomInput placeholder='Address' type='text' name='address'/>
          <Space>
            <ErrorMessage message={error} />
            <CustomButton htmlType='submit'>
              { btnText }
            </CustomButton>
          </Space>
        </Form>
      </Card>
    </div>
  )
}
