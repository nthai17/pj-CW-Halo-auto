import './index.scss'
import Header from '../../../header'

function Users() {
    const handleChangFilter = (value) => {
        console.log(value)
    }
    return ( 
        <div className="admin__users">
            <Header text='Quản lý tài khoản' onChange={(value) => handleChangFilter(value)}/>
        </div>
    );
}

export default Users;
