import { Routes, Route } from "react-router-dom";

// Component
import NotFound from './component/NotFound'
import Home from './component/home';
import Products from './component/products';
import ProductsDetail from './component/products/productDetails/detail'
import Navigation from './component/Navigation';

// lib
import { useLocation } from 'react-router-dom'
import Tab from "./component/products/productDetails/tabs";

function App() {
  const { pathname } = useLocation()
  
  return (
    <div className="App">
      {/* header here: Tuấn */}

      {/* navigation */}
      {pathname.length > 2 && 
        <Navigation path={pathname}/>
      }
      {/* content here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:category/:id" element={<ProductsDetail />}>
          <Route path='productInfo' element={<Tab info="Infomation" />}/>
          <Route path='productPolicy' element={<Tab info="Policy" />}/>
          <Route path='productEvaluation' element={<Tab info="Evaluation" />}/>
        </Route>
        <Route path='*' element={<NotFound/>} />
      </Routes>

      {/* footer here: Tuấn*/}
    </div>
  );
}

export default App;
