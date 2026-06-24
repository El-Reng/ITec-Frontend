import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import Card from "./components/Card";
import Header from "./components/Header";

function App() {
  const [products, setProducts] = useState();

  async function fetchData() {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setProducts(response.data);
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
          {products &&
            products.length > 0 &&
            products.map((product) => (
              <div key={product.id}>
                <Card
                  image={product.image}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                />
              </div>
            ))}
        </section>
      </section>
    </>
  );
}

export default App;
