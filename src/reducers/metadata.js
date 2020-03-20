import actions from '../actions/index';

export default (state = {}, action) => {                   //updating state of movies metadata based on selection
    switch (action.type) {
        case actions.UPDATE_METADATA:
            return action.payload;
        default:
            return state
    }
}