import './index.scss'
import { Routes, Route } from 'react-router-dom'
import Orders from './tabs/orders'
import Users from './tabs/users'
import Products from './tabs/products'
import Sales from './tabs/sales'

function TabContent() {
    return ( 
        <div className='tabContent'>
            <Routes>
                <Route path='orders' element={<Orders />}/>
                <Route path='users' element={<Users />}/>
                <Route path='products' element={<Products />}/>
                <Route path='sales' element={<Sales />}/>
            </Routes>
        </div>
    );
}

export default TabContent;
