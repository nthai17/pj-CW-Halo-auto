import './index.scss';
import { formatPrice } from '../../../../lib/until';
import { Link } from 'react-router-dom';

const TrendyProduct = ({ product, category }) => {
  return (
    <Link className='trendy-link' to={`/product/${category}/${product.id}`}>
      <div className="trendy-product d-flex">
        <div className="trendy-product__img col-lg-4">
          <img src={product.imgSrc} alt="image"></img>
          <div className='product__item__label'>{product.saleFlash}%</div>
        </div>
        <div className="trendy-product__info col-lg-8">
          <p>{product.name}</p>
          <div className='trendy-product__price'>
            <p>{formatPrice(product.currentPrice)}</p>
            <span>{formatPrice(product.oldPrice)}</span>
          </div>
        </div>
      </div>
    </Link>
  )
};

export  default TrendyProduct;