import "./index.scss"

const Pagination = ({list, currentPage, onClick} ) => {
    const number = Math.ceil(list.length/16)
    // console.log(currentPage)
    const arr = []
    for(let i = 1; i <= number; i++) {
        arr.push(i)
    }
    // console.log(arr)
    return (
    <div className="pagination">
        {arr.map((item, index) => 
         <div 
            key={index}
            onClick={ () => onClick(item)}
            className={currentPage === index+1 ? "paginationItem active " : "paginationItem"}>{index+1}</div>
        )}
    </div>
    )
}

export default Pagination

