import "./index.scss";
import { useState } from "react";
 

const SortPagiBar = ({onChange}) => {
  return (
    <div className="sortPagiBar">
      <div className="sortPagiBar__row">
        <label>Sắp xếp: </label>
        <ul className="pagiBar__list">
          <li className="pagiBar__list__detail">
            <span>Thứ tự</span>
            <ul>
              <li>Mặc định</li>
              <li onClick={() => onChange('asc')}>A - Z</li>
              <li onClick={() => onChange('desc')}>Z - A</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SortPagiBar;
