import React, { Component } from "react";
import { Provider } from "react-redux";
import "./App.css";

import store from "./store";
import Todos from "./components/Todos";
import Form from "./components/Form";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Form />
          <Todos />
        </div>
      </Provider>
    );
  }
}

export default App;
