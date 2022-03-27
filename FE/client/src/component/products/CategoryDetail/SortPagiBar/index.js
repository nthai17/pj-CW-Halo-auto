import { useState } from "react";
import "./index.scss"; 

const SortPagiBar = ({onChange, count, total}) => {
  const [currentSort, setCurrentSort] = useState('Thứ tự')
  return (
    <div className="sortPagiBar">
      <div className="sortPagiBar__count">
        {`${count} / ${total} Sản phẩm`}
      </div>
      <div className="sortPagiBar__row">
        <label>Sắp xếp: </label>
        <ul className="pagiBar__list">
          <li className="pagiBar__list__detail">
            <span>{currentSort}</span>
            <ul>
              <li onClick={() => 
                {
                  setCurrentSort('A - Z')
                  onChange('asc')
                }}>A - Z</li>
              <li onClick={() => 
                {
                  setCurrentSort('Z - A')
                  onChange('desc')
                }}>Z - A</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SortPagiBar;
