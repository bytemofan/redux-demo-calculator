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
import {
	CLEAR_RESULT,
	INVERSE,
	PERCENT,
	DIVIDE,
	MULTIPLY,
	SUBTRACT,
	ADD,
	EQUAL
} from '../constants/operation';

const initialState = {
	result:'0'
}

const divide = (prevNum,nextNum) => {
	return nextNum != 0 ? ''+(prevNum / nextNum) : 'error';
}

const multiply = (prevNum,nextNum) => {
	return ''+(nextNum * prevNum);
}

const subtract = (prevNum,nextNum) =>{
	return ''+(prevNum - nextNum);
}

const add = (prevNum,nextNum) => {
	return ''+(nextNum + prevNum);
}

const reducers = (state = initialState ,action)=>{
	switch(action.type){
		case NUM_ONE_ZERO:
			if(state.result === '0' && state.isOperation && state.operateEqual){
				return assign(state,{
					nextNum:0,
					operateEqual:false,
					result:'0'
				});
			}else{
				return assign(state,{
					nextNum:parseFloat(state.result+action.text),
					result:parseFloat(state.result+action.text).toString()
				});
			}
		case NUM_TWO_ZERO:
			if(state.result === '0' && state.isOperation && state.operateEqual){
				return assign(state,{
					nextNum:0,
					operateEqual:false,
					result:'0'
				});
			}else{
				return assign(state,{
					nextNum: parseFloat(state.result+action.text),
					result: state.result+action.text
				});
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
			if(!state.isOperation && !state.operateEqual){
				return assign(state,{
					nextNum:parseFloat(state.result+action.text),
					result:parseFloat(state.result+action.text).toString()
				});
			}else{
				return assign(state,{
					nextNum:parseFloat(action.text),
					operateEqual:false,
					result:action.text
				});
			}
		case NUM_DOT:
			if(!state.isOperation && !state.operateEqual){		
				return assign(state,{
					nextNum:parseFloat(state.result+action.text),
					result:state.result+action.text
				});
			}else{
				return assign(state,{
					nextNum:parseFloat('0'+action.text),
					operateEqual:false,
					result:'0'+action.text
				});
			}
		case CLEAR_RESULT:
			return assign(state,{
				isOperation:false,
				nextNum:0,
				prevNum:0,
				result:action.result
			});
		case INVERSE:
			return assign(state,{
				isOperation:false,
				result:(()=>{
					if(action.number == 0)return '0';
					if(action.number>0) return '-'+action.number;
					if(action.number<0) return ''+(-(action.number));
				})()
			});
		case PERCENT:
			return assign(state,{
				isOperation:true,
				result:action.number>=0 ? ''+(action.number/100) : '0'
			});
		case DIVIDE:
			return assign(state,{
				isOperation:true,
				prevNum:parseFloat(state.result),
				operate:DIVIDE
			});
		case MULTIPLY:
			return assign(state,{
				isOperation:true,
				prevNum:parseFloat(state.result),
				operate:MULTIPLY
			});
		case SUBTRACT:
			return assign(state,{
				isOperation:true,
				prevNum:parseFloat(state.result),
				operate:SUBTRACT
			});
		case ADD:
			return assign(state,{
				isOperation:true,
				prevNum:parseFloat(state.result),
				operate:ADD
			})
		case EQUAL:
			switch(state.operate){
				case 'DIVIDE':return assign(state,{
						isOperation:false,
						operateEqual:true,
						result:divide(state.prevNum,state.nextNum)
					});
				case 'MULTIPLY':return assign(state,{
						isOperation:false,
						operateEqual:true,
						result:multiply(state.prevNum,state.nextNum)
					});
				case 'SUBTRACT':return assign(state,{
						isOperation:false,
						operateEqual:true,
						result:subtract(state.prevNum,state.nextNum)
					});
				case 'ADD':return assign(state,{
						isOperation:false,
						operateEqual:true,
						result:add(state.prevNum,state.nextNum)
					});
				default:return state;
			}
		default: return state;
	}
}

export default reducers;