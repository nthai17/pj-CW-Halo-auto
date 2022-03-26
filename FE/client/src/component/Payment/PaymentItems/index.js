import './index.scss';
import { formatPrice } from '../../../lib/until';

const PaymentItem = ({ item }) => {
  return (
    <div className="payment-item d-flex mb-3">
      <div className="payment-item__wrapper col-lg-8 d-flex align-items-center">
        <div className="payment-item__img me-5">
          <img src={item.imgSrc}></img>
        </div>
        <div className="payment-item__name">
          {item.name}
        </div>
      </div>
      <div className="payment-item__price col-lg-4 d-flex justify-content-end">
        {formatPrice(item.currentPrice * item.amount)}
      </div>
    </div>
  )
};

export default PaymentItem;