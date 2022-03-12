import { Link } from "react-router-dom";
import './index.scss';
import { formatPrice } from '../../../../lib/until';

const SaleProduct = ({ item }) => {
  return (
    <div className="product-sale row">
      <div className="col-md-5">
        <Link to='/'>
          <img src={item.imgSrc} alt="img"></img>
        </Link>
      </div>
      <div className="col-md-7 product-sale__right">
        <Link className='product__item_name' to='/'>{item.name}</Link>
          <div className='product__item_price'>
              <span className='product__item__price--current'>{formatPrice(item.currentPrice)}</span>
              <span className='product__item__price--old'>{formatPrice(item.oldPrice)}</span>
          </div>
          <div className="d-flex btn__wrapper">
            <button className="btn__order">MUA HÀNG</button>
            <button className="btn__view">
              <i class="fa-solid fa-eye"></i>
            </button>
          </div>
      </div>
      <div className='product__item__label'>{item.saleFlash}%</div>
    </div>
  )
};

export default SaleProduct;