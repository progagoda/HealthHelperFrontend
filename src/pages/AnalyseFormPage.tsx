import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { TAnalysesState } from '../types';
import { DatePicker, Form, InputNumber, Typography } from 'antd';

const { Title } = Typography;
export const AnalyseFormPage: FC = () => {
  const selectedAnalyse = useSelector(
    (state: TAnalysesState) => state.selectedAnalyse,
  );

  return (
    <div style={{ marginLeft: 5 }}>
      <Title level={3}>{selectedAnalyse.name}</Title>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
      ></Form>
      <Form.Item label="Value: ">
        <InputNumber />
      </Form.Item>
      <Form.Item label="Date: ">
        <DatePicker />
      </Form.Item>
    </div>
  );
};
