import './index.scss';
import { Link } from 'react-router-dom';

const BreadCrumb = ({ items, last }) => {
  return (
    <div className='breadcrumb-img'>
      <img src='https://bizweb.dktcdn.net/100/364/158/themes/802198/assets/bg-bcrum.jpg?1638764971580' alt='breadcrumb-img'></img>
      <div className='breadcrumb__container'>
        <h3>{last}</h3>
        <ul className="breadcrumb">
          {items.map((item, index) => {
            return (
              <li className="breadcrumb__item" key={index}>
                <Link to={item.path} className="breadcrumb__link">{item.text}</Link>
                <i className="fa-solid fa-angle-right"></i>
              </li>
            )
          })}
          {last ? <span className="breadcrumb__link--active">{last}</span> : null}
        </ul>
      </div>
    </div>
  )
};

export default BreadCrumb;
