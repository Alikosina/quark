import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore } from "redux";

export default createStore(rootReducer, composeWithDevTools());
