import { List } from 'antd';
import { TAnalyse } from '../types';
import React, { useCallback, useEffect } from 'react';
import { AnalyseCard } from '../components/analyse-card/AnalyseCard';
// import { analysisAPI } from '../api';
import { useSelectorAnalysis } from '../hooks/storeHooks';
import { MainButton } from '@vkruglikov/react-telegram-web-app';
import _ from 'lodash';
import { useTelegram } from '../hooks/useTelegram';
import { ANALYSIS } from '../constants';

export const AnalysisListPage = () => {
  // const { data: analysis } = analysisAPI.useGetAnalysisDictionaryQuery('');
  const selectedAnalysis = useSelectorAnalysis();
  // console.log(selectedAnalysis)
  const { tg } = useTelegram();
  const onSendData = useCallback(tg.sendData(selectedAnalysis), [
    selectedAnalysis,
  ]);

  useEffect(() => {
    tg.onEvent('mainButtonClicked', onSendData);
    return () => {
      tg.offEvent('mainButtonClicked', onSendData);
    };
  }, [onSendData]);
  return (
    <>
      <List
        size={'small'}
        grid={{ column: 3 }}
        dataSource={ANALYSIS}
        renderItem={(analyse: TAnalyse) => (
          <List.Item>
            <AnalyseCard analyse={analyse} />
          </List.Item>
        )}
      />
      {!_.isEmpty(selectedAnalysis) && <MainButton text={'Send'} />}
    </>
  );
};
