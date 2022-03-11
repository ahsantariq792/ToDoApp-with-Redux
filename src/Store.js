import { createStore } from "redux";
import rootReducer from "./Reducers/Reducers";

const store = createStore(rootReducer)

export default store;

