import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [listData, setListData] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setListData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <h1>Hello</h1>
      <ul>
        {listData.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
