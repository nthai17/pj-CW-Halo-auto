import { NavLink } from "react-router-dom";
import './index.scss';

const TabNav = ({ category, id }) => {
  const navLinkClassName = (navLinkStatus) => {
    console.log(navLinkStatus);
    return navLinkStatus.isActive ? 'nav-link-active' : ' ';
  };


  return (
    <div className="tab-nav">
      <ul>
        <li>
          <NavLink className={navLinkClassName} to={`/product/${category}/${id}/productInfo`}>thông tin sản phẩm</NavLink>
        </li>
        <li>
          <NavLink className={navLinkClassName} to={`/product/${category}/${id}/productPolicy`}>chính sách</NavLink>
        </li>
        <li>
          <NavLink className={navLinkClassName} to={`/product/${category}/${id}/productEvaluation`}>đánh giá sản phẩm</NavLink>
        </li>
      </ul>
    </div>
  )
};

export default TabNav;