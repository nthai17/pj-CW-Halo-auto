import BreadCrumb from './products/breadCrumb/breadcrumb'

function Navigation({path}) {
    const items = path.split('/')
    items.shift();
    const getItems = () => {
        return ['Trang chủ', items[0]]
    }
    const getName = () => {
        if (items.length > 2) {
            return items[2]
        }
    }
    return ( 
        <div className='breadcrumb-img'>
          <img src='https://bizweb.dktcdn.net/100/364/158/themes/802198/assets/bg-bcrum.jpg?1638764971580' alt='breadcrumb-img'></img>
          <div className='breadcrumb__container'>
            <h3>{getName()}</h3>
            <BreadCrumb items={getItems()}/>
          </div>
        </div>
    );
}

export default Navigation;
