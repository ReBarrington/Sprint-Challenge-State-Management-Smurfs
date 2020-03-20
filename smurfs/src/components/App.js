import React from "react";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { smurfReducer as reducer } from '../reducers/smurfReducer';
import "./App.css";
import SmurfForm from "./SmurfForm";
import SmurfList from "./SmurfList";

const store = createStore(reducer, applyMiddleware(logger, thunk));

function App() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <Provider store={store}>
          <SmurfForm />
          <SmurfList />
        </Provider>
      </div>
    );
  
}

export default App;
