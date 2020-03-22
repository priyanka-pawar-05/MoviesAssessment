import { combineReducers } from 'redux';
import metadata from './metadata'
import filter from './filter'
import poster from './poster'

export default combineReducers({
 metadata,
 filter,
 poster
});