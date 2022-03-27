import { useState, useEffect } from 'react';
import './index.scss';
import SaleProduct from './SaleProduct';
import axios from "axios";

const DiscountProducts = ({ headerText }) => {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();
  const [listDiscout, setListDiscount] = useState([])

  let interval;

  const startTimer = () => {
    const countDownDate = new Date('March 30, 2022 00:00:00').getTime();
    
    interval = setInterval(() => {
      const presentTime = new Date().getTime();
      const distance = countDownDate - presentTime;

      const days = Math.floor((distance / (1000 * 60 * 60 * 24)));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if(distance < 0) {
        clearInterval(interval);
      } else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    axios.get('https://haluauto.herokuapp.com/product').then(res => setListDiscount(res.data.listProduct.slice(0, 4)));
    startTimer();
    return () => {
      clearInterval(interval);
    }
  }, []);

  return (
    <section className="home__section">
            <div className='home__section__header flex alignItem-center'>
                <i className="fa-solid fa-angles-right"></i>
                <h1>{headerText}</h1>
            </div>
            <div className='background-white mt10'>
              <div className='flex alignItem-start row wrapper'>
                <div className='countdown-timer col-md-2'>
                  <div className='countdown-timer__wrapper'>
                    <i className="fa-solid fa-clock-rotate-left"></i>
                    <div className='countdown-timer__days'>
                      <div className='countdown-timer__top'><span>{days}</span></div>
                      <div className='countdown-timer__bottom'><span>NGÀY</span></div>
                    </div>
                    <div className='countdown-timer__hours'>
                      <div className='countdown-timer__top'><span>{hours}</span></div>
                      <div className='countdown-timer__bottom'><span>GIỜ</span></div>
                    </div>
                    <div className='countdown-timer__minutes'>
                      <div className='countdown-timer__top'><span>{minutes}</span></div>
                      <div className='countdown-timer__bottom'><span>PHÚT</span></div>
                    </div>
                    <div className='countdown-timer__seconds'>
                      <div className='countdown-timer__top'><span>{seconds}</span></div>
                      <div className='countdown-timer__bottom'><span>GIÂY</span></div>
                    </div>
                  </div>
                </div>
                  <div className='discountProducts__container col-md-10'>
                    <div className='row'>
                      {listDiscout.length && 
                          listDiscout.map((item, index) => {
                            if (index < 4) {
                              return (
                                <div className='col-md-6' key={index} >
                                  <SaleProduct item={item} key={index} />
                                </div>
                              )
                            }
                          })
                      }
                    </div>
                  </div>
              </div>
            </div>
      <img className='discount__banner' src='https://bizweb.dktcdn.net/100/364/158/themes/802198/assets/section_home_banner.jpg?1646905627969' alt='banner'></img>
    </section>
  )
};

export default DiscountProducts;