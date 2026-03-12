import logo from "./logo.svg";
import "./App.css";
import Navigation from "./customer/components/Navigation/navigation";
import HomePage from "./customer/components/Pages/HomePage";
import Footer from "./customer/components/Footer/Footer";
import Product from "./customer/components/Product/Product";
import ProductDetail from "./customer/components/ProductDetail/ProductDetail";
import Cart from "./customer/components/Cart/Cart";
import Checkout from "./customer/components/Checkout/Checkout";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div>
        {/* <HomePage /> */}
        {/* <Product/> */}
        {/* <ProductDetail/> */}
        {/* <Cart/> */}
        <Checkout/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
