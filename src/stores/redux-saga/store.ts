import {configureStore} from '@reduxjs/toolkit';
import rootReducers from './reducers';

const store = configureStore({
  reducer: rootReducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

export default store;

/**
 * Reference
 * https://react-redux.js.org/using-react-redux/usage-with-typescript
 */
