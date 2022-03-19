import { NavLink } from "react-router-dom";
import { useState } from "react";

import "./categoryCollection.scss";

const CategoryColection = () => {
  const [isShowProduct, setIsShowProduct] = useState(false);

  return (
    <div className="categoryCollection">
      <div className="categoryCollection__title">Danh mục</div>
      <div className="categoryCollection__box">
        <ul>
          <li>
            <NavLink className="navItems" to={"/"}>
              Trang chủ
            </NavLink>
          </li>
          <li>
            <NavLink className="navItems" to={"/introduce"}>
              Giới thiệu
            </NavLink>
          </li>
          <li>
            <div className="navItems-product">
              <NavLink className="navItems" to={"/products"}>
                Sản phẩm{" "}
              </NavLink>
              <span
                className="open-close"
                onClick={() => {
                  setIsShowProduct(!isShowProduct);
                }}
              >
                <i className="fa fa-angle-down"></i>
              </span>
            </div>
            {isShowProduct && (
              <ul>
                <li>Sản phẩm mới</li>
                <li>Sản phẩm nổi bật</li>
                <li>Sản phẩm khuyến mãi</li>
              </ul>
            )}
          </li>
          <li>
            <NavLink className="navItems" to={"/"}>
              Tin tức
            </NavLink>
          </li>
          <li>
            <NavLink className="navItems" to={"/"}>
              Liên hệ
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CategoryColection;
