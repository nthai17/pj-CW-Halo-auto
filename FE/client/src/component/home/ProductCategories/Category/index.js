import { Link, useNavigate } from "react-router-dom";
import './index.scss';

const Category = ({ category }) => {
  const navigate = useNavigate()

  return (
    <div className="category-g">
      <Link to="/products">
        <img src={category.imgSrc} alt="cat-img"></img>
      </Link>
      <div className="category-g__title" onClick={() => navigate('/products')}>
        {category.title}
      </div>
    </div>
  )
};

export default Category;