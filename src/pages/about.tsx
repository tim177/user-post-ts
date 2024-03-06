// recoil/atoms.ts
import React from "react";
import {
  useRecoilState,
  useRecoilValue,
  useRecoilValueLoadable,
  useSetRecoilState,
} from "recoil";
import { atom } from "recoil";
import { selector } from "recoil";
import axios from "axios";

interface Product {
  title: string;
  description: string;
  image: string;
  price: number;
}

const productsState = atom<Product[]>({
  key: "productsState",
  default: [],
});

const fetchProducts = selector({
  key: "fetchProducts",
  get: async ({ get }) => {
    const response = await axios.get("https://dummyjson.com/products");
    const data = await response.data;
    return data;
  },
  set: ({ set }, newValue) => {
    set(productsState, newValue);
  },
});

// pages/products.tsx

function Product() {
  const setProducts = useSetRecoilState(productsState);
  const products = useRecoilValue(fetchProducts);

  const handleClick = async () => {
    // const response = await fetchProducts();
    setProducts(products);
  };

  return (
    <div className="mt-32">
      <h2>Products</h2>
      <button className="bg-teal-200 p-2" onClick={handleClick}>
        Load Products
      </button>
      <div>
        {/* {products.map((product: any) => (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
          </div
        ))} */}
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Product />
    </React.Suspense>
  );
}
export default AboutPage;
