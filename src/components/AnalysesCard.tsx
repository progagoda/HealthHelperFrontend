import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import React from 'react';
import { TDictionaryAnalyse } from '../types';
import { StyledButton } from './styles';

export const AnalysesCard = (analyse: TDictionaryAnalyse) => {
  return (
    <Card
      key={analyse.id}
      bordered={false}
      size={'small'}
      actions={[<StyledButton type={'primary'}>ADD</StyledButton>]}
    >
      <Meta title={analyse.name} />
    </Card>
  );
};
