import './index.scss'
import { useState } from 'react';

const formFieldRequire = ['quantity', 'desc', 'imgSrc', 'currentPrice', 'name', 'types']

function ModalEditProduct({onSubmit, onClose, data}) {
    const [formData, setFormData] = useState(data)
    const [error, setError] = useState({})
    const handleChangeForm = (key, value) => {
        setFormData({...formData, [key]: value})
    }
    const hasError = () => {
        let errors = {}
        formFieldRequire.forEach(item => {
            if (item === 'currentPrice') {
                if (Number(formData[item]) === NaN) errors[item] = 'Vui lòng nhập số ở đây.'
                else if (!formData[item]) errors[item] = 'Mục này là bắt buộc.'
            } else {
                if (!formData[item]) errors[item] = `Mục này là bắt buộc.`
            }
        })
        const status = (!Object.keys(errors).length || Object.keys(errors).every(item => !!errors[item] === false)) ? false : true
        return {status, errors}
    }

    const handleSubmit = () => {
        if(hasError().status) {
            setError(hasError().errors)
        } else {
            const formRequest = {...formData}
            delete formRequest._id
            delete formRequest.createdAt
            delete formRequest.updatedAt
            delete formRequest.__v
            onSubmit(formRequest, formData._id)
        }
    }
    const handleClose = (e) => {
        const listClass = Array.from(e.target.classList)
        if (listClass.includes('modal')) onClose()
    }
    return ( 
        <div className="modal" onClick={(e) => handleClose(e)}>
           <div className='modal__inner modal__edit'>
                <div className='modal__inner__massage modal__inner__message--edit'>ChỈNH SỬA SẢN PHẨM</div>
                <div className='modal__inner__form'>
                    <div className={`form__group${error.name ? ' form__group--error' : ''}`}>
                        <input 
                            placeholder='Tên sản phẩm'
                            value={formData.name || ''}
                            onChange={(e) => handleChangeForm('name', e.target.value)}
                        />
                        <span className='form__group__error'>{error.name && 'Tên sản phẩm đã tồn tại.' || ''}</span>
                    </div>
                    <div className={`form__group${error.types ? ' form__group--error' : ''}`}>
                        <input 
                            placeholder='Loại sản phẩm. Vd: tire'
                            value={formData.types || ''}
                            onChange={(e) => handleChangeForm('types', e.target.value)}
                        />
                        <span className='form__group__error'>{error.types || ''}</span>
                    </div>
                    <div className={`form__group${error.currentPrice ? ' form__group--error' : ''}`}>
                        <input 
                            placeholder='Giá bán'
                            value={formData.currentPrice || ''}
                            onChange={(e) => handleChangeForm('currentPrice', e.target.value)}
                        />
                        <span className='form__group__error'>{error.currentPrice || ''}</span>
                    </div>
                    <div className={`form__group`}>
                        <input 
                            placeholder='Giá hiện tại'
                            value={formData.oldPrice || ''}
                            onChange={(e) => handleChangeForm('oldPrice', e.target.value)}
                        />
                    </div>
                    <div className={`form__group${error.imgSrc ? ' form__group--error' : ''}`}>
                        <input 
                            placeholder='Link ảnh sản phẩm'
                            value={formData.imgSrc || ''}
                            onChange={(e) => handleChangeForm('imgSrc', e.target.value)}
                        />
                        <span className='form__group__error'>{error.imgSrc || ''}</span>
                    </div>
                    <div className={`form__group${error.desc ? ' form__group--error' : ''}`}>
                        <textarea 
                            placeholder='Mô tả'
                            value={formData.desc || ''}
                            onChange={(e) => handleChangeForm('desc', e.target.value)}
                        />
                        <span className='form__group__error'>{error.desc || ''}</span>
                    </div>
                    <div className={`form__group${error.quantity ? ' form__group--error' : ''}`}>
                        <input 
                            placeholder='Số lượng'
                            value={formData.quantity || ''}
                            onChange={(e) => handleChangeForm('quantity', e.target.value)}
                        />
                        <span className='form__group__error'>{error.quantity || ''}</span>
                    </div>
                    <div className={`form__group`}>
                        <input 
                            placeholder='Thương hiệu'
                            value={formData.brand || ''}
                            onChange={(e) => handleChangeForm('brand', e.target.value)}
                        />
                    </div>
                    <div className={`form__group`}>
                        <input 
                            placeholder='% giảm giá'
                            value={formData.saleFlash || ''}
                            onChange={(e) => handleChangeForm('saleFlash', e.target.value)}
                        />
                    </div>
                </div>
                <div className='modal__inner__btn'>
                    <button className='modal__inner__btn--close' onClick={() => onClose()}>Close</button>
                    <button className='modal__inner__btn--confirm' onClick={handleSubmit}>Ok</button>
                </div>
                <div className='modal__inner__close' onClick={() => onClose()}>X</div>
            </div>
        </div>
    );
}

export default ModalEditProduct;
