import "./product.scss";
import Pagination from "./CategoryDetail/Pagination";
import BestSellerProduct from "./BestSellerProduct";
import CategoryColection from "./ProductCategory/categoryCollection";
import CategorySearch from "./ProductCategory/categorySearch";
import SortPagiBar from "./CategoryDetail/SortPagiBar";
import ProductsView from "./CategoryDetail/ProductsView";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

function Products() {
  const [currentPage, setCurrentPage] = useState(1);
  const [list, setList] = useState([]);
  const [filter, setFilter] = useState({});
  const [preFilterArr, setPreFilterArr] = useState([]);
  const defaultList = useRef()
  const listRender = (currentPage) => {
    const res = list.slice(16 * (currentPage - 1), 16 * currentPage);
    return res;
  };

  const ref = useRef(false);

  useEffect(() => {
    axios.get('https://haluauto.herokuapp.com/product').then(res => {
      defaultList.current = res.data.listProduct
      setList(res.data.listProduct)
    });
  }, []);

  useEffect(() => {
    if (ref.current) {
      const filterArr = Object.keys(filter).filter(
        (item) => !!filter[item] !== false
      );
      const newList = (
        filterArr.length > preFilterArr.length ? list : defaultList.current
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
      if (newList.length) {
        setList(newList);
      } else {
        if (filterArr.length) setList([]);
        else axios.get('https://haluauto.herokuapp.com/product').then(res => setList(res.data.listProduct));
      }

      setPreFilterArr(filterArr);
    }
  }, [filter]);

  const filterBrand = (brand) => {
    ref.current = true;
    setFilter({ ...filter, brand: brand });
  };

  const filterPrice = (price) => {
    ref.current = true;
    setFilter({ ...filter, currentPrice: price });
  };

  const filterInsur = (month) => {
    ref.current = true;
    setFilter({ ...filter, insurance: month });
  };

  const handleSort = (order) => {
    if (order === "asc") {
      const newList = list.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        } else {
          return -1;
        }
      });
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
      <BestSellerProduct list={list.slice(0, 4)} />
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
          <SortPagiBar onChange={(order) => handleSort(order)} total={defaultList?.current?.length} count={listRender(currentPage).length}/>
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
