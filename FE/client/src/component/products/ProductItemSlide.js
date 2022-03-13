import "./product.css";
import { formatPrice } from "../../lib/until";

const ProductItemSlide = ({ data }) => {
  console.log(data);
  return (
    <div className="wrap-box">
      <div className="product-box">
        <div className="product-thumbnail">
          <img src={data.imgSrc} />
          <div className="sale-flash">{data.saleFlash}%</div>
        </div>
        <div className="product-info">
          <h3 className="product-name">{data.name}</h3>
          <div className="price-box">
            <div className="special-price">
              {formatPrice(data.currentPrice)}
            </div>
            <div className="old-price">{formatPrice(data.oldPrice)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItemSlide;
