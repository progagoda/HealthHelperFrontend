import dayjs from 'dayjs';

export type TAnalyse = {
  id: number;
  name: string;
  image?: string;
  value?: number;
  date?: dayjs.Dayjs;
};
export type TAnalysesState = {
  selectedAnalyses: TAnalyse[];
  selectedAnalyse: TAnalyse;
};
