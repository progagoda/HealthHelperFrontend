import {
  combineReducers,
  configureStore,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import _ from 'lodash';
import { TAnalyse, TAnalysisState } from './types';
import { ANALYZE } from './constants';
import { analysisAPI } from './api';

const initialState: TAnalysisState = {
  selectedAnalysis: [],
  selectedAnalyse: ANALYZE,
};

const analysisSlice = createSlice({
  name: 'analyses',
  initialState,
  reducers: {
    addAnalyse: (state, { payload: addAnalyse }: PayloadAction<TAnalyse>) => {
      state.selectedAnalysis.push(addAnalyse);
    },
    removeAnalyse: (
      state,
      { payload: deleteAnalyse }: PayloadAction<TAnalyse>,
    ) => {
      _.remove(
        state.selectedAnalysis,
        (analyse) => analyse.id === deleteAnalyse.id,
      );
    },
    setCurrentAnalyse: (
      state,
      { payload: currentAnalyse }: PayloadAction<TAnalyse>,
    ) => {
      state.selectedAnalyse = currentAnalyse;
    },
  },
});
const reducers = combineReducers({
  analysesReducers: analysisSlice.reducer,
  [analysisAPI.reducerPath]: analysisAPI.reducer,
});
export const { addAnalyse, removeAnalyse, setCurrentAnalyse } =
  analysisSlice.actions;

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(analysisAPI.middleware),
});

// Can still subscribe to the store
store.subscribe(() => console.log(store.getState()));

// Still pass action objects to `dispatch`, but they're created for us

// {value: 1}
