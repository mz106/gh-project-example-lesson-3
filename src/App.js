
import { useState, useEffect } from "react";
import "./App.css";


function App() {
  const [products, setProducts] = useState();

  useEffect(() => {
    const fetchData = async () => {
      let fetching = await fetch("https://fakestoreapi.com/products?limit=6");
      let fetched = await fetching.json();
      setProducts(fetched);
      console.log(products);
    };
    fetchData();
  }, []);

  return (


  )
}

export default App;
