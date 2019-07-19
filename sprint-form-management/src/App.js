import React from "react";
import "./App.css";
import Registration from "./Registration";
import DataList from "./DataList";
import { Link, Route } from "react-router-dom";
import useLocalStorage from "./useLocalStorage";

function App() {
  const [token, setToken] = useLocalStorage("token");
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
      <Route
        exact
        path="/"
        render={props => {
          return <Registration setToken={setToken} />;
        }}
      />
      {/* <Registration /> */}
      <Route exact path="/data" component={DataList} />
    </div>
  );
}

export default App;
