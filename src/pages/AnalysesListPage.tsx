import { List } from 'antd';
import { ANALYZES } from '../constants';
import { TDictionaryAnalyse } from '../types';
import React from 'react';
import { AnalysesCard } from '../components/AnalysesCard';

export const AnalysesListPage = () => {
  return (
    <List
      size={'small'}
      grid={{ gutter: 16, column: 3 }}
      dataSource={ANALYZES}
      renderItem={(analyse: TDictionaryAnalyse) => (
        <List.Item>
          <AnalysesCard id={analyse.id} name={analyse.name} />
        </List.Item>
      )}
    />
  );
};
