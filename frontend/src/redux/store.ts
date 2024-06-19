import {configureStore} from '@reduxjs/toolkit';
import suggestionReducer from './slices/suggestionSlice';
import topAnimeReducer from './slices/topAnimeSlice';
import animeDetailReducer from './slices/animeDetailSlice';
import animeGenreReducer from './slices/animeGenreSlice';
import animeNewsReducer from './slices/animeNewsSlice';
import discoverAnimeReducer from './slices/discoverAnimeSlice';
import userReducer from './slices/userSlice';

export const store = configureStore({
  reducer: {
    suggestions: suggestionReducer,
    recommendation: topAnimeReducer,
    details: animeDetailReducer,
    genre: animeGenreReducer,
    news: animeNewsReducer,
    discover: discoverAnimeReducer,
    user: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
