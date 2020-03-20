import { initialData, sortByType } from '../utils/transformer'
import actions from '../actions/index';

export default (state = initialData.movies, action) => {          //updating state of movies poster based on filter type
    switch (action.type) {
        case actions.UPDATE_FILTER:
            return sortByType([...state], action.payload.filterOption)
        default:
            return state
    }
}