import './index.scss';
import { formatPrice } from '../../../lib/until';

const CartItem = ({ product, increase, decrease, remove }) => {

  return (
    <tr className="cart-item">
      <td className='cart-item__img'>
        <img src={product.imgSrc} alt="cart-item"></img>
      </td>
      <td>
        {product.name}
      </td>
      <td className='cart-item__price'>
        {formatPrice(product.currentPrice)}
      </td>
      <td>
        <div className='cart-item__amount'>
          <a onClick={() => decrease(product)}>-</a>
          <span>{product.amount}</span>
          <a onClick={() => increase(product)}>+</a>
        </div>
      </td>
      <td className='cart-item__total'>
        {formatPrice(product.amount * product.currentPrice)}
      </td>
      <td>
        <a onClick={() => remove(product)}><i className="fa-solid fa-trash-can"></i></a>
      </td>
    </tr>
  )
};

export default CartItem;