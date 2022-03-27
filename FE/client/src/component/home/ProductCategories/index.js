import Category from "./Category";
import './index.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductCategories = ({ headerText, categories }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };

  return (
    <section className="home__section">
      <div className='home__section__header flex alignItem-center'>
          <i className="fa-solid fa-angles-right"></i>
          <h1>{headerText}</h1>
      </div>
      <div className="categories home__section__listDemo">
        {categories.length && 
            <Slider {...settings}>
              {categories.map((category, index) => <div className="category__wrapper"  key={index} ><Category category={category}/></div>)}
            </Slider>
        }
      </div>
    </section>
  )
};

export default ProductCategories;