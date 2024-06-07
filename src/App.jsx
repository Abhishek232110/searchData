import { useEffect, useState } from "react";
import "./App.css";
import TableData from "./components/tableData";
import axios from "axios";

function App() {
  const [getData, setGetData] = useState();
  // i use axios for fetch api
  useEffect(async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setGetData(res.data))
      .then((da) => console.log(da));
  }, []);

  return (
    <>
      <div>
        {/* i have sent data in table component */}
        <TableData getData={getData} />
      </div>
    </>
  );
}

export default App;
