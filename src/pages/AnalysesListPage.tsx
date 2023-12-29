import { List } from 'antd';
import { ANALYZES } from '../constants';
import { TAnalyse } from '../types';
import React from 'react';
import { AnalyseCard } from '../components/analyse-card/AnalyseCard';

export const AnalysesListPage = () => {
  return (
    <List
      size={'small'}
      grid={{ column: 3 }}
      dataSource={ANALYZES}
      renderItem={(analyse: TAnalyse) => (
        <List.Item>
          <AnalyseCard id={analyse.id} name={analyse.name} />
        </List.Item>
      )}
    />
  );
};
