import logo from "./logo.svg";
import "./App.css";
import { useGetAllProductsQuery } from "./features/productsApi";

function App() {
  const { data } = useGetAllProductsQuery();
  console.log(data);
  return <div>React redux toolkit starter</div>;
}

export default App;
