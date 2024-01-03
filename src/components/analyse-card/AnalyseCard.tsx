import { Card, Col, Typography } from 'antd';
import { TAnalyse } from '../../types';
import { StyledButtonAdd, StyledButtonRemove } from './styles';
import { Link } from 'react-router-dom';
import type { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import { removeAnalyse, setCurrentAnalyse } from '../../store';
import { useInTheCard } from '../../hooks/useInTheCard';
import { FC } from 'react';

const { Text } = Typography;
type TAnalyseCardProps = {
  analyse: TAnalyse;
};
export const AnalyseCard: FC<TAnalyseCardProps> = ({ analyse }) => {
  const dispatch: Dispatch = useDispatch();
  const isSelected = useInTheCard(analyse.id);
  const addCurrentAnalyse = (analyse: TAnalyse) => {
    dispatch(setCurrentAnalyse(analyse));
  };
  const removeSelectedAnalyse = (analyse: TAnalyse) => {
    dispatch(removeAnalyse(analyse));
  };

  const removeOrAddButton = (isSelected: boolean) => {
    if (isSelected)
      return (
        <StyledButtonRemove
          type={'primary'}
          onClick={() => removeSelectedAnalyse(analyse)}
        >
          REMOVE
        </StyledButtonRemove>
      );
    return (
      <Link to={'analyse-form'}>
        <StyledButtonAdd
          type={'primary'}
          onClick={() => addCurrentAnalyse(analyse)}
        >
          ADD
        </StyledButtonAdd>
      </Link>
    );
  };

  return (
    <Col span={20}>
      <Card
        style={{ whiteSpace: 'break-spaces' }}
        key={analyse.id}
        bordered={false}
        size={'small'}
        actions={[removeOrAddButton(isSelected)]}
      >
        <Text strong>{analyse.name}</Text>
      </Card>
    </Col>
  );
};
