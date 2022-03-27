import ProductItem from "../../ProductItem"
import { fakeData } from "../../../../lib/const"
import "./index.scss"

const ProductsView = ({list}) => {
    return (
    <div className="products-view">
        {list.map((item, index) => 
        <ProductItem data={item} key={index} category={item.type}/>
        )}
    </div>
    )
}

export default ProductsView