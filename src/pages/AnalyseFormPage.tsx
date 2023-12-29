import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { TAnalysesState } from '../types';
import {
  ConfigProvider,
  DatePicker,
  Form,
  InputNumber,
  theme,
  Typography,
} from 'antd';
import { useThemeParams } from '@vkruglikov/react-telegram-web-app';

const { Title } = Typography;
export const AnalyseFormPage: FC = () => {
  const selectedAnalyse = useSelector(
    (state: TAnalysesState) => state.selectedAnalyse,
  );
  const [colorScheme, themeParams] = useThemeParams();
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
          <InputNumber />
        </Form.Item>
        <Form.Item label="Date: ">
          <DatePicker />
        </Form.Item>
      </div>
    </ConfigProvider>
  );
};
