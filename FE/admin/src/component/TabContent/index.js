import './index.scss'
import { Outlet } from 'react-router-dom'

function TabContent() {
    return ( 
        <div className='tabContent'>
            <Outlet/>
        </div>
    );
}

export default TabContent;
