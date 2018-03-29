import { createStore } from 'redux';
import { persistStore, persistReduce, persistReducer} from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import storage from 'redux-persist/lib/storage';
import reducers from './reducers/index';

const persistConfig = {
	key: 'root',
	storage,
}
const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(
	persistedReducer,
	composeWithDevTools(),
)

const persistor = persistStore(store);

export default {store, persistor};