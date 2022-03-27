import "./product.scss";
import { Link } from "react-router-dom";
import { formatPrice } from "../../lib/until";

const ProductItemSlide = ({ data }) => {
  // console.log(data);
  return (
    <div className="wrap-box">
      <div className="product-box">
        <div className="product-thumbnail">
          <Link to={`/product/${data.category}/${data.id}`}>
            <img src={data.imgSrc} />
          </Link>
          <div className="sale-flash">{data.saleFlash}%</div>
        </div>
        <div className="product-info">
          <Link className="product-name" to={`/product/detail/${data.id}`}>
            {data.name}
          </Link>
          <div className="price-box">
            <span className="special-price">
              {formatPrice(data.currentPrice)}
            </span>
            <span className="old-price">{formatPrice(data.oldPrice)}</span>
          </div>
          <button className="btn-buy">mua hàng</button>
          <button className="btn-eye"><i className="fa fa-eye" aria-hidden="true"/></button>
        </div>
      </div>
    </div>
  );
};

export default ProductItemSlide;
