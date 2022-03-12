import './index.scss'
import NewsItem from './newsItem';

function NewsSection({list}) {
    return ( 
        <div className="home__news">
            <div className='home__news__header'>
                <h1>TIN TỨC</h1>
            </div>
            <div className='home__news__list flex'>
                {list.length && list.map(item => <NewsItem data={item} key={item.id}/>)}
            </div>
        </div>
    );
}

export default NewsSection;
