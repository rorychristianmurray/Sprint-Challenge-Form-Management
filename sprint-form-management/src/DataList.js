import React, { useEffect, useState } from "react";
import axios from "axios";
import Data from "./Data";

const DataList = ({ history }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    const url = "http://localhost:5000/api/restricted/data";

    if (token) {
      axios
        .get(url, {
          headers: {
            Authorization: token
          }
        })
        .then(response => {
          console.log("GET response", response);
          localStorage.setItem("token", response.data.token);
          setData(response.data);
        })
        .catch(error => {
          console.log("GET error", error);
          localStorage.removeItem("token");
          history.push("/");
        });
    }
  }, [history]);

  console.log("DataList data", data);
  return (
    <div className="data-list">
      {data.map(data => {
        return <Data data={data} key={data.name} />;
      })}
    </div>
  );
};

export default DataList;
