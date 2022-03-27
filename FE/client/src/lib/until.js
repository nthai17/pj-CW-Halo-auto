export const formatPrice = (price) => {
    const priceString = price?.toString()
    const resPrice = priceString?.split('').reverse() || []
    if (resPrice.length > 3) {
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
