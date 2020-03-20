import { initialData } from '../utils/transformer';
import actions from '../actions/index';

export default (state = initialData.filters, action) => {               //updating state of data based on Filter type
    switch (action.type) {
        case actions.UPDATE_FILTER:
            return state.map(item => {
                item.active = false
                if (item.valueToOrderBy === action.payload.filterOption) item.active = true
                return item
            })
        default:
            return state
    }
}