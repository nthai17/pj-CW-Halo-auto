import { useEffect, useState } from 'react'
import Header from '../../../header'
import './index.scss'
import OrderList from './orderList'
import axios from 'axios'

function Orders() {
    const [orderList, setOrderList] = useState([])

    const getSortFilter = (value) => {
        const flag = value.split('-')
        return flag[1]
    }

    const handleChangFilter = (value) => {
        const order = getSortFilter(value)
        const res = orderList.sort((a,b) => {
            if (order === 'asc') return a.name > b.name ? 1 : -1 
            else return b.name > a.name ? 1 : -1
        })
        setOrderList([...res])
    }

    useEffect(() => {
        const getOrders = async () => {
            axios.get('https://haluauto.herokuapp.com/order')
            .then((res) => {
                setOrderList(res.data.listOrder)
            })
        }
        getOrders()
    }, [])
    return ( 
        <div className="admin__orders">
            <Header text='Quản lý đơn hàng' onChange={(value) => handleChangFilter(value)}/>
            <OrderList list={orderList} />
        </div>
    );
}

export default Orders;
