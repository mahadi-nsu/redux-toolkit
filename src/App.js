import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  useSelector((state) => {
    console.log(state.products.items);
    console.log(state.products.status);
  });
  return <div>Redux toolkit</div>;
}

export default App;
