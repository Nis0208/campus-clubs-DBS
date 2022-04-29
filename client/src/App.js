import React, {Fragment} from "react";
import './App.css';

import Login from "./components/Login";
import Register from "./components/Register";
import Landing from "./components/Landing";

function App() {
  return (
    <Fragment>
      <div className="container">
      <Landing/>
      </div>
      {/* <div className="container">
      <Login/>
      </div> */}
    </Fragment>
  );
}

export default App;
