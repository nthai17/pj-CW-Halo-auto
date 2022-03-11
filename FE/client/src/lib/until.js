export const formatPrice = (price) => {
    const priceString = price.toString()
    const resPrice = priceString.split('').reverse()
    if (resPrice.length > 3) {
        let arr = []
        switch (priceString.length) {
            case 4:
                arr = [3]
                break
            case 7:
                arr = [3, 7]
                break
            case 10:
                arr = [3, 7, 10]
                break
            case 13:
                arr = [3, 7, 10, 13]
                break
            default:
                arr = [3, 7, 10, 13, 17]
                break;
        }
        priceString.split('').reverse().forEach((t,index) => {
            if ([3,6,9].includes(index)) {
                if (index === 6) {resPrice.splice(index + 1, 0, '.')}
                else if (index === 9) {resPrice.splice(index + 2, 0, '.')}
                else if (index === 12) {resPrice.splice(index + 3, 0, '.')}
                else {resPrice.splice(index, 0, '.')}
            }
        })
        return `${resPrice.reverse().join('')}đ`
    } else {
        return `${price}đ`
    }
}
