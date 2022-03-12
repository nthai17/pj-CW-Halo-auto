import {Link} from 'react-router-dom'

function NewsItem({data}) {
    return ( 
        <div className="home__news__item c-4">
            <Link className="home__news__item__thumb" to={`/news/${data.id}`}>
                <img src={data.imgSrc} alt={data.title}/>
            </Link>
            <p className='home__news__item__createAt'>{data.createAt}</p>
            <Link className='home__news__item__title' to={`/news/${data.id}`}>{data.title}</Link>
        </div>
    );
}

export default NewsItem;
