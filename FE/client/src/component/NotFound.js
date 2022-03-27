import { Link } from 'react-router-dom'

function NotFount() {
    return ( 
        <div 
            style={
                {
                    textAlign: 'center', 
                    height: '300px', 
                    display: 'flex', 
                    alignItems: 'center',
                    justifyContent: 'center'
                }
        }
        >Page not found -
            <Link to='/' style={{marginLeft: '6px'}}>Quay về trang chủ</Link>
        </div>
    );
}

export default NotFount;
