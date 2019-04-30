import { combineReducers, createStore } from "redux";
import { AsyncStorage } from "react-native";
// import Reactotron from 'reactotron-react-native';
import { persistReducer, createMigrate } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/hardSet";
import note from "./Note";

const rootReducer = combineReducers({
  note
});

const persistConfig = {
  key: "root",
  version: 1,
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  debug: true
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  const store = createStore(persistedReducer);
  return store;
};
