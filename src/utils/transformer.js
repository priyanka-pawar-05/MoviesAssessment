import moviesdata from '../feed/moviesdata.json'

export const initialData = {
    filters: moviesdata.components.filter(item => item.type === "order-select").pop().items,
    movies: moviesdata.components.filter(item => item.type === "movie-list").pop().items,
}
export const sortByType = (moviesdata, type) => {             //sorting data based on filter type
    return moviesdata.sort((a, b) => a[type] - b[type]);
}