import './index.scss'
import {useState} from 'react'

function ModalViewProduct({onClose, data}) {
    const handleClose = (e) => {
        const listClass = Array.from(e.target.classList)
        if (listClass.includes('modal')) onClose()
    }
    return ( 
        <div className="modal" onClick={(e) => handleClose(e)}>
            <div className='modal__inner modal__view'>
                <div className='modal__inner__massage modal__inner__message--edit'>CHI TIẾT SẢN PHẨM</div>
                <div className='modal__inner__form'>
                    <div className={`form__group`}><span>Tên: </span>{data.name}</div>
                    <div className={`form__group`}><span>Loại: </span>{data.types}</div>
                    <div className={`form__group`}><span>Giá bán: </span>{data.currentPrice}</div>
                    <div className={`form__group`}><span>Giá cũ: </span>{data.oldPrice}</div>
                    <div className={`form__group form__group--img`}>
                        <img src={data.imgSrc} alt='hinhanh'/>
                    </div>
                    <div className={`form__group`}>{data.desc}</div>
                    <div className={`form__group`}><span>Số lượng: </span>{data.quantity}</div>
                    <div className={`form__group`}><span>Thương hiêu: </span>{data.brand}</div>
                    <div className={`form__group`}><span>% sale: </span>{data.saleFlash}</div>
                </div>
                <div className='modal__inner__btn'>
                    <button className='modal__inner__btn--close' onClick={() => onClose()}>Close</button>
                </div>
                <div className='modal__inner__close' onClick={() => onClose()}>X</div>
            </div>
        </div>
    );
}

export default ModalViewProduct;
