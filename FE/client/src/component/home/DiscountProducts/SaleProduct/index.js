import { Link, useNavigate } from "react-router-dom";
import './index.scss';
import { formatPrice } from '../../../../lib/until';

const SaleProduct = ({ item }) => {
  const navigate = useNavigate()
  return (
    <div className="product-sale row">
      <div className="col-md-5">
        <Link to={`/product/${item.types}/${item._id}`}>
          <img src={item.imgSrc} alt="img"></img>
        </Link>
      </div>
      <div className="col-md-7 product-sale__right">
        <Link className='product__item_name' to={`/product/${item.types}/${item._id}`}>{item.name}</Link>
          <div className='product__item_price'>
              <span className='product__item_price--current'>{formatPrice(item.currentPrice)}</span>
              {item.saleFlash > 0 && item.oldPrice > 0 &&
                <span className='product__item_price--old'>{formatPrice(item.oldPrice)}</span>
              }
          </div>
          <div className="d-flex btn__wrapper">
            <button className="btn__order" onClick={() => navigate(`/product/${item.types}/${item._id}`)}>MUA HÀNG</button>
          </div>
      </div>
      {item.saleFlash > 0 && item.oldPrice > 0 && 
        <div className='product__item__label'>{item.saleFlash}%</div>
      }
    </div>
  )
};

export default SaleProduct;