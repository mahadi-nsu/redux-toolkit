import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { productFetch } from "./features/productSlice";

function App() {
  useSelector((state) => {
    console.log(state.products.items);
    console.log(state.products.status);
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productFetch());
  }, []);
  return <div>Redux toolkit</div>;
}

export default App;
