import { combineReducers } from 'redux';
import numbers from './number';
import operations from './operation';

const reducer = combineReducers({
	numbers,
	operations
});

export default reducer;