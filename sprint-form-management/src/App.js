import React from "react";
import "./App.css";
import Registration from "./Registration";
import DataList from "./DataList";
import { Link, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>
        <Link className="link" to="/">
          Login
        </Link>
        <Link className="link" to="/data">
          Data
        </Link>
      </div>
      <Route exact path="/" component={Registration} />
      {/* <Registration /> */}
      <Route exact path="/data" component={DataList} />
    </div>
  );
}

export default App;
