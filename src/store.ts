import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit';
import _ from 'lodash';
import { TAnalyse, TAnalysesState } from './types';

const initialState: TAnalysesState = {
  selectedAnalyses: [],
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
  },
});

export const { addAnalyse, removeAnalyse } = analysesSlice.actions;

const store = configureStore({
  reducer: analysesSlice.reducer,
});

// Can still subscribe to the store
store.subscribe(() => console.log(store.getState()));

// Still pass action objects to `dispatch`, but they're created for us

// {value: 1}
