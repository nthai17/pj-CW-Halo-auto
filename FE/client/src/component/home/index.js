import HomeSection from './HomeSection'
import NewsSection from './News'
import { fakeData, newsList, topBranchsList } from '../../lib/const'
import TopBranchs from './TopBranchs'

const Home = () => {
    const { tire, accessory, smartDivice } = fakeData
    return (
        <div className='home'>
            {/* Giang : slide + search, danh mục sản phẩm, sản phẩm giảm giá, banner */}
            {/* Giang code slide + search ở đây */}

            {/* Thái : Lốp bánh xe, phụ kiện, thiết bị thông minh, tin tức, top thương hiệu */}
            <div className='grid wide home__section__wrap'>
                {/* giang code danh mục sản phẩm, sản phẩm giảm giá, banner ở đây -> mỗi phần 1 section*/}
                <HomeSection list={tire.listPreview} leftImage={tire.bannerSrc} headerText='LỐP BÁNH XE'/>
                <HomeSection list={accessory.listPreview} leftImage={accessory.bannerSrc} headerText='PHỤ KIỆN'/>
                <HomeSection list={smartDivice.listPreview} leftImage={smartDivice.bannerSrc} headerText='THIẾT BỊ THÔNG MINH'/>  
                <NewsSection list={newsList}/>
                <TopBranchs list={topBranchsList} headerText='TOP THƯƠNG HIỆU'/>  
            </div>
        </div>
    )
}

export default Home;
