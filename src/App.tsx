import React, { DispatchWithoutAction, FC, useEffect } from 'react';
import './App.css';
import { Card, Col, ConfigProvider, Row, Space, theme } from 'antd';
import { useTelegram } from './hooks/useTelegram';
import { PlusOutlined } from '@ant-design/icons';
import Meta from 'antd/es/card/Meta';
import { useThemeParams } from '@vkruglikov/react-telegram-web-app';

export const App: FC<{
  onChangeTransition: DispatchWithoutAction;
}> = ({ onChangeTransition }) => {
  const { tg } = useTelegram();
  const [colorScheme, themeParams] = useThemeParams();
  type TDictionaryAnalyse = {
    id: number;
    name: string;
  };
  const analyzes: TDictionaryAnalyse[] = [
    {
      id: 1,
      name: 'Билирубин',
    },
    {
      id: 2,
      name: 'Билирубин',
    },
    {
      id: 3,
      name: 'Билирубин',
    },
  ];
  useEffect(() => {
    tg.ready();
  }, []);
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
      <Row>
        <Space>
          {analyzes.map((item: TDictionaryAnalyse) => (
            <Card key={item.id} bordered={false} actions={[<PlusOutlined />]}>
              <Meta title={item.name} description="This is the description" />
            </Card>
          ))}
        </Space>
      </Row>
    </ConfigProvider>
  );
};
