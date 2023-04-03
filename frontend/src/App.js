import "./App.css";
import HomeScreen from "./Screens/HomeScreen";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductScreen from "./Screens/ProductsScreen";

function App() {
  // const showAlert=()=>{
  //   alert("these are the products");
  // }
  // const [Count,setCount]=useState(0);

  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/products" element={<ProductScreen />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
