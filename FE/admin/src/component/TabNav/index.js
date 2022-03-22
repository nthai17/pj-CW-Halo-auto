import './index.scss'
import { NavLink } from 'react-router-dom'

function TabNav() {
    return ( 
        <div className='admin-nav'>
            <ul className='admin-nav-list'>
                <li className='admin-nav-item'>
                    <NavLink 
                        to='users' 
                        className='h-100 text-white flex-center flex-column'
                    >
                        <i className="admin-nav-icon fas fa-users"/>
                        <span className='fs-default mt-1'>Tài khoản</span>
                    </NavLink>
                </li>
                <li className='admin-nav-item'>
                    <NavLink 
                        to='products' 
                        className='h-100 text-white flex-center flex-column' 
                    >
                        <i className="admin-nav-icon fas fa-box-open"/>
                        <span className='fs-default mt-1'>Sản phẩm</span>
                    </NavLink>
                </li>
                <li className='admin-nav-item'>
                    <NavLink 
                        to='orders' 
                        className='h-100 text-white flex-center flex-column'
                    >
                        <i className="admin-nav-icon fas fa-shopping-cart"/>
                        <span className='fs-default mt-1'>Đơn hàng</span>
                    </NavLink>
                </li>
                <li className='admin-nav-item'>
                    <NavLink 
                        to='sales' 
                        className='h-100 text-white flex-center flex-column' 
                    >
                        <i className="admin-nav-icon fas fa-dollar-sign"/>
                        <span className='fs-default mt-1'>Doanh thu</span>
                    </NavLink>
                </li>
                <li className='admin-nav-item'>
                    <NavLink 
                        to='login'
                        className='h-100 text-white flex-center flex-column'
                    >
                        <i className="admin-nav-icon fas fa-sign-out-alt"></i>
                        <span className='fs-default mt-1'>Đăng xuất</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default TabNav;
