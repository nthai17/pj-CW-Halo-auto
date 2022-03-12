import { Link } from 'react-router-dom';
import './index.scss';

const Policy = ({ policy }) => {
  return (
    <div className='w-25 policy d-flex align-items-center'>
      <div className='policy__imgContainer'>
        <Link to='/'>
          <img src={policy.imgSrc} alt='policy-img'></img>
        </Link>
      </div>
      <div className='policy__text'>
        <h5>{policy.title}</h5>
        <p>{policy.subTitle}</p>
      </div>
    </div>
  )
};

export default Policy;