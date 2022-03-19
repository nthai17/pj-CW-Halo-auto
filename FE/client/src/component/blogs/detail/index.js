import './index.scss'
import { listBlogs } from '../../../lib/const'
import {Link, useParams} from 'react-router-dom'
import FormFormat from '../../FormFormat'

function BlogDetail() {
    const  { id } = useParams()
    const data = listBlogs.find(item => item.id == id)

    const sendComment = (formData) => {
        console.log(formData)
    }
    const defaultForm = {
        name: '',
        email: '',
        comment: ''
    }
    return ( 
        <div className='blog__detail'>
            <div className="grid wide">
                <div className="row">
                    <div className="blog__detail__content">
                        <h1 className='blog__detail__content__title'>{data.title}</h1>
                        <div className='blog__detail__content__author'>
                            <span><i>Đăng bởi <strong>{data.author}</strong> vào lúc {data.createAt}</i></span>
                        </div>
                        <div className='blog__detail__content__inner'>
                            <p className='blog__detail__content__inner__text'>{data.content}</p>
                            <div className='blog__detail__content__inner__img'>
                                <img src={data.imgSrc} alt='hinhanh'/>
                                <div>Ảnh: <i>Nissan</i></div>
                            </div>
                            <div className='blog__detail__content__inner__tags'>
                                Tags: {data.tags.map((item, index) => {
                                    return index == data.tags.length - 1 ? item : `${item} / `
                                })}
                            </div>
                        </div>
                        <div className='blog__detail__content__separate'></div>
                        <div className='blog__detail__content__comment'>
                            <FormFormat 
                                title='VIẾT BÌNH LUẬN CỦA BẠN:'
                                handleSubmit= {(formData) => sendComment(formData)}
                                defaultForm= {defaultForm}
                                hasTextArea={true}
                                textAreaIndexs={[2]}
                            />
                        </div>
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
    );
}

export default BlogDetail;
