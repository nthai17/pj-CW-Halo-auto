import './index.scss';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Tab = ({ info }) => {
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    axios.get('https://haluauto.herokuapp.com/product').then(res => {
      setProduct(res.data.listProduct.find(item => item._id === id));
    });
  }, []);

  console.log(product);

  return (
    <div className="tab">
      {product && info === 'Infomation' ? <p>{product.desc}</p>
      : product && info === 'Policy' ? <p>{product.policy}</p>
      : product && info === 'Evaluation' ? <p>{product.eval}</p>
      : <p>Hệ thống đang cập nhật</p>        
      }
    </div>
  )
};

export default Tab;