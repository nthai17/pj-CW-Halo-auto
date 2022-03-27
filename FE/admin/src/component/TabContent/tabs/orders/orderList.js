import { useEffect, useState } from "react";
import axios from "axios";
import './orderList.scss'
import {formatPrice} from '../../../../lib/until'

function OrderList({list}) {
    const [productList, setProductList] = useState([])
    const getProductInfo = (name) => {
        const product = productList.find(item => item.name === name)
        return product || {}
    }
    const getTotalOrder = (id) => {
        const order = list.find(item => item._id === id)
        const total = productList ? 
            order.listProducts.reduce((total, item) => total+=getProductInfo(item.nameProduct).currentPrice*item.quantity , 0) : 0
        return total
    }
    useEffect(() => {
        const getProduct = async () => {
            axios.get('https://haluauto.herokuapp.com/product').then(res => {setProductList(res.data.listProduct)})
        }
        getProduct()
    }, [])
    return ( 
        <div className="admin__orders__table">
            <table>
                <thead>
                    <tr>
                        <td style={{width: '200px'}}>Name</td>
                        <td style={{width: '200px'}}>Phone</td>
                        <td >Email</td>
                        <td style={{width: '150px'}}>Address</td>
                        <td style={{width: '250px'}}>Products</td>
                        <td>Total</td>
                    </tr>
                </thead>
                <tbody>
                    {list && list.length ?
                        list.map(order => {
                            const { name, phone, address, _id, email, listProducts } = order
                            return (
                                <tr className="ta-left" key={_id}>
                                    <td>{name}</td>
                                    <td>{phone.toString().length < 10 ? `0${phone}` : phone}</td>
                                    <td>{email}</td>
                                    <td>
                                        <div className="admin__orders__table__address">
                                            {address || 'Chưa cập nhật địa chỉ'}
                                        </div>
                                    </td>
                                    <td>
                                        <div className="product__list">
                                            {listProducts.map(item => {
                                                return (
                                                    <div className="product__list__item" key={item._id}>
                                                        <div className="product__list__item__img">
                                                            <img src={getProductInfo(item.nameProduct)?.imgSrc} alt='hinhanh'/>
                                                        </div>
                                                        <div className="product__list__item__info">
                                                            <div className="product__list__item__info__name">
                                                                <strong>Tên: </strong>{getProductInfo(item.nameProduct)?.name}
                                                            </div>
                                                            <div className="product__list__item__info__price">
                                                                <strong>Giá: </strong>{formatPrice(getProductInfo(item.nameProduct)?.currentPrice || 0)}
                                                            </div>
                                                            <div className="product__list__item__info__quantity">
                                                                <strong>Số lượng: </strong>{item.quantity}
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                            }
                                        </div>
                                    </td>
                                    <td >
                                        <span 
                                            style={
                                                {color: '#0eeb0e',
                                                backgroundColor: 'yellow', 
                                                fontWeight: '600', 
                                                padding: '0 8px', 
                                                borderRadius: '20px'
                                            }
                                        }>
                                            {formatPrice(getTotalOrder(_id) || 0)}
                                        </span>
                                    </td>
                                </tr>
                            )
                        })
                    : 
                    <tr>
                        <td colSpan='6'>Không có đơn hàng nào.</td>
                    </tr>
                    }
                </tbody>
            </table>
        </div>
    );
}

export default OrderList;
