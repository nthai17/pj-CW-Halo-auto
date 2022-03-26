import "./categorySearch.scss";
import { useState } from "react";
const arr = [
  { label: "Audi", id: 1 },
  { label: "Ford", id: 2 },
  { label: "Huyndai", id: 3 },
];
const arrPrice = [
  { label: "Giá dưới 100.000đ", id: 1, value: "0-100000" },
  { label: "100.000đ - 200.000đ", id: 2, value: "100000-200000" },
  { label: "200.000đ - 300.000đ", id: 3, value: "200000-300000" },
  { label: "300.000đ - 500.000đ", id: 4, value: "300000-500000" },
  { label: "500.000đ - 1.000.000đ", id: 5, value: "500000-1000000" },
  { label: "Giá trên 1.000.000đ", id: 6, value: "1000000-10000000" },
];

const arrInsur = [
  { label: "12 tháng", id: 1 },
  { label: "24 tháng", id: 2 },
  { label: "36 tháng", id: 3 },
];

const CategorySearch = ({ list, filterBrand, filterPrice, filterInsur }) => {
  // console.log(list);
  const [filterBrandList, setFilterBrandList] = useState(arr);
  const [filterPriceList, setFilterPriceList] = useState(arrPrice);
  const [filterInsurList, setFilterInsurList] = useState(arrInsur);

  const listFilterBrand = list.map((item) => item.brand);
  const listFilterInsurList = list;
  const renderFirterBrand = Array.from(new Set(listFilterBrand));
  // console.log(arr)

  const handlePrice = (string) => {
    // console.log(string)
    if (filterPriceList.length === 1) {
      setFilterPriceList(arrPrice);
      filterPrice('');
    } else {
      const newArr = arrPrice.filter((Price) => Price.value === string);
      console.log(newArr)
      setFilterPriceList(newArr);
      filterPrice(string);
    }
  };

  const handleBrand = (item) => {
    if (filterBrandList.length === 1) {
      setFilterBrandList(arr);
      filterBrand("");
    } else {
      const newArr = arr.filter((brand) => brand.label === item);
      setFilterBrandList(newArr);
      filterBrand(item);
    }
  };

  const handleInsur = (month) => {
    // console.log(month)
    if (filterInsurList.length === 1) {
      setFilterInsurList(arrInsur);
      filterInsur("");
    } else {
      const newArr = arrInsur.filter((number) => number.label === month);
      setFilterInsurList(newArr);
      filterInsur(month);
    }
  };

  return (
    <div className="categorySearch">
      <div className="categoryCollection__title">Bộ lọc</div>
      <div className="categorySearch__box">
        <div className="categorySearch__price">
          <div className="categorySearch__title">Giá sản phẩm</div>
          <div className="categorySearch__checklist">
            <ul className="listCheckBox">
              {filterPriceList.map((item) => {
                return (
                  <label
                    key={item.id}
                    className="categorySearch__checkbox"
                    onClick={() => handlePrice(item.value)}
                  >
                    <input type={"checkbox"} />
                    {item.label}
                  </label>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="categorySearch__trademark">
          <div className="categorySearch__title">Thương hiệu</div>
          <div className="categorySearch__checklist">
            <ul className="listCheckBox">
              {filterBrandList.map((item) => {
                return (
                  <label
                    key={item.id}
                    className="categorySearch__checkbox"
                    onClick={() => handleBrand(item.label)}
                  >
                    <input type={"checkbox"} />
                    {item.label}
                  </label>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="categorySearch__insurance">
          <div className="categorySearch__title">Bảo hành</div>
          <div className="categorySearch__checklist">
            <ul className="listCheckBox__none">
              {filterInsurList.map((item) => {
                return (
                  <label
                    className="categorySearch__checkbox"
                    key={item.id}
                    onClick={() => handleInsur(item.label)}
                  >
                    <input type={"checkbox"} />
                    {item.label}
                  </label>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySearch;
