import storage from "redux-persist/lib/storage"
import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
// import { composeWithDevTools } from "@redux-devtools/extension"
import { persistReducer, persistStore } from "redux-persist"
import rootReducer from "./reducers/rootReducer"
import { composeWithDevTools } from "redux-devtools-extension"

const persistConfig = {
  key: "user",
  storage,
  blacklist: [],
}

const middleware = [thunk]
const enhancers = [applyMiddleware(...middleware)]
const composedEnhancers = composeWithDevTools(...enhancers)
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer, composedEnhancers)
const persistor = persistStore(store)

export { store, persistor }