import { List } from 'antd';
import { TAnalyse } from '../types';
import { AnalyseCard } from '../components/analyse-card/AnalyseCard';
import { useSelectorAnalysis } from '../hooks/storeHooks';
import { MainButton } from '@vkruglikov/react-telegram-web-app';
import _ from 'lodash';
import { useTelegram } from '../hooks/useTelegram';
import { ANALYSIS } from '../constants';

export const AnalysisListPage = () => {
  const selectedAnalysis = useSelectorAnalysis();
  const { tg } = useTelegram();

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
      {!_.isEmpty(selectedAnalysis) && (
        <MainButton
          text={'Send'}
          onClick={() => tg.sendData(selectedAnalysis)}
        />
      )}
    </>
  );
};
