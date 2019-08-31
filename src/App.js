import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import data from './classroom_data.json';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/classreducer';
export default class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const store = createStore(reducer)
    store.dispatch({
          type:'SEE',
          payload:100
    });
    console.log("state is ",store.getState());
    return (
      <Provider store={store}>
         <Layout />
      </Provider>
    );
  }
}
