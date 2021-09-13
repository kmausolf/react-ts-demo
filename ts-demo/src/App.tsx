import React from "react";
import Demo from "./demo/Demo";
import "./App.css";
import { Provider } from "react-redux";
import {store} from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Demo />
    </Provider>
  );
}

export default App;
