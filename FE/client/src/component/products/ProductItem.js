const ProductItem = ({data}) => {

    return (
        <div className="product__item">
            <a>
                <div className="product__item__bg">
                    <img src={data.imageSrc}/>
                </div>
            </a>
        </div>
    )
}

export default ProductItem
