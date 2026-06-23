import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import Card from "./components/Card";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);
  const [dataCruda, setDataCruda] = useState();

  async function fetchData() {
    axios.get("http://jsonplaceholder.typicode.com/users").then((response) => {
      console.log(response.data);
      setDataCruda(response.data);
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <section className="bg-gray-900 flex flex-col gap-6 items-center">
        <section className="grid grid-cols-2 gap-4 mt-3">
          {dataCruda &&
            dataCruda.length > 0 &&
            dataCruda.map((user) => (
              <div key={user.id}>
                <Card name={user.name} email={user.email} phone={user.phone} />
              </div>
            ))}
        </section>
      </section>
    </>
  );
}

export default App;
