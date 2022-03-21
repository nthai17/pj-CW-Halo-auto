import "./categorySearch.scss";

const CategorySearch = () => {
  return (
    <div className="categorySearch">
      <div className="categoryCollection__title">Bộ lọc</div>
      <div className="categorySearch__box">
        
        <div className="categorySearch__price">
          <div className="categorySearch__title">Giá sản phẩm</div>
          <div className="categorySearch__checklist">
            <ul className="listCheckBox">
              <label className="categorySearch__checkbox">
                <input type={"checkbox"} />
                Giá dưới 100.000đ
              </label>
              <label className="categorySearch__checkbox">
                <input type={"checkbox"} />
                100.000đ - 200.000đ
              </label>
              <label className="categorySearch__checkbox">
                <input type={"checkbox"} />
                200.000đ - 300.000đ
              </label>
              <label className="categorySearch__checkbox">
                <input type={"checkbox"} />
                300.000đ - 500.000đ
              </label>
              <label className="categorySearch__checkbox">
                <input type={"checkbox"} />
                500.000đ - 1.000.000đ
              </label>
              <label className="categorySearch__checkbox">
                <input type={"checkbox"} />
                Giá trên 1.000.000đ
              </label>
            </ul>
          </div>
        </div>

        <div className="categorySearch__trademark">
          <div className="categorySearch__title">Thương hiệu</div>
          <div className="categorySearch__checklist">
            <ul className="listCheckBox">
              <label className="categorySearch__checkbox">
                <input type={"checkbox"} />
                Audi
              </label>
              <label className="categorySearch__checkbox">
                <input type={"checkbox"} />
                Ford
              </label>
              <label className="categorySearch__checkbox">
                <input type={"checkbox"} />
                Huyndai
              </label>
              <label className="categorySearch__checkbox">
                <input type={"checkbox"} />
                KIA
              </label>
            </ul>
          </div>
        </div>

        <div className="categorySearch__insurance">
          <div className="categorySearch__title">Bảo hành</div>
          <div className="categorySearch__checklist">
            <ul className="listCheckBox__none">
              <label className="categorySearch__checkbox">
                <input type={"checkbox"} />
                12 tháng
              </label>
              <label className="categorySearch__checkbox">
                <input type={"checkbox"} />
                24 tháng
              </label>
              <label className="categorySearch__checkbox">
                <input type={"checkbox"} />
                36 tháng
              </label>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySearch;
