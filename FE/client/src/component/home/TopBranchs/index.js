import BranchImgItem from './branchItem'
import './index.scss'

function TopBranchs({headerText, list}) {
    return ( 
        <div className="home__topBranchs">
            <div className='home__section__header flex alignItem-center'>
                <i className="fa-solid fa-angles-right"></i>
                <h1>{headerText}</h1>
            </div>
            <div className="home__topBranchs__list flex">
                {list.length && list.map(item => <BranchImgItem src={item.imgSrc} name={item.name} key={item.id}/>)}
            </div>
        </div>
    );
}

export default TopBranchs;
