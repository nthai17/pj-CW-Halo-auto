import {Link} from 'react-router-dom';
import './productItem.scss'
import { formatPrice } from '../../lib/until'

const ProductItem = ({data, type}) => {
    const handleAddToCart = (data) => {
        console.log(data);   
    }
    return (
        <div className="product__item">
            <div className='product__item-wrap'>
                <div className={`${type === 'slide' ? 'flex' : ''}`}></div>
                <Link className="product__item__background" to={`/product/detail/${data.id}`}>
                    <img src={data.imgSrc} alt={data.name}/>
                </Link>
                <div className="product__item__addCartBtn flex alignItem-center justify-center"
                    onClick={() => handleAddToCart(data)}
                >
                    <i className="fa-solid fa-cart-plus"/>
                </div>
                <Link className='product__item__name' to={`/product/detail/${data.id}`}>{data.name}</Link>
                <div className='product__item__price'>
                    <span className='product__item__price--current'>{formatPrice(data.currentPrice)}</span>
                    <span className='product__item__price--old'>{formatPrice(data.oldPrice)}</span>
                </div>
                <div className='product__item__label'>{data.saleFlash}%</div>
            </div>
        </div>
    )
}

export default ProductItem
