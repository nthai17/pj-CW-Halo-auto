import { Link } from "react-router-dom";
import './index.scss';

const Category = ({ category }) => {
  console.log(category)
  return (
    <div className="category">
      <Link to="/">
        <img src={category.imgSrc} alt="cat-img"></img>
      </Link>
      <div className="category__title">
        {category.title}
      </div>
    </div>
  )
};

export default Category;