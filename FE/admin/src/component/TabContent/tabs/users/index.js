import './index.scss'
import Header from '../../../header'
import UsersList from './userList'
import {userList} from '../../../../const'
import { useEffect, useState } from 'react'

function Users() {
    const [userListRender, setUserListRender] = useState([])
    const getSortFilter = (value) => {
        const flag = value.split('-')
        return flag[1]
    }
    const handleChange = (value) => {
        const order = getSortFilter(value)
        const res = userListRender.sort((a,b) => {
            if (order === 'asc') return a.userName.toLowerCase() > b.userName.toLowerCase() ? 1 : -1 
            else return b.userName.toLowerCase() > a.userName.toLowerCase() ? 1 : -1
        })
        setUserListRender([...res])
    }
    useEffect(() => {
        setUserListRender(userList)
    }, [setUserListRender])
    return ( 
        <div className="admin__users">
            <Header text='Quản lý tài khoản' onChange={(value) => handleChange(value)}/>
            <UsersList users={userListRender}/>
        </div>
    );
}

export default Users;
