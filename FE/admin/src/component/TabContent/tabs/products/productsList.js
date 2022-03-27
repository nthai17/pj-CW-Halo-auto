import './productsList.scss'
import ProductItem from './ProductItem';

function ProductsList({list, onClickEdit, onClickDelete, onClickView}) {
    return ( 
        <div className='admin__products__list'>
            <div className='admin__products__list__inner'>
                {
                    list && list.length ?
                    list.map(item => {
                        return (
                            <ProductItem 
                                data={item} 
                                key={item._id} 
                                onClickEdit={onClickEdit}
                                onClickDelete={onClickDelete}
                                onClickView={onClickView}
                            />
                        )
                    })
                    : <div className='admin__products__list__inner__massageNoItem'>Loading...</div>
                }
            </div>
        </div>
    );
}

export default ProductsList;
