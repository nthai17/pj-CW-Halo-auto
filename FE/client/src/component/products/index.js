import "./product.scss"
import BestSellerProduct from "./BestSellerProduct";
import CategoryColection from "./ProductCategory/categoryCollection";
import CategorySearch from "./ProductCategory/categorySearch";
import SortPagiBar from "./CategoryDetail/SortPagiBar";
import ProductsView from "./CategoryDetail/ProductsView";
import { bestSellerList } from "../../lib/const";


function Products() {
    return ( 
        <div className="products">
            <BestSellerProduct list={bestSellerList} />
            <div className="flex-wrap">
                <div className="category">
                    <CategoryColection/>
                    <CategorySearch/>
                </div>
                <div className="categoryDetail">
                    <SortPagiBar/>
                    <ProductsView/>
                </div>
            </div>
        </div>
    );
}

export default Products;