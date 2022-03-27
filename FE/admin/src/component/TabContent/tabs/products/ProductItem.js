import './productItem.scss'

const ProductItem = (
    {
        data, 
        type,
        onClickEdit,
        onClickDelete,
        onClickView
    }) => {
    return (
        <div className="product__item">
            <div className='product__item-wrap'>
                <div className={`${type === 'slide' ? 'flex' : ''}`}></div>
                <div className="product__item__background">
                    <img src={data.imgSrc} alt={data.name}/>
                </div>
                <div className='product__item__name'>{data.name}</div>
                <div className='product__item__option'>
                    <div className='product__item__option__item product__item__option__item--edit'
                        onClick={() => onClickEdit(data)}
                    >
                        <i className="fa-solid fa-pen-to-square"/>
                    </div>
                    <div className='product__item__option__item product__item__option__item--delete'
                        onClick={() => onClickDelete(data)}
                    >
                        <i className="fa-solid fa-trash-can"/>
                    </div>
                    <div className='product__item__option__item product__item__option__item--view'
                        onClick={() => onClickView(data)}
                    >
                        <i className="fa-solid fa-eye"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItem
