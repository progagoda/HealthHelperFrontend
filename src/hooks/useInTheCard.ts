import { useSelector } from 'react-redux';
import { TAnalysesState } from '../types';
import _ from 'lodash';

export const useInTheCard = (id: number): boolean => {
  const selectedAnalyses = useSelector(
    (state: TAnalysesState) => state.selectedAnalyses,
  );
  const isSelected = _.find(selectedAnalyses, ['id', id]);
  return !!isSelected;
};
