import { useSelector } from 'react-redux';
import { TAnalyse, TAnalysisReducerState } from '../types';

export const useSelectorAnalyse = (): TAnalyse => {
  return useSelector(
    (state: TAnalysisReducerState) => state.analysesReducers.selectedAnalyse,
  );
};
export const useSelectorAnalysis = (): TAnalyse[] => {
  return useSelector(
    (state: TAnalysisReducerState) => state.analysesReducers.selectedAnalysis,
  );
};
