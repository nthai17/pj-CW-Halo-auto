import "./header.scss";
import { NavLink, Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="header__main">
        <NavLink className="logo" to={"/"}></NavLink>

        <div className="main-nav">
          <NavLink className="nav-item" to={"/"}>
            Trang chủ
          </NavLink>
          <NavLink className="nav-item" to={"/introduce"}>
            Giới thiệu
          </NavLink>
          <NavLink className="nav-item" to={"/products"}>
            Sản phẩm
            <span className="nav-item__down">
              <i className="fa fa-angle-down" />
            </span>
            <div className="nav-item__products">
              <NavLink className="nav-item__products__details" to={"/products"}>
                Sản phẩm mới{" "}
                <span className="nav-item__products__details__down">
                  <i className="fa fa-angle-right" />
                </span>
              </NavLink>
              <NavLink className="nav-item__products__details" to={"/products"}>
                Sản phẩm nổi bật
                <span className="nav-item__products__details__down">
                  <i className="fa fa-angle-right" />
                </span>
              </NavLink>
              <NavLink className="nav-item__products__details" to={"/products"}>
                Sản phẩm khuyến mãi
              </NavLink>
            </div>
          </NavLink>
          <NavLink className="nav-item" to={"/blogs"}>
            Tin tức
          </NavLink>
          <NavLink className="nav-item" to={"/"}>
            Liên hệ
          </NavLink>
        </div>

        <div className="box-right">
          <div className="box-right__search">
            <i className="fa fa-search" />
          </div>
          <NavLink className="box-right__cart" to={"/cart"}>
            <i className="fa fa-shopping-cart" />
          </NavLink>
          <div className="box-right__user">
            <i className="fa fa-user" />
            <div className="details">
              <NavLink className='account' to={"/login"}>Đăng nhập</NavLink>
              <NavLink className='account' to={"/register"}>Đăng ký</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
