import assign from 'object-assign';
import {
	NUM_ONE_ZERO,
	NUM_TWO_ZERO,
	NUM_ONE,
	NUM_TWO,
	NUM_THREE,
	NUM_FOUR,
	NUM_FIVE,
	NUM_SIX,
	NUM_SEVEN,
	NUM_EIGHT,
	NUM_NINE,
	NUM_DOT
} from '../constants/number';

const initialState = {
	result:'0'
}

const numberTodos = (state = initialState ,action)=>{
	switch(action.type){
		case NUM_ONE_ZERO:
			if(state.result === '0' && state.isOperation){
				return assign(state,{
					nextNum:0,
					result:'0'
				});
			}else{
				if(!state.isOperation){
					return assign(state,{
						nextNum:parseFloat(state.result+action.text),
						result:parseFloat(state.result+action.text).toString()
					});
				}else{
					return assign(state,{
						nextNum:parseFloat(action.text),
						result:action.text
					});
				}
			}
		case NUM_TWO_ZERO:
			if(state.result === '0' && state.isOperation){
				return assign(state,{
					nextNum:0,
					result:'0'
				});
			}else{
				if(!state.isOperation){
					return assign(state,{
						nextNum:parseFloat(state.result+action.text),
						result:parseFloat(state.result+action.text).toString()
					});
				}else{
					return assign(state,{
						nextNum:parseFloat(action.text),
						result:action.text
					});
				}
			}
		case NUM_ONE:
		case NUM_TWO:
		case NUM_THREE:
		case NUM_FOUR:
		case NUM_FIVE:
		case NUM_SIX:
		case NUM_SEVEN:
		case NUM_EIGHT:
		case NUM_NINE:
			if(!state.isOperation){
				return assign(state,{
					nextNum:parseFloat(state.result+action.text),
					result:parseFloat(state.result+action.text).toString()
				});
			}else{
				return assign(state,{
					nextNum:parseFloat(action.text),
					result:action.text
				});
			}
		default: return state;
	}
}

export default numberTodos;