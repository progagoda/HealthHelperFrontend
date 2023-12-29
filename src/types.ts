export type TAnalyse = {
  id: number;
  name: string;
  value?: number;
};
export type TAnalysesState = {
  selectedAnalyses: TAnalyse[] | [];
  selectedAnalyse: TAnalyse;
};
