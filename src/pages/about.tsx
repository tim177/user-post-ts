// recoil/atoms.ts
import React, { useState } from "react";
import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import { selector } from "recoil";
import axios from "axios";
import { ErrorBoundary } from "react-error-boundary";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
}

const fetchProducts = selector({
  key: "fetchProducts",
  get: async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      const data = await response.data;
      return data.products;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  },
});

function Product() {
  const [showProducts, setShowProducts] = useState<boolean>(false);

  const productsLoadable = useRecoilValueLoadable(fetchProducts);
  let products: Product[] = [];

  if (productsLoadable.state === "hasValue") {
    products = productsLoadable.contents;
  } else if (productsLoadable.state === "hasError") {
    console.error("Error loading products:", productsLoadable.contents);
  }
  // const products: Product[] = useRecoilValueLoadable(fetchProducts);
  console.log("this is products value", products);

  const handleClick = () => {
    setShowProducts(true);
  };

  return (
    <div className="mt-32">
      <h2>Products</h2>
      <button className="bg-teal-200 p-2" onClick={handleClick}>
        Load Products
      </button>
      <div>
        {showProducts &&
          (productsLoadable.state === "hasError"
            ? "Error loading products"
            : productsLoadable.contents.map((product: Product) => (
                <div key={product.id}>
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <p>Price: {product.price}</p>
                </div>
              )))}
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    // <ErrorBoundary FallbackComponent={Fallback}>
    <React.Suspense fallback={<div>Loading...</div>}>
      <Product />
    </React.Suspense>
    // </ErrorBoundary>
  );
}
export default AboutPage;

// function Fallback() {
//   return <div>Has Errors</div>;
// }
