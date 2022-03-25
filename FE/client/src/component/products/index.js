import "./product.scss"
import Pagination from "./CategoryDetail/Pagination";
import BestSellerProduct from "./BestSellerProduct";
import CategoryColection from "./ProductCategory/categoryCollection";
import CategorySearch from "./ProductCategory/categorySearch";
import SortPagiBar from "./CategoryDetail/SortPagiBar";
import ProductsView from "./CategoryDetail/ProductsView";
import { bestSellerList } from "../../lib/const";
import {useState} from "react"
import { fakeData } from "../../lib/const";

function Products() {
    const [currentPage, setCurrentPage] =useState(1)
    const {tire, accessory, smartDivice} = fakeData
    const list = [...tire.listPreview, ...accessory.listPreview, ...smartDivice.listPreview] 
    const listRender = (currentPage) => {
        const res = list.slice(16*(currentPage - 1), 16*currentPage)
        return res
    }
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
                    <ProductsView list={listRender(currentPage)}/>
                    <Pagination list={list} currentPage={currentPage} onClick={(value) => setCurrentPage(value)}/>
                </div>
            </div>
        </div>
    );
}

export default Products;