import { Link } from "react-router-dom";

function BlogItem({data}) {
    return ( 
        <div className='blogs__list__item'>
            <div className="blogs__list__item__thumb">
                <Link to={`/blog/detail/${data.id}`}>
                    <img className="blogs__list__item__thumb__img" src={data.imgSrc} alt="thumb"/>
                </Link>
            </div>
            <div className="blogs__list__item__content">
                <Link to={`/blog/detail/${data.id}`}>{data.title}</Link>
                <p className="blogs__list__item__content__desc">{data.content}</p>
            </div>
            <div className="blogs__list__item__time">
                <div className="blogs__month">{`T${data.createAt.split('-')[1]}`}</div>
                <div className="blogs__date">{data.createAt.split('-')[2]}</div>
            </div>
        </div>
    );
}

export default BlogItem;
