import { useParams } from 'react-router-dom';
import { fakeData } from '../../../lib/const';
import BreadCrumb from '../breadCrumb/breadcrumb';
import './index.scss';
import { formatPrice } from '../../../lib/until';
import TrendyProduct from './trendyProduct';
import TabNav from './tabsNav';
import { Routes, Route, Outlet } from "react-router-dom";
import Tab from './tabs';
import Home from '../../home';
import ProductItem from '../ProductItem';
import '../productItem.scss';
import '../../home/HomeSection/index.scss';
import '../../../css/index.scss';
import { useState } from 'react';

function ProductsDetail() {
  const { id, category } = useParams();
  const productList = fakeData[category].listPreview;
  const product = fakeData[category].listPreview.find(item => item.id === Number(id));
  const [amount, setAmount] = useState(1);

  const handleOrder = () => {
    if (localStorage.getItem('cart')) {
      const productCart = JSON.parse(localStorage.getItem('cart'));
      const existedProduct = productCart.find(item => item.id === product.id && item.name === product.name);
      console.log(productCart);
      console.log(existedProduct);
      if (existedProduct) {
        const newProductCart = productCart.map(item => {
          if (item.id === product.id && item.name === product.name) {
            console.log(item.amount);
            console.log(amount);
            return {...item, amount: Number(item.amount) + Number(amount)};;
          } else {
            return item;
          }
        })
        localStorage.setItem('cart', JSON.stringify(newProductCart));
      } else {
        productCart.push({...product, amount: Number(amount)});
        localStorage.setItem('cart', JSON.stringify(productCart));
      }
    } else {
      const productCart = localStorage.setItem('cart', JSON.stringify([{...product, amount: Number(amount)}]));
    }
  };

  return (
      <section className="product-details">
        <div className='breadcrumb-img'>
          <img src='https://bizweb.dktcdn.net/100/364/158/themes/802198/assets/bg-bcrum.jpg?1638764971580' alt='breadcrumb-img'></img>
          <div className='breadcrumb__container'>
            <h3>{product.name}</h3>
            <BreadCrumb items={["Trang chủ", "Lốp xe"]} last={product.name} />
          </div>
        </div>
        <div className='grid wide home__section__wrap'>
          <div className='product-details__top row'>
            <div className='product-details__img col-lg-4'>
              <img src={product.imgSrc}></img>
            </div>
            <div className='product-details__info col-lg-5'>
              <h3>{product.name}</h3>
              <div className='rating'>
                <div className='stars'>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <span>Viết đánh giá của bạn</span>
              </div>
              <div className='brand-status'>
                <div>
                  Thương hiêu: {product.brand ? <span>{product.brand}</span> : <span>Đang cập nhật</span>}
                </div>
                <div>
                  Tình trạng: {product.status ? <span>{product.status}</span> : <span>Hết hàng</span>}
                </div>
              </div>
              <div className='prices'>
                <p>{formatPrice(product.currentPrice)}</p>
                <span>{formatPrice(product.oldPrice)}</span>
              </div>
              <div className='product-details__order'>
                <div>
                  <button onClick={() => setAmount(prevAmount => {
                    if(prevAmount === 1) {
                      return 1;
                    } else {
                      return prevAmount - 1;
                    }
                  })}>-</button>
                  <span>{amount}</span>
                  <button onClick={() => setAmount(prevAmount => prevAmount + 1)}>+</button>
                </div>
                <button className="btn__order" onClick={handleOrder}>ĐẶT HÀNG</button>
              </div>
              <p className='summary'>{product.summary}</p>
              <div className='media-icons'>
                <label>Chia sẻ</label>
                <a className='facebook'><i class="fa-brands fa-facebook"></i></a>
                <a className='twitter'><i class="fa-brands fa-twitter"></i></a>
                <a className='printer'><i class="fa-brands fa-pinterest"></i></a>
                <a className='google'><i class="fa-brands fa-google-plus-g"></i></a>
              </div>
            </div>
            <div className='trendy-products col-lg-3'>
              <div><h5 className='title'><a>SẢN PHẨM HOT</a></h5></div>
              <div className='trendy-product__wrapper d-flex flex-column'>
                {productList.length > 0 && productList.map((item, index) => {
                  if (index < 4) {
                    return (
                      <TrendyProduct category={category} product={item} />
                    )
                  }
                })}
              </div>
            </div>
          </div>
        </div>

        <div className='grid wide home__section__wrap'>
          <div className='row'>
            <div className='col-lg-3 p-0'>
              <a><img src='https://bizweb.dktcdn.net/100/364/158/themes/802198/assets/banner_detail_product.jpg?1646905627969' alt='img'></img></a>
            </div>
            <div className='col-lg-9 ps-4'>
                <TabNav category={category} id={product.id} />
                <Outlet />
            </div>
          </div>
        </div>
        <div className='grid wide home__section__wrap'>
          <section className="home__section">
              <div className='home__section__header flex alignItem-center'>
                  <i className="fa-solid fa-angles-right"></i>
                  <h1>SẢN PHẨM LIÊN QUAN</h1>
              </div>
              <div className='home__section__content flex alignItem-start justify-center background-white'>
                  <div className='home__section__listDemo'>
                      {productList.length &&
                        productList.map((item, index) => {
                          if (index < 5) {
                            return (
                                <ProductItem category={category} data={item} key={item.id}/>
                            )
                          } 
                        })
                      }
                  </div>    
              </div>
          </section>
        </div>
      </section>
  );
}

export default ProductsDetail;
