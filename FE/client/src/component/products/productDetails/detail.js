import { useParams } from 'react-router-dom';
import BreadCrumb from '../breadCrumb/breadcrumb';
import './index.scss';
import { formatPrice } from '../../../lib/until';
import TrendyProduct from './trendyProduct';
import TabNav from './tabsNav';
import { Outlet } from "react-router-dom";
import ProductItem from '../ProductItem';
import '../productItem.scss';
import '../../home/HomeSection/index.scss';
import '../../../css/index.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';

function ProductsDetail() {
  const { id, category } = useParams();
  const [product, setProduct] = useState();
  const [productList, setProductList] = useState();

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    axios.get('https://haluauto.herokuapp.com/product').then(res => {
      setProduct(res.data.listProduct.find(item => item._id === id));
      setProductList(res.data.listProduct.filter(item => item.types === category));
    });
  }, [id, category]);
  
  const [amount, setAmount] = useState(1);

  const handleOrder = () => {
    if (localStorage.getItem('cart')) {
      const productCart = JSON.parse(localStorage.getItem('cart'));
      const existedProduct = productCart.find(item => item._id === product._id && item.name === product.name);
      if (existedProduct) {
        const newProductCart = productCart.map(item => {
          if (item._id === product._id && item.name === product.name) {
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
        {product && (
          <div>
            <BreadCrumb items={[{text: "Trang chủ", path: '/'}, {text: "Lốp xe", path: '/products'}]} last={product.name}/>
            <div className='grid wide home__section__wrap'>
              <div className='product-details__top row'>
                <div className='product-details__img col-lg-4'>
                  <img src={product.imgSrc}></img>
                </div>
                <div className='product-details__info col-lg-5'>
                  <h3>{product.name}</h3>
                  <div className='rating'>
                    <div className='stars'>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <span>Viết đánh giá của bạn</span>
                  </div>
                  <div className='brand-status'>
                    <div>
                      Thương hiệu: {product.brand ? <span>{product.brand}</span> : <span>Đang cập nhật</span>}
                    </div>
                    <div>
                      Tình trạng: {<span>Còn hàng</span>}
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
                  <p className='summary'>{product.desc}</p>
                  <div className='media-icons'>
                    <label>Chia sẻ</label>
                    <a className='facebook'><i className="fa-brands fa-facebook"></i></a>
                    <a className='twitter'><i className="fa-brands fa-twitter"></i></a>
                    <a className='printer'><i className="fa-brands fa-pinterest"></i></a>
                    <a className='google'><i className="fa-brands fa-google-plus-g"></i></a>
                  </div>
                </div>
                <div className='trendy-products col-lg-3'>
                  <div><h5 className='title'><a>SẢN PHẨM HOT</a></h5></div>
                  <div className='trendy-product__wrapper d-flex flex-column'>
                    {productList && productList.map((item, index) => {
                      if (index < 4) {
                        return (
                          <TrendyProduct category={category} product={item} key={item._id}/>
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
                    <TabNav category={category} id={product._id} />
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
                      <div className='home__section__listDemo w-100'>
                          {productList &&
                            productList.map((item, index) => {
                              if (index < 5) {
                                return (
                                    <ProductItem category={category} data={item} key={item._id}/>
                                )
                              } 
                            })
                          }
                      </div>    
                  </div>
              </section>
            </div>
          </div>
        )}
        
      </section>
  );
}

export default ProductsDetail;
