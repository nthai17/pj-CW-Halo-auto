import './index.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fakeData } from '../../../lib/const';

const SearchSection = () => {
  const { categories } = fakeData;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <section>
      <div className="search-banner home__section">
        <Slider {...settings}>
          <div><img src="https://bizweb.dktcdn.net/100/364/158/themes/802198/assets/slider_1.jpg?1646905627969" alt='search-banner'></img></div>
          <div><img src="https://bizweb.dktcdn.net/100/364/158/themes/802198/assets/slider_2.jpg?1646905627969" alt='search-banner'></img></div>
        </Slider>
        <div className='search-form'>
          <div className='grid wide home__section search-form__container'>
            <div className='search-form__wrapper'>
              <form className='form'>
                <h1>tìm kiếm xe bạn thích</h1>
                <p>chúng tôi cung cấp hơn 120,000 phụ tùng ô tô các loại</p>
                <input type="text" placeholder='Nhập tên xe'></input>
                <select>
                  <option>Chọn danh mục</option>
                  {categories.length > 0 && categories.map((cat, index) => <option key={index}>{cat}</option>)}
                </select>
                <button>
                  <i class="fa-solid fa-magnifying-glass"></i>
                  <span>Tìm kiếm</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default SearchSection;