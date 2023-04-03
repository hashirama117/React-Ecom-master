import { useEffect, useState } from "react";
import axios from "axios";
// import { Routes,Route } from "react-router-dom";
// import data from "../data";

function ProductScreen() {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("/api/products");
        setProduct(result.data);
      } catch (err) {
        err.message("loading failed");
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {/* <button onClick={fetchData}>Products</button> */}
      {products.map((product) => {
        return (
          <>
            <div key={product.id}></div>
            <h2>{product.ProductName}</h2>
            <h3>{product.ProductDescription}</h3>
            {/* <h2>{product.price}</h2>
            <h2>{product.catagory}</h2> */}
          </>
        );
      })}
    </div>
  );
}
export default ProductScreen;
