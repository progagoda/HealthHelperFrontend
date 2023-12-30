import React, { FC } from 'react';
import './App.css';
import { ConfigProvider, theme } from 'antd';
import { useThemeParams } from '@vkruglikov/react-telegram-web-app';
import { AnalysesListPage } from './pages/AnalysesListPage';
import { Route, Routes } from 'react-router-dom';
import { AnalyseFormPage } from './pages/AnalyseFormPage';

export const App: FC = () => {
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
      <Routes>
        <Route index element={<AnalysesListPage />} />
        <Route path={'analyzes-form'} element={<AnalyseFormPage />} />
      </Routes>
    </ConfigProvider>
  );
};
