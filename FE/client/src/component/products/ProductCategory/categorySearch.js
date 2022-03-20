import "./categorySearch.scss";
import { NavLink } from "react-router-dom";

const CategorySearch = () => {
  return (
      <div className="CategorySearch">
          <div className="categoryCollection__title">Bộ lọc</div>
          <div className="categorySearch__box">
              <div className="CategorySearch__price">
                <div className="CategorySearch__title">Giá sản phẩm</div>
                <div className="CategorySearch__checklist">
                    <ul>
                        <label>
                           <input type={"checkbox"}/>
                           <span>
                               <li>
                                    <NavLink>Giá dưới 100.000đ</NavLink>
                               </li>
                           </span>
                        </label>
                    </ul>
                </div>
              </div>
          </div>
      </div>
  );
};

export default CategorySearch;
