import './index.scss';

const Tab = ({ info }) => {
  return (
    <div className="tab">
      {info ? <p>Product {info}</p> : <p>Hệ thống đang cập nhật</p>}
    </div>
  )
};

export default Tab;