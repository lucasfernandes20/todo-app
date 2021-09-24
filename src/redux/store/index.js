import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import TodoList from '../reducer';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, TodoList);

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware()));
const persistor = persistStore(store);

export { store, persistor };
