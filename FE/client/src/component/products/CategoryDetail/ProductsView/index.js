import ProductItem from "../../ProductItem"
import "./index.scss"

const ProductsView = ({list}) => {
    return (
    <div className="products-view">
        {
            list.length ? list.map((item) => 
                <ProductItem data={item} key={item._id} category={item.types}/>
            )
            : <div className="hasNoProduct">Không có sản phẩm.</div>
        }
    </div>
    )
}

export default ProductsView