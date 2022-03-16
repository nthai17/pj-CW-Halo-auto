import "./product.css";
import { Link } from "react-router-dom";
import { formatPrice } from "../../lib/until";

const ProductItemSlide = ({ data }) => {
  // console.log(data);
  return (
    <div className="wrap-box">
      <div className="product-box">
        <div className="product-thumbnail">
          <Link to={`/product/detail/${data.id}`}>
            <img src={data.imgSrc} />
          </Link>
          <div className="sale-flash">{data.saleFlash}%</div>
        </div>
        <div className="product-info">
          <Link className="product-name" to={`/product/detail/${data.id}`}>
            {data.name}
          </Link>
          <div className="price-box">
            <div className="special-price">
              {formatPrice(data.currentPrice)}
            </div>
            <div className="old-price">{formatPrice(data.oldPrice)}</div>
          </div>
          <button className="btn-buy">mua hàng</button>
          <button><i class="fa fa-eye" aria-hidden="true"></i></button>
        </div>
      </div>
    </div>
  );
};

export default ProductItemSlide;
