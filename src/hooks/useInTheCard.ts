import _ from 'lodash';
import { useSelectorAnalysis } from './storeHooks';

export const useInTheCard = (id: number): boolean => {
  const selectedAnalysis = useSelectorAnalysis();
  const isSelected = _.find(selectedAnalysis, ['id', id]);
  return !!isSelected;
};
