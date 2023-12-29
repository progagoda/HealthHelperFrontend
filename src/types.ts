export type TDictionaryAnalyse = {
  id: number;
  name: string;
};
export type TAnalyse = {
  id: number;
  name: string;
  value: number;
};
export type TAnalysesState = {
  selectedAnalyses: TAnalyse[] | [];
};
