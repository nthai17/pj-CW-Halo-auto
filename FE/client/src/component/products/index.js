import "./product.css"
import BestSellerProduct from "./BestSellerProduct";
import CategoryColection from "./ProductCategory/categoryCollection";
import { bestSellerList } from "../../lib/const";


function Products() {
    return ( 
        <div className="products">
            <BestSellerProduct list={bestSellerList} />
            <div className="flex-wrap">
                <div className="category">
                    <CategoryColection/>
                </div>
            </div>
        </div>
    );
}

export default Products;