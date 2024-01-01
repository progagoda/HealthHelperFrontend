import React, { FC } from 'react';
import './App.css';
import { ConfigProvider, theme } from 'antd';
import { useThemeParams } from '@vkruglikov/react-telegram-web-app';
import { AnalysisListPage } from './pages/AnalysisListPage';
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
        <Route index element={<AnalysisListPage />} />
        <Route path={'analyzes-form'} element={<AnalyseFormPage />} />
      </Routes>
    </ConfigProvider>
  );
};
