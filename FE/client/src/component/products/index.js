import "./product.scss";
import Pagination from "./CategoryDetail/Pagination";
import BestSellerProduct from "./BestSellerProduct";
import CategoryColection from "./ProductCategory/categoryCollection";
import CategorySearch from "./ProductCategory/categorySearch";
import SortPagiBar from "./CategoryDetail/SortPagiBar";
import ProductsView from "./CategoryDetail/ProductsView";
import { bestSellerList } from "../../lib/const";
import { useState, useEffect, useRef } from "react";
import { fakeData } from "../../lib/const";

function Products() {
  const [currentPage, setCurrentPage] = useState(1);
  const [list, setList] = useState([]);
  const { tire, accessory, smartDivice } = fakeData;
  const [filter, setFilter] = useState({});
  const [preFilterArr, setPreFilterArr] = useState([]);

  // console.log(filter)

  const defaultData = [
    ...tire.listPreview,
    ...accessory.listPreview,
    ...smartDivice.listPreview,
  ];

  const listRender = (currentPage) => {
    const res = list.slice(16 * (currentPage - 1), 16 * currentPage);
    return res;
  };

  const ref = useRef(false);

  useEffect(() => {
    setList(defaultData);
  }, []);

  useEffect(() => {
    if (ref.current) {
      const filterArr = Object.keys(filter).filter(
        (item) => !!filter[item] !== false
      );

      // console.log(filterArr)
      // console.log(list)
      const newList = (
        filterArr.length > preFilterArr.length ? list : defaultData
      ).filter((item) => {
        return filterArr.every((i) => {
          if (i === "currentPrice") {
            return (
              item[i] < Number(filter[i].split("-")[1]) &&
              item[i] >= Number(filter[i].split("-")[0])
            );
          }
          return item[i] === filter[i];
        });
      });
      // console.log(newList)
      if (newList.length) {
        setList(newList);
      } else {
        setList(defaultData);
      }

      setPreFilterArr(filterArr);
    }
  }, [filter]);

  const filterBrand = (brand) => {
    ref.current = true;
    // console.log(brand);
    setFilter({ ...filter, brand: brand });
  };

  const filterPrice = (price) => {
    // console.log(price)
    ref.current = true;
    setFilter({ ...filter, currentPrice: price });
  };

  const filterInsur = (month) => {
    ref.current = true;
    setFilter({ ...filter, insurance: month });
  };

  const handleSort = (order) => {
    console.log(order);
    if (order === "asc") {
      const newList = list.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        } else {
          return -1;
        }
      });
      console.log(newList);
      setList([...newList]);
    }
    if (order === "desc") {
      const newList = list.sort((a, b) => {
        if (a.name > b.name) {
          return -1;
        } else {
          return 1;
        }
      });
      setList([...newList]);
    }
  };

  return (
    <div className="products">
      <BestSellerProduct list={bestSellerList} />
      <div className="flex-wrap">
        <div className="category">
          <CategoryColection />
          <CategorySearch
            list={list}
            filterBrand={filterBrand}
            filterPrice={filterPrice}
            filterInsur={filterInsur}
          />
        </div>
        <div className="categoryDetail">
          <SortPagiBar onChange={(order) => handleSort(order)} />
          <ProductsView list={listRender(currentPage)} />
          <Pagination
            list={list}
            currentPage={currentPage}
            onClick={(value) => setCurrentPage(value)}
          />
        </div>
      </div>
    </div>
  );
}

export default Products;
