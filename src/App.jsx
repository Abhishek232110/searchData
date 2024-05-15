import { useEffect, useState } from "react";

import "./App.css";
import FetchApiData from "./components/fetchApi";
import { useDispatch } from "react-redux";
import { getApi } from "./app/slice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getApi());
  }, []);

  return (
    <>
      <FetchApiData />
    </>
  );
}

export default App;
