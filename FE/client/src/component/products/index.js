import "./product.css"
import BestSellerProduct from "./BestSellerProduct";
import { bestSellerList } from "../../lib/const"
import Navigation from "../Navigation";

function Products() {
    return ( 
        <div className="products">
            <BestSellerProduct list={bestSellerList} />
        </div>
    );
}

export default Products;