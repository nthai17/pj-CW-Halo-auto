import { useEffect, useState } from "react";
import axios from "axios";

function OrderList() {
    const [productList, setProductList] = useState([])
    const getProductInfo = (id) => {
        const product = productList.find(item => item._id === id)
        return product
    }
    useEffect(() => {
        const getProduct = async () => {
            axios.get('https://haluauto.herokuapp.com/product').then(res => {setProductList(res.data.listProduct)})
        }
        getProduct()
    }, [])
    return ( 
        <div className="admin__orders_list">
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Phone</td>
                        <td>Email</td>
                        <td>Address</td>
                        <td>Products</td>
                    </tr>
                </thead>
                <tbody>
                    {users && users.length ?
                        users.map(user => {
                            const { name, phone, address, _id, email, listProducts } = user
                            return (
                                <tr className="ta-left" key={id}>
                                    <td>{name}</td>
                                    <td>{phone}</td>
                                    <td>{email}</td>
                                    <td>{address || 'Chưa cập nhật địa chỉ'}</td>
                                    <td>
                                        <div className="product__list">
                                            {listProducts.map(item => {
                                                return (
                                                    <div className="product__list__item" key={_id}>
                                                        <div className="product__list__item__img">
                                                            <img src={getProductInfo(item[0]).imgSrc} alt='hinhanh'/>
                                                        </div>
                                                        <div className="product__list__item__info">
                                                            <div className="product__list__item__info__name">

                                                            </div>
                                                            <div className="product__list__item__info__price">
                                                                
                                                            </div>
                                                            <div className="product__list__item__info__quantity">
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                            }
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    : 
                    <tr>
                        <td colSpan='5'>Không có tài khoản nào.</td>
                    </tr>
                    }
                </tbody>
            </table>
        </div>
    );
}

export default OrderList;
