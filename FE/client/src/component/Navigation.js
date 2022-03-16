import {Link} from "react-router-dom"
import "./Navigation.css"



function Navigation() {
    return ( 
        <div className="navigation">
             <div className="title-page">tất cả sản phẩm</div>
             <div className="nav-link">
                 <Link className="home" to={`/`}>Trang chủ <i class="fa fa-chevron-right" aria-hidden="true"></i></Link>
                 <p>
                     tất cả sản phẩm
                 </p>
             </div>
        </div>
    );
}

export default Navigation;
