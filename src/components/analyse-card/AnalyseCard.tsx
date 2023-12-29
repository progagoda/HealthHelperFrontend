import { Card, Typography } from 'antd';
import { TAnalyse } from '../../types';
import { StyledButton } from './styles';
import { Link } from 'react-router-dom';
import type { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import { setCurrentAnalyse } from '../../store';

const { Text } = Typography;
export const AnalyseCard = (analyse: TAnalyse) => {
  const dispatch: Dispatch = useDispatch();
  const addCurrentAnalyse = (analyse: TAnalyse) => {
    dispatch(setCurrentAnalyse(analyse));
  };
  return (
    <Card
      key={analyse.id}
      bordered={false}
      size={'small'}
      actions={[
        <Link to={'analyze-form'}>
          <StyledButton
            type={'primary'}
            onClick={() => addCurrentAnalyse(analyse)}
          >
            ADD
          </StyledButton>
        </Link>,
      ]}
    >
      <Text strong>{analyse.name}</Text>
    </Card>
  );
};
