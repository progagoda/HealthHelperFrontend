export type TAnalyse = {
  id: number;
  name: string;
  referenceMin: number;
  referenceMax: number;
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
