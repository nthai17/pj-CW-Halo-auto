import { useEffect, useState } from 'react';
import CartItem from './CartItem';
import './index.scss';
import { formatPrice } from '../../lib/until';
import { Link } from 'react-router-dom';

const Cart = () => {
  const productList = JSON.parse(localStorage.getItem('cart'));
  const [products, setProducts] = useState(productList);
  const itemsPrice = products.reduce((total, item) => total + (item.currentPrice * item.amount), 0);

  console.log(products);
  console.log(itemsPrice);

  const increaseAmount = (product) => {
    const existedProduct = products.find(item => item.id === product.id && item.name === product.name);
    if (existedProduct) {
      setProducts(
        products.map(item => item.id === product.id && item.name === product.name ? {...item, amount: item.amount + 1} : item)
      )
    }
  };

  const decreaseAmount = (product) => {
    const existedProduct = products.find(item => item.id === product.id && item.name === product.name);
    if (existedProduct.amount === 1) {
      setProducts(
        products.filter(item => item.id !== product.id && item.name !== product.name)
      ) 
    } else {
      setProducts(
        products.map(item => item.id === product.id && item.name === product.name ? {...item, amount: item.amount - 1} : item)
      )
    }
  };

  const removeProduct = (product) => {
    setProducts(
      products.filter(item => item.id !== product.id && item.name !== product.name)
    ) 
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(products));
  }, [products]);

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
              <CartItem product={product} increase={increaseAmount} decrease={decreaseAmount} remove={removeProduct} />
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
          <div className='payment__proceed'>
            <a>tiến hành thanh toán</a>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Cart;