import { NavLink } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="row">
        <div className="row__info">
          <NavLink className="row__info__img" to={"/"}></NavLink>
          <div className="row__info__location">
            <h1>Địa chỉ: </h1>
            <span>
              Ladeco Building, 266 Doi Can Street, Ba Dinh District, Ha Noi
            </span>
          </div>
          <div className="row__info__hotline">
            <h1>Hotline: </h1>
            <span>19006750</span>
          </div>
          <div className="row__info__email">
            <h1>Email: </h1>
            <span>tuananhdepzai@gmail.com</span>
          </div>
          <div className="row__info__time">
            <p>
              Showroom mở của tất cả các ngày trong tuần từ 10:00 sáng đến 6:00
              tối
            </p>
          </div>
        </div>
        <div className="row__contact">
          <div className="row__contact__details">
            <div className="text">Giới thiệu</div>
            <NavLink className="row__contact__details__link" to={"/"}>
              Trang chủ
            </NavLink>
            <NavLink className="row__contact__details__link" to={"/"}>
              Giới thiệu
            </NavLink>
            <NavLink className="row__contact__details__link" to={"/"}>
              Sản phẩm
            </NavLink>
            <NavLink className="row__contact__details__link" to={"/"}>
              Tin tức
            </NavLink>
            <NavLink className="row__contact__details__link" to={"/"}>
              Liên hệ
            </NavLink>
          </div>
          <div className="row__contact__social">
            <div className="text">Mạng xã hội</div>
            <NavLink className="row__contact__social__icon" to={"/"}>
                <i className="fa-brands fa-twitter"></i>
                <p>Twitter</p>
            </NavLink>
            <NavLink className="row__contact__social__icon" to={"/"}>
                <i className="fa-brands fa-facebook-f"></i>
                <p>Facebook</p>
            </NavLink>
            <NavLink className="row__contact__social__icon" to={"/"}>
                <i className="fa-brands fa-instagram"></i>
                <p>Instagram</p>
            </NavLink>
            <NavLink className="row__contact__social__icon" to={"/"}>
                <i className="fa-brands fa-youtube"></i>
                <p>Youtube</p>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="the-end">
        © Bản quyền thuộc về Haluauto
        <span>|</span>
        <span>Cung cấp bởi Bợm group</span>
      </div>
    </div>
  );
};

export default Footer;
