import { Routes, Route } from "react-router-dom";

// Component
import NotFound from './component/NotFound'
import Home from './component/home';
import Products from './component/products';
import ProductsDetail from './component/products/productDetails/detail'
import Introduce from './component/introduce'
import Blogs from './component/blogs'
import BlogDetail from './component/blogs/detail'
import Header from "./component/header/header";
import Footer from "./component/footer/footer";
// lib
import { useLocation } from 'react-router-dom'
import Tab from "./component/products/productDetails/tabs";
import Cart from "./component/Cart";
import Register from "./component/register";
import Login from "./component/login";
import Payment from "./component/Payment";
import PaymentSuccess from "./component/Payment/PaymentSuccess";

function App() {
  const { pathname } = useLocation()
  
  return (
    <div className="App">
      {/* header here: Tuấn */}
      <Header/>

      {/* content here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:category/:id" element={<ProductsDetail />}>
          <Route path='productInfo' element={<Tab info="Infomation" />}/>
          <Route path='productPolicy' element={<Tab info="Policy" />}/>
          <Route path='productEvaluation' element={<Tab info="Evaluation" />}/>
        </Route>
        <Route path="/introduce" element={<Introduce />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/detail/:id" element={<BlogDetail />} />
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/checkout" element={<PaymentSuccess />}></Route>
        <Route path='*' element={<NotFound/>} />
      </Routes>

      {/* footer here: Tuấn*/}
      <Footer/>
    </div>
  );
}

export default App;
