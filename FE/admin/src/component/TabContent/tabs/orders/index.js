import Header from '../../../header'
import './index.scss'

function Orders() {
    const handleChangFilter = (value) => {
        console.log(value)
    }
    return ( 
        <div className="admin__orders">
            <Header text='Quản lý đơn hàng' onChange={(value) => handleChangFilter(value)}/>
        </div>
    );
}

export default Orders;
