import { useEffect, useState } from 'react'
import Header from '../../../header'
import './index.scss'
import ProductsList from './productsList'
import ModalViewProduct from '../../../modals/ModalViewProduct'
import ModalEditProduct from '../../../modals/ModalEditProduct'
import ModalDeleteProduct from '../../../modals/ModalDeleteProduct'
import ModalCreateProduct from '../../../modals/ModalCreateProduct'
import axios from 'axios'

function Products() {
    //const
    const [products, setProducts] = useState([])
    const [isShowModalCreate, setIsShowModalCreate] = useState(false)
    const [itemShowModalEdit, setItemShowModalEdit] = useState({isShow: false, data: {}})
    const [itemShowModalDelete, setItemShowModalDelete] = useState({isShow: false, data: {}})
    const [itemShowModalView, setItemShowModalView] = useState({isShow: false, data: {}})
    const [newNameError, setNewNameError] = useState(false)
    // api
    const getProduct = async () => {
        return axios.get(process.env.REACT_APP_API_PRODUCT).then(res => {setProducts(res.data.listProduct)})
    }
    //
    useEffect(() => {
        getProduct()
    }, [setProducts])

    // helper
    const getSortFilter = (value) => {
        const flag = value.split('-')
        return flag[1]
    }

    // handle
    const handleChangFilter = (value) => {
        const order = getSortFilter(value)
        const res = products.sort((a,b) => {
            if (order === 'asc') return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1 
            else return b.name.toLowerCase() > a.name.toLowerCase() ? 1 : -1
        })
        setProducts([...res])
    }
    const handleCreateNewProduct = (form) => {
        axios.post(`https://haluauto.herokuapp.com/product`, form)
        .then((res) => {
            if (res.data.message.includes('duplicate')) setNewNameError(true)
            else getProduct().then(() => setIsShowModalCreate(false)).then(() => setNewNameError(false))
        })
    }
    const handleEditProduct = (form, id) => {
        axios.put(`https://haluauto.herokuapp.com/product/${id}`, form)
        .then((res) => {
            getProduct().then(() => setItemShowModalEdit(false))
        })
    }
    const handleDeleteProduct = (id) => {
        axios.delete(`https://haluauto.herokuapp.com/product/${id}`).then(() => {
            getProduct().then(() => setItemShowModalDelete(false))
        })
    }

    return ( 
        <div className="admin__products">
            <Header text='Quản lý sản phẩm' onChange={(value) => handleChangFilter(value)}/>
            <div className='admin__products__add'>
                <span className='admin__products__add__btn' onClick={() => setIsShowModalCreate(true)}>
                    <i className="fa-solid fa-circle-plus"/> Thêm sản phẩm mới
                </span>
            </div>
            <ProductsList 
                list={products} 
                onClickEdit={(product) => setItemShowModalEdit({data: product, isShow: true})}
                onClickDelete={(product) => setItemShowModalDelete({data: product, isShow: true})}
                onClickView={(product) => setItemShowModalView({data: product, isShow: true})}
            />
            {
                isShowModalCreate && 
                <ModalCreateProduct 
                    onSubmit={(form) => handleCreateNewProduct(form)} 
                    onClose={() => setIsShowModalCreate(false)}
                    newNameError={newNameError}
                />
            }
            {
                itemShowModalEdit.isShow &&
                <ModalEditProduct 
                    data={itemShowModalEdit.data}
                    onSubmit={(form, id) => handleEditProduct(form, id)} 
                    onClose={() => setItemShowModalEdit({...itemShowModalEdit, isShow: false})}
                />
            }
            {
                itemShowModalDelete.isShow &&
                <ModalDeleteProduct 
                    data={itemShowModalDelete.data}
                    onSubmit={(id) => handleDeleteProduct(id)} 
                    onClose={() => setItemShowModalDelete({...itemShowModalDelete, isShow: false})}
                />
            }
            {
                itemShowModalView.isShow &&
                <ModalViewProduct 
                    data={itemShowModalView.data}
                    onClose={() => setItemShowModalView({...itemShowModalView, isShow: false})}
                />
            }
        </div>
    );
}

export default Products;
