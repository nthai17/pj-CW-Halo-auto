import HomeSection from './HomeSection'
import NewsSection from './News'
import TopBranchs from './TopBranchs'
import { categoriesImg, policies, newsList, topBranchsList, banner } from '../../lib/const'
import DiscountProducts from './DiscountProducts'
import ProductCategories from './ProductCategories'
import SearchSection from './SearchSection'
import PolicySection from './Policies'

const Home = () => {
    return (
        <div className='home'>
            <SearchSection />
            <PolicySection policies={policies} />
            {/* Giang : slide + search, danh mục sản phẩm, sản phẩm giảm giá, banner */}
            {/* Giang code slide + search ở đây */}

            {/* Thái : Lốp bánh xe, phụ kiện, thiết bị thông minh, tin tức, top thương hiệu */}
            <div className='grid wide home__section__wrap'>
                {/* giang code danh mục sản phẩm, sản phẩm giảm giá, banner ở đây -> mỗi phần 1 section*/}
                <ProductCategories categories={categoriesImg} headerText='DANH MỤC SẢN PHẨM'/>
                <DiscountProducts headerText='SẢN PHẨM ĐANG GIẢM GIÁ'/>
                <HomeSection category="tire" leftImage={banner.tire} headerText='LỐP BÁNH XE'/>
                <HomeSection category="accessory" leftImage={banner.accessory} headerText='PHỤ KIỆN'/>
                <HomeSection category="smartDevice" leftImage={banner.smartDevice} headerText='THIẾT BỊ THÔNG MINH'/>  
                <NewsSection list={newsList}/>
                <TopBranchs list={topBranchsList} headerText='TOP THƯƠNG HIỆU'/>  
            </div>
        </div>
    )
}

export default Home;
