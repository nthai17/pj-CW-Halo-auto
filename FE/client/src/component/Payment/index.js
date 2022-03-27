import PaymentItem from "./PaymentItems";
import { formatPrice } from '../../lib/until';
import './index.scss';
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();
  const paymentItems = JSON.parse(localStorage.getItem('cart'));
  let totalPayment;

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [nameErr, setNameErr] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [phoneNumErr, setPhoneNumErr] = useState('');
  const [addressErr, setAddErr] = useState('');
  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const addressRef = useRef(null);

  if(paymentItems && paymentItems.length > 0) {
    totalPayment = paymentItems.reduce((total, item) => total + (item.currentPrice * item.amount), 0);
  }

  const isEmail = (email) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  };

  const isEmailValid = (email) => {
    if (email === "") {
      emailRef.current.className = 'form__wrapper error';
      setEmailErr('User email cannot be blank');
    } else if (!isEmail(email)) {
      emailRef.current.className = 'form__wrapper error';
      setEmailErr('User email is not valid');
    } else {
      emailRef.current.className = 'form__wrapper success';
    };
  }

  const isNameValid = (name) => {
    if (name === "") {
      nameRef.current.className = 'form__wrapper error';
      setNameErr('User name cannot be blank');
    } else {
      nameRef.current.className = 'form__wrapper success';
    };
  };

  const isPhoneNumValid = (phoneNum) => {
    if (phoneNum === "") {
      phoneRef.current.className = 'form__wrapper error';
      setPhoneNumErr('User phone number cannot be blank');
    } else if (isNaN(+phoneNum)) {  
      phoneRef.current.className = 'form__wrapper error';
      setPhoneNumErr('User phone number has space or is not valid number');
    } else {
      phoneRef.current.className = 'form__wrapper success';
    };
  };

  const isAddressValid = (address) => {
    if (address === "") {
      addressRef.current.className = 'form__wrapper error';
      setAddErr('User address cannot be blank');
    } else {
      addressRef.current.className = 'form__wrapper success';
    };
  };

  const validateUser = (userEmail, userName, userPhoneNumber, userAddress) => {
    isEmailValid(userEmail);
    isNameValid(userName);
    isPhoneNumValid(userPhoneNumber);
    isAddressValid(userAddress);

    if(nameRef.current.className === 'form__wrapper success' && emailRef.current.className === 'form__wrapper success' && phoneRef.current.className === 'form__wrapper success' && addressRef.current.className === 'form__wrapper success') {
      const idList = paymentItems.map(item => { return {nameProduct: item.name, quantity: item.amount}});
      const newOrder = {
        email: userEmail,
        address: userAddress,
        phone: userPhoneNumber,
        name: userName,
        listProducts: idList,
        payment: "COD",
        note: "test"
      }
      axios.post(process.env.REACT_APP_API_ORDER, newOrder)
      .then((res) => {
        localStorage.removeItem('cart');
        navigate('/checkout');
      })
    }
  };

  const handleInput = () => {
    const userEmail = email.trim();
    const userName = name.trim();
    const userPhoneNumber = phoneNumber.trim();
    const userAddress = address.trim();

    validateUser(userEmail, userName, userPhoneNumber, userAddress);
  };

  return (
    <div className='grid wide home__section__wrap'>
      <div className="d-flex payment mt-5 mb-5">
        <div className="col-lg-6">
          <div className='home__section__header flex alignItem-center'>
            <h1>THÔNG TIN NGƯỜI NHẬN</h1>
          </div>
          <form className="form mt-3">
            <div className="form__wrapper" ref={emailRef}>
              <input 
                className="form__input" 
                type='email' id="email" 
                placeholder=" "
                value={email} onChange={(e) => setEmail(e.target.value)}
                required
                ></input>
                <i className="fa-solid fa-circle-check"></i>
                <i className="fa-solid fa-circle-exclamation"></i>
                <small>{emailErr}</small>
              <label className="form__label" for="email">Email</label>
            </div>
            <div className="form__wrapper" ref={nameRef}>
              <input 
                className="form__input" 
                type='text' id="name" 
                placeholder=" "
                value={name} onChange={(e) => setName(e.target.value)}
                required
                ></input>
                <i className="fa-solid fa-circle-check"></i>
                <i className="fa-solid fa-circle-exclamation"></i>
                <small>{nameErr}</small>
              <label className="form__label" for="name">Họ và tên</label>
            </div>
            <div className="form__wrapper" ref={phoneRef}>
              <input 
                className="form__input" 
                type='text' id="phone-number" 
                placeholder=" "
                value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}
                required
                ></input>
                <i className="fa-solid fa-circle-check"></i>
                <i className="fa-solid fa-circle-exclamation"></i>
                <small>{phoneNumErr}</small>
              <label className="form__label" for="phone-number">Số điện thoại</label>
            </div>
            <div className="form__wrapper" ref={addressRef}>
              <input 
                className="form__input" 
                type='text' id="address" 
                placeholder=" "
                value={address} onChange={(e) => setAddress(e.target.value)}
                required
                ></input>
                <i className="fa-solid fa-circle-check"></i>
                <i className="fa-solid fa-circle-exclamation"></i>
                <small>{addressErr}</small>
              <label className="form__label" for="address">Địa chỉ</label>
            </div>
          </form>
        </div>
        <div className="col-lg-6">
          <div className='home__section__header flex alignItem-center'>
            <h1>ĐƠN HÀNG</h1>
          </div>
          <div className="mt-3 mb-3">
            {paymentItems && (
              paymentItems.map((item, index) => <PaymentItem item={item} key={index}/>)
            )}
          </div>
          <div className="payment-total">
            <h5>Tổng cộng</h5>
            <span>{formatPrice(totalPayment)}</span>
          </div>
          <div className="payment-confirm">
            <Link to='/cart'><span><i className="fa-solid fa-angle-left"></i> Quay về giỏ hàng</span></Link>
            <button onClick={handleInput}>Đặt hàng</button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Payment;