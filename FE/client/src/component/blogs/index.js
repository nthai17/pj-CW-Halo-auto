import './index.scss'
import { listBlogs } from '../../lib/const'
import BlogItem from './blogItem'
import {Link} from 'react-router-dom'
import BreadCrumb from '../products/breadCrumb/breadcrumb'

function Blogs() {
    return ( 
        <>
        <BreadCrumb items={[{text: "Trang chủ", path:'/'}]} last='Tin tức'/>
        <div className="blogs">
            <div className="grid wide">
                <div className="row">
                    <div className="blogs__list">
                        {listBlogs && listBlogs.map(item => <BlogItem data={item} key={item.id}/>)}
                    </div>
                    <div className="blogs__similar">
                        <div className='blogs__similar__header'>
                            <div className='blogs__similar__header__icon'></div>
                            <div className='blogs__similar__header__text'>
                                BÀI VIẾT LIÊN QUAN
                            </div>
                        </div>
                        <div className='blogs__similar__list'>
                            {listBlogs.map(item => {
                                return (
                                <div className='blogs__similar__item' key={item.id}>
                                    <Link to={`/blog/detail/${item.id}`}>{item.title}</Link>
                                </div>)
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Blogs;
