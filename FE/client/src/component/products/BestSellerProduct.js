import ProductItemSlide from "./ProductItemSlide";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BestSellerProduct = ({ list }) => {
  const setting = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    dots: false,
    arrows: true
};
  return (
    <div className="best-seller-product">
      <div className="title-text">
        <h3>Sản phẩm bán chạy</h3>
      </div>
      <div className="wrap-product-sale">
        {list.length && (
          <Slider {...setting}>
            {list.map((item) => <ProductItemSlide data={item} key={item._id}/>)}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default BestSellerProduct;
