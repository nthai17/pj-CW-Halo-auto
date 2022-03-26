import { NavLink } from "react-router-dom";
import { useState } from "react";

import "./categoryCollection.scss";

const CategoryColection = () => {
  const [isShowProduct, setIsShowProduct] = useState(false);
  const [isShowProductNew, setIsShowProductNew] = useState(false);
  const [isShowProductFeature, setIsShowProductFeature] = useState(false)

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
              <NavLink
                to={"/products"}
                className={({ isActive }) =>
                  isActive ? "active navItems" : "active navItems"
                }
              >
                Sản phẩm{" "}
              </NavLink>
              <span
                className="open-close"
                onClick={() => {
                  setIsShowProduct(!isShowProduct);
                }}
              >
                {isShowProduct ? (
                  <i className="fa fa-angle-up" />
                ) : (
                  <i className="fa fa-angle-down" />
                )}
              </span>
            </div>
            {isShowProduct && (
              <ul>
                <li>
                  <div className="navItems-product">
                    <NavLink className="navItems detail" to={"/products/new"}>
                      Sản phẩm mới
                    </NavLink>
                    <span
                      className="open-close"
                      onClick={() => {
                        setIsShowProductNew(!isShowProductNew);
                      }}
                    >
                      {isShowProductNew ? (
                        <i className="fa fa-angle-up" />
                      ) : (
                        <i className="fa fa-angle-down" />
                      )}
                    </span>
                  </div>
                  {isShowProductNew && (
                    <ul>
                      <li>
                        <NavLink className="navItems detail-one" to={"/"}>
                          Thiết bị thông minh
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="navItems detail-one" to={"/"}>
                          Nội thất
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="navItems detail-one" to={"/"}>
                          Đèn ô tô
                        </NavLink>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                <div className="navItems-product">
                    <NavLink className="navItems detail" to={"/products/feature"}>
                      Sản phẩm nổi bật
                    </NavLink>
                    <span
                      className="open-close"
                      onClick={() => {
                        setIsShowProductFeature(!isShowProductFeature);
                      }}
                    >
                      {isShowProductFeature ? (
                        <i className="fa fa-angle-up" />
                      ) : (
                        <i className="fa fa-angle-down" />
                      )}
                    </span>
                  </div>
                  {isShowProductFeature && (
                    <ul>
                      <li>
                        <NavLink className="navItems detail-one" to={"/"}>
                          Bình dầu
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="navItems detail-one" to={"/"}>
                          Dầu nhớt
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="navItems detail-one" to={"/"}>
                          Phụ kiện
                        </NavLink>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <NavLink
                    className="navItems detail"
                    to={"/products/discount"}
                  >
                    Sản phẩm khuyến mãi
                  </NavLink>
                </li>
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
