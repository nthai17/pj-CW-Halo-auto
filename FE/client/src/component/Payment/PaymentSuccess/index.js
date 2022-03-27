import { Link } from "react-router-dom";
import './index.scss';

const PaymentSuccess = () => {
  return (
    <div className='grid wide home__section__wrap'>
      <div className="payment-success">
        <div className="payment-success__wrapper">
          <i className="fa-solid fa-circle-check"></i>
          <h3>Order placed successfully!</h3>
          <Link to="/">
          <div className='payment__continue mt-5'>
            tiếp tục mua hàng
          </div>
          </Link>
        </div>
      </div>
    </div>
  )
};

export default PaymentSuccess;