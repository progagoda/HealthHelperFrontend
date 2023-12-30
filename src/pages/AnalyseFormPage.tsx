import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TAnalysesState } from '../types';
import { DatePicker, Form, InputNumber, Typography } from 'antd';
import { BackButton, MainButton } from '@vkruglikov/react-telegram-web-app';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import { addAnalyse } from '../store';

const { Title } = Typography;
export const AnalyseFormPage: FC = () => {
  const selectedAnalyse = useSelector(
    (state: TAnalysesState) => state.selectedAnalyse,
  );
  const [value, setValue] = useState<number | null>();
  const [date, setDate] = useState<dayjs.Dayjs | null>();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChangeValue = (value: number | null) => {
    setValue(value);
  };
  const goBack = () => {
    navigate(-1);
  };
  const submit = () => {
    dispatch(
      addAnalyse({
        id: selectedAnalyse.id,
        name: selectedAnalyse.name,
        value: value ?? 0,
        date: date ?? undefined,
      }),
    );
    goBack();
  };

  return (
    <div style={{ marginLeft: 5 }}>
      <Title level={3}>{selectedAnalyse.name}</Title>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
      ></Form>
      <Form.Item label="Value: ">
        <InputNumber onChange={onChangeValue} />
      </Form.Item>
      <Form.Item label="Date: ">
        <DatePicker onChange={(value) => setDate(value)} />
      </Form.Item>
      <div>
        {value && date && (
          <MainButton text={'Add to card'} onClick={() => submit()} />
        )}
      </div>
      <BackButton onClick={goBack} />
    </div>
  );
};
