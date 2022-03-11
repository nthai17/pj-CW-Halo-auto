import HomeSection from './HomeSection'

const Home = () => {

    const fakeData = {
        tire: {
            bannerSrc: 'https://bizweb.dktcdn.net/100/364/158/themes/802198/assets/section_product_images1.png?1646905627969',
            listPreview:
                [
                    {
                        id: 1,
                        name: 'LỐP XE WARRIOR HUB',
                        currentPrice: 1500000,
                        oldPrice: 1800000,
                        imgSrc: 'https://bizweb.dktcdn.net/thumb/large/100/364/158/products/lopxe3.jpg?v=1567905623343'
                    },
                    {
                        id: 2,
                        name: 'LỐP XE WARRIOR HUB',
                        currentPrice: 1500000,
                        oldPrice: 1800000,
                        imgSrc: 'https://bizweb.dktcdn.net/thumb/large/100/364/158/products/lopxe3.jpg?v=1567905623343'
                    },
                    {
                        id: 3,
                        name: 'LỐP XE WARRIOR HUB',
                        currentPrice: 1500000,
                        oldPrice: 1800000,
                        imgSrc: 'https://bizweb.dktcdn.net/thumb/large/100/364/158/products/lopxe3.jpg?v=1567905623343'
                    },
                    {
                        id: 4,
                        name: 'LỐP XE WARRIOR HUB',
                        currentPrice: 1500000,
                        oldPrice: 1800000,
                        imgSrc: 'https://bizweb.dktcdn.net/thumb/large/100/364/158/products/lopxe3.jpg?v=1567905623343'
                    },
                    {
                        id: 5,
                        name: 'LỐP XE WARRIOR HUB',
                        currentPrice: 1500000,
                        oldPrice: 1800000,
                        imgSrc: 'https://bizweb.dktcdn.net/thumb/large/100/364/158/products/lopxe3.jpg?v=1567905623343'
                    }
            ]
        },
    }
    const {tire} = fakeData
    return (
        <div className='home'>
            {/* Giang : slide + search, danh mục sản phẩm, sản phẩm giảm giá, banner */}
            {/* Giang code slide + search ở đây */}

            {/* Thái : Lốp bánh xe, phụ kiện, thiết bị thông minh, tin tức, top thương hiệu */}
            <div className='grid wide home__section'>
                {/* giang code danh mục sản phẩm, sản phẩm giảm giá, banner ở đây -> mỗi phần 1 section*/}
                <section className="home__section__tire">
                    <HomeSection list={tire.listPreview} leftImage={tire.bannerSrc} headerText='LỐP BÁNH XE'/>
                </section>    
            </div>
        </div>
    )
}

export default Home;
