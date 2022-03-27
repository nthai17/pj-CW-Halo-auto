import "./product.scss";
import { Link, useNavigate } from "react-router-dom";
import { formatPrice } from "../../lib/until";

const ProductItemSlide = ({ data }) => {
  const navigate = useNavigate()

  return (
    <div className="wrap-box">
      <div className="product-box">
        <div className="product-thumbnail">
          <Link to={`/product/${data.types}/${data._id}`}>
            <img src={data.imgSrc} />
          </Link>
          <div className="sale-flash">{data.saleFlash}%</div>
        </div>
        <div className="product-info">
          <Link className="product-name" to={`/product/${data.types}/${data._id}`}>
            {data.name}
          </Link>
          <div className="price-box">
            <span className="special-price">
              {formatPrice(data.currentPrice)}
            </span>
            <span className="old-price">{formatPrice(data.oldPrice)}</span>
          </div>
          <button className="btn-buy" onClick={() => navigate(`/product/${data.types}/${data._id}`)}>mua hàng</button>
        </div>
      </div>
    </div>
  );
};

export default ProductItemSlide;
