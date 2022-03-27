import { useEffect, useRef } from 'react';
import './index.scss'

function ModalDeleteProduct({data, onSubmit, onClose}) {

    const handleClose = (e) => {
        const listClass = Array.from(e.target.classList)
        if (listClass.includes('modal')) onClose()
    }

    return ( 
        <div className="modal" onClick={(e) => handleClose(e)}>
            <div className='modal__inner modal__delete'>
                <div className='modal__inner__massage modal__inner__message--delete'>{`Xóa sản phẩm ${data.name}?`}</div>
                <div className='modal__inner__btn'>
                    <button className='modal__inner__btn--close' onClick={() => onClose()}>Close</button>
                    <button className='modal__inner__btn--confirm' onClick={() => onSubmit(data._id)}>Ok</button>
                </div>
                <div className='modal__inner__close' onClick={() => onClose()}>X</div>
            </div>
        </div>
    );
}

export default ModalDeleteProduct;
