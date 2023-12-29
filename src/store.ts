import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import _ from 'lodash';
import { TAnalyse, TAnalysesState } from './types';
import { ANALYZE } from './constants';

const initialState: TAnalysesState = {
  selectedAnalyses: [],
  selectedAnalyse: ANALYZE,
};

const analysesSlice = createSlice({
  name: 'analyses',
  initialState,
  reducers: {
    addAnalyse: (state, { payload: addAnalyse }: PayloadAction<TAnalyse>) => {
      _.concat(state.selectedAnalyses, addAnalyse);
    },
    removeAnalyse: (
      state,
      { payload: deleteAnalyse }: PayloadAction<TAnalyse>,
    ) => {
      _.remove(
        state.selectedAnalyses,
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

export const { addAnalyse, removeAnalyse, setCurrentAnalyse } =
  analysesSlice.actions;

export const store = configureStore({
  reducer: analysesSlice.reducer,
});

// Can still subscribe to the store
store.subscribe(() => console.log(store.getState()));

// Still pass action objects to `dispatch`, but they're created for us

// {value: 1}
