import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import "./App.css";
import Login from "./containers/Login";

const App = () => (
  <Provider store={store}>
    <div id="App" className="App">
      <Login />
    </div>
  </Provider>
);

export default App;
