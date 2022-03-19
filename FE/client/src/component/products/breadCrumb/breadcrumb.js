import './index.scss';

const BreadCrumb = ({ items, last }) => {
  return (
    <ul className="breadcrumb">
      {items.map(item => {
        return (
          <li className="breadcrumb__item">
             {items.length === 1 
              ? <span className="breadcrumb__link">{item}</span>
              : <a href="#" className="breadcrumb__link">{item}</a>}
              <i class="fa-solid fa-angle-right"></i>
          </li>
        )
      })}
      {last ? <span className="breadcrumb__link--active">{last}</span> : null}
    </ul>
  )
};

export default BreadCrumb;