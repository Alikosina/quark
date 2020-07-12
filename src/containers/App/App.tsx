import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import styles from './App.module.scss';
import Login from '../Login';

const App = () => (
  <Provider store={store}>
    <div className={styles.container} id="App">
      <Login />
    </div>
  </Provider>
);

export default App;
