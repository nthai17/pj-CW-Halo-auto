import {Link} from 'react-router-dom';
import './productItem.scss'
import { formatPrice } from '../../lib/until'

const ProductItem = ({data, type, category}) => {
    const handleAddToCart = (data) => {
        if (localStorage.getItem('cart')) {
            const productCart = JSON.parse(localStorage.getItem('cart'));
            const existedProduct = productCart.find(item => item._id === data._id);
            if (existedProduct) {
              const newProductCart = productCart.map(item => {
                if (item._id === data._id) {
                  return {...item, amount: Number(item.amount) + 1};;
                } else {
                  return item;
                }
              })
              localStorage.setItem('cart', JSON.stringify(newProductCart));
            } else {
              productCart.push({...data, amount: 1});
              localStorage.setItem('cart', JSON.stringify(productCart));
            }
          } else {
            localStorage.setItem('cart', JSON.stringify([{...data, amount: 1}]));
          }  
    }
    return (
        <div className="product__item">
            <div className='product__item-wrap'>
                <div className={`${type === 'slide' ? 'flex' : ''}`}></div>
                <Link className="product__item__background" to={`/product/${category}/${data._id}`}>
                    <img src={data.imgSrc} alt={data.name}/>
                </Link>
                <div className="product__item__addCartBtn flex alignItem-center justify-center"
                    onClick={() => handleAddToCart(data)}
                >
                    <i className="fa-solid fa-cart-plus"/>
                </div>
                <Link className='product__item__name' to={`/product/${category}/${data._id}`}>{data.name}</Link>
                <div className='product__item__price'>
                    <span className='product__item__price--current'>{formatPrice(data.currentPrice)}</span>
                    {data.saleFlash > 0 && data.oldPrice > 0 && 
                        <span className='product__item__price--old'>{formatPrice(data.oldPrice)}</span>
                    }
                </div>
                {data.saleFlash > 0 && data.oldPrice > 0 && <div className='product__item__label'>{data.saleFlash}%</div>}
            </div>
        </div>
    )
}

export default ProductItem
