import './index.scss'
import ProductItem from '../../products/ProductItem'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../../css/base.scss';

function HomeSection(props) {
    // console.log(props)
    const { list, leftImage, headerText, category } = props
    const setting = {
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        dots: false,
        arrows: true
    };

    return ( 
        <section className="home__section">
            <div className='home__section__header flex alignItem-center'>
                <i className="fa-solid fa-angles-right"></i>
                <h1>{headerText}</h1>
            </div>
            <div className='home__section__content flex alignItem-start justify-center background-white'>
                <a className='home__section__leftImgage'>
                    <img className='home__section__leftImgage__img' src={leftImage}/>
                </a>
                <div className='home__section__listDemo'>
                    {list.length &&
                        <Slider {...setting}>
                            {list.map(item => <ProductItem category={category} data={item} key={item.id}/>)}
                        </Slider>
                    }
                </div>    
            </div>
        </section>
    );
}

export default HomeSection;
