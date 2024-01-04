import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Button,
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
  useInitData,
  useThemeParams,
} from '@vkruglikov/react-telegram-web-app';
import { useNavigate } from 'react-router-dom';
import { addAnalyse } from '../store';
import { useSelectorAnalyse } from '../hooks/storeHooks';

const { Title } = Typography;
export const AnalyseFormPage: FC = () => {
  const [colorScheme, themeParams] = useThemeParams();
  const selectedAnalyse = useSelectorAnalyse();
  const [initDataUnsafe] = useInitData();
  const [value, setValue] = useState<number | null>();
  const [date, setDate] = useState<string | null>();
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
        userId: initDataUnsafe?.user?.id,
        value: value ?? 0,
        date: date ?? undefined,
        analysisTypeId: selectedAnalyse.analysisTypeId,
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
          <DatePicker onChange={(value, dateString) => setDate(dateString)} />
        </Form.Item>
        <Button onClick={submit}>Submit</Button>
        {value && date && <MainButton text={'Add to card'} onClick={submit} />}
        <BackButton onClick={goBack} />
      </div>
    </ConfigProvider>
  );
};
