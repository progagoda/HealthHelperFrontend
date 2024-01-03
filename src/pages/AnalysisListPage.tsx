import { List } from 'antd';
import { TAnalyse } from '../types';
import React from 'react';
import { AnalyseCard } from '../components/analyse-card/AnalyseCard';
import { analysisAPI } from '../api';
import { useSelectorAnalysis } from '../hooks/storeHooks';
import { MainButton } from '@vkruglikov/react-telegram-web-app';
import _ from 'lodash';
import { useTelegram } from '../hooks/useTelegram';

export const AnalysisListPage = () => {
  const { data: analysis } = analysisAPI.useGetAnalysisDictionaryQuery('');
  const selectedAnalyses = useSelectorAnalysis();
  const { tg } = useTelegram();

  return (
    <>
      <List
        size={'small'}
        grid={{ column: 3 }}
        dataSource={analysis}
        renderItem={(analyse: TAnalyse) => (
          <List.Item>
            <AnalyseCard analyse={analyse} />
          </List.Item>
        )}
      />
      {!_.isEmpty(selectedAnalyses) && (
        <MainButton
          text={'Send'}
          onClick={() => tg.sendData(JSON.stringify(selectedAnalyses))}
        />
      )}
    </>
  );
};
