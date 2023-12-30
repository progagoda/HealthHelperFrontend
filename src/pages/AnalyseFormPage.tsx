import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TAnalysesState } from '../types';
import {
  ConfigProvider,
  DatePicker,
  Form,
  InputNumber,
  theme,
  Typography,
} from 'antd';
import {
  BackButton,
  MainButton,
  useThemeParams,
} from '@vkruglikov/react-telegram-web-app';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import { addAnalyse } from '../store';

const { Title } = Typography;
export const AnalyseFormPage: FC = () => {
  const [colorScheme, themeParams] = useThemeParams();
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
    <ConfigProvider
      theme={
        themeParams.text_color
          ? {
              algorithm:
                colorScheme === 'dark'
                  ? theme.darkAlgorithm
                  : theme.defaultAlgorithm,
              token: {
                colorText: themeParams.text_color,
                colorPrimary: themeParams.button_color,
                colorBgBase: themeParams.bg_color,
              },
            }
          : undefined
      }
    >
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
        {value && date && <MainButton text={'Add to card'} onClick={submit} />}
        <BackButton onClick={goBack} />
      </div>
    </ConfigProvider>
  );
};
