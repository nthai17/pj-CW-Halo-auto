import Header from '../../../header'
import './index.scss'

function Sales() {
    const handleChangFilter = (value) => {
        console.log(value)
    }
    return ( 
        <div className="admin__sales">
            <Header text='Quản lý doanh thu' onChange={(value) => handleChangFilter(value)}/>
        </div>
    );
}

export default Sales;
