import React from "react";
import Demo from "./demo/Demo";
import "./App.css";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";


function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Demo />
      </PersistGate>
      
    </Provider>
  );
}

export default App;
