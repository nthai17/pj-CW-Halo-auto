import { useEffect, useState } from 'react';
import CartItem from './CartItem';
import './index.scss';
import { formatPrice } from '../../lib/until';
import { Link } from 'react-router-dom';

const Cart = () => {
  const productList = JSON.parse(localStorage.getItem('cart'));
  const [products, setProducts] = useState(productList);
  let itemsPrice;

  const increaseAmount = (product) => {
    const existedProduct = products.find(item => item._id === product._id);
    if (existedProduct) {
      setProducts(
        products.map(item => item._id === product._id ? {...item, amount: item.amount + 1} : item)
      )
    }
  };

  const decreaseAmount = (product) => {
    const existedProduct = products.find(item => item._id === product._id);
    if (existedProduct.amount === 1) {
      setProducts(
        products.filter(item => item._id !== product._id)
      ) 
    } else {
      setProducts(
        products.map(item => item._id === product._id ? {...item, amount: item.amount - 1} : item)
      )
    }
  };

  const removeProduct = (product) => {
    setProducts(
      products.filter(item => item._id !== product._id)
    ) 
  };

  useEffect(() => {
    if(products) {
      localStorage.setItem('cart', JSON.stringify(products));
    }
  }, [products]);

  if(products !== null && products.length > 0) {
    itemsPrice = products.reduce((total, item) => total + (item.currentPrice * item.amount), 0);
  } else {
    return <div className='grid wide home__section__wrap mt-3 mb-3'>Không có sản phẩn nào, quay lại cửa hàng để mua sắm.
      <div>
        <Link to="/">
          <div className='payment__continue mt-5'>
            tiếp tục mua hàng
          </div>
        </Link>
      </div>
    </div>
  }

  return (
    <section className='grid wide home__section__wrap'>
      <table className="cart">
        <thead>
          <tr>
            <th>Ảnh sản phẩm</th>
            <th>Tên sản phẩm</th>
            <th>Đơn giá</th>
            <th>Số lượng</th>
            <th>Thành tiền</th>
            <th>Xóa</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 && (
            products.map(product => (
              <CartItem key={product._id} product={product} increase={increaseAmount} decrease={decreaseAmount} remove={removeProduct} />
            ))
          )}
        </tbody>
      </table>

      <div className='payment'>
        <Link to="/">
          <div className='payment__continue'>
            tiếp tục mua hàng
          </div>
        </Link>
        <div className='payment__right'>
          <div className='payment__total'>
            <div className='left'>Tổng tiền thanh toán</div>
            <div className='right'>{formatPrice(itemsPrice)}</div>
          </div>
          <Link to="/payment">
            <div className='payment__proceed'>
              <a>tiến hành thanh toán</a>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
};

export default Cart;