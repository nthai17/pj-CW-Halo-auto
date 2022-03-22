import Header from '../../../header'
import './index.scss'

function Products() {
    const handleChangFilter = (value) => {
        console.log(value)
    }
    return ( 
        <div className="admin__products">
            <Header text='Quản lý sản phẩm' onChange={(value) => handleChangFilter(value)}/>
        </div>
    );
}

export default Products;