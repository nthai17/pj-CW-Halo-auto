import './index.scss'
import ProductItem from '../../products/ProductItem'
import { Carousel } from '@trendyol-js/react-carousel'

function HomeSection(props) {
    const { list, leftImage, headerText } = props
    console.log(list)
    return ( 
        <section className="home__section">
            <div className='home__section__header flex alignItem-center'>
                <i className="fa-solid fa-angles-right"></i>
                <h1>{headerText}</h1>
            </div>
            <div className='home__section__content flex alignItem-center justify-center'>
                <a className='home__section__leftImgage'>
                    <img className='home__section__leftImgage__img' src={leftImage}/>
                </a>
                <div className='home__section__listDemo'>
                    <Carousel>
                        {
                            list.length 
                            ? list.map(item => <ProductItem data={item} key={item.id}/>)
                            : <Loading/>
                        }
                    </Carousel>
                </div>    
            </div>
        </section>
    );
}

export default HomeSection;