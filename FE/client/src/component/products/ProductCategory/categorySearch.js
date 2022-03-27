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

const CategorySearch = ({ filterBrand, filterPrice, filterInsur }) => {
  const [filterBrandList, setFilterBrandList] = useState(arr);
  const [filterPriceList, setFilterPriceList] = useState(arrPrice);
  const [filterInsurList, setFilterInsurList] = useState(arrInsur);

  const handlePrice = (string) => {
    if (filterPriceList.length === 1) {
      setFilterPriceList(arrPrice);
      filterPrice('');
    } else {
      const newArr = arrPrice.filter((Price) => Price.value === string);
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
                return <CheckboxItem item={item} key={item.id} type='price' handleClick={(value) => handlePrice(value)}/>
              })}
            </ul>
          </div>
        </div>

        <div className="categorySearch__trademark">
          <div className="categorySearch__title">Thương hiệu</div>
          <div className="categorySearch__checklist">
            <ul className="listCheckBox">
              {filterBrandList.map((item) => {
                return <CheckboxItem item={item} key={item.id} type='brand' handleClick={(value) => handleBrand(value)}/>
              })}
            </ul>
          </div>
        </div>

        <div className="categorySearch__insurance">
          <div className="categorySearch__title">Bảo hành</div>
          <div className="categorySearch__checklist">
            <ul className="listCheckBox__none">
              {filterInsurList.map((item) => {
                return <CheckboxItem item={item} key={item.id} type='insur' handleClick={(value) => handleInsur(value)}/>
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySearch;

export const CheckboxItem = ({item, handleClick, type}) => {
  const [isCheck, setIsCheck] = useState(false)
  return (
    <div
      key={item.id}
      className="categorySearch__checkbox"
      onClick={() => {
        setIsCheck(!isCheck)
        handleClick(type ==='price' ? item.value : item.label)
      }}
    >
      <div className={isCheck ? 'inputCheckBox isCheck' : 'inputCheckBox'}></div>
      <label>
        {item.label}
      </label>
    </div>
  );
}
