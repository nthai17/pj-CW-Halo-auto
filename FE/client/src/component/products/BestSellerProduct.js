import ProductItem from "./ProductItem";
const BestSellerProduct = () => {
  return (
    <div className="best-seller-product">
      <div className="title-text">
        <h3>Sản phẩm bán chạy</h3>
        <div className="wrap-product-sale">
          <ProductItem/>
        </div>
      </div>
    </div>
  );
};

export default BestSellerProduct;
