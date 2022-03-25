import "./index.scss"


const SortPagiBar = () => {
  return (
    <div className="sortPagiBar">
      <label>Sắp xếp: </label>
      <ul className="pagiBar__list">
          <li className="pagiBar__list__detail">
              <span>Thứ tự</span>
              <ul>
                  <li>Mặc định</li>
                  <li>A - Z</li>
                  <li>Z - A</li>
                  <li>Giá tăng dần</li>
                  <li>Giá giảm dần</li>
                  <li>Hàng mới nhất</li>
                  <li>Hàng cũ nhất</li>
              </ul>
          </li>
      </ul>
    </div>
  );
};

export default SortPagiBar;
