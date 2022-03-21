import "./index.scss"


const SortPagiBar = () => {
  return (
    <div className="sortPagiBar">
      <label>Sắp xếp</label>
      <ul>
          <li>
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
