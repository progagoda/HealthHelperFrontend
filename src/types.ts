export type TAnalyse = {
  id: number;
  name: string;
  analysisTypeId: number;
  value?: number;
  date?: string;
};
export type TAnalysisState = {
  selectedAnalysis: TAnalyse[];
  selectedAnalyse: TAnalyse;
};

export type TAnalysisReducerState = {
  analysesReducers: TAnalysisState;
};
