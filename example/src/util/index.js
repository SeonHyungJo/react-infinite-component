import product from './item.json'

export const fetchData = (start, limit) => {
    return product.list.slice(start, start + limit)
}

