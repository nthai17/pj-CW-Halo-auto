import { Routes, Route } from "react-router-dom";

// Component
import NotFound from './component/NotFound'
import Home from './component/home';
import Products from './component/products';
import ProductsDetail from './component/products/productDetails/detail'
import Navigation from './component/Navigation';
import Introduce from './component/introduce'
import Blogs from './component/blogs'
import BlogDetail from './component/blogs/detail'
// lib
import { useLocation } from 'react-router-dom'
import Tab from "./component/products/productDetails/tabs";
import Cart from "./component/Cart";

function App() {
  const { pathname } = useLocation()
  
  return (
    <div className="App">
      {/* header here: Tuấn */}

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
        <Route path='*' element={<NotFound/>} />
      </Routes>

      {/* footer here: Tuấn*/}
    </div>
  );
}

export default App;
