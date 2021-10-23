import { createStore, combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import Reducer from './Reducer';






const persistConfig = {
    key: 'App18',
    storage
}

const rootReducer = combineReducers({
    menu: Reducer
})


const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);