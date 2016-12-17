import assign from 'object-assign';
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

const operations = (state = initialState,action)=>{
	switch(action.type){
		case CLEAR_RESULT:
			return assign(state,{
				isOperation:true,
				result:action.result
			});
		case INVERSE:
			return assign(state,{
				isOperation:true,
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
				result:action.prevNum != 0 ? ''+(action.nextNum / action.prevNum) : 'error'
			});
		case MULTIPLY:
			return assign(state,{
				isOperation:true,
				prevNum:parseFloat(state.result),
				result:''+(action.nextNum * action.prevNum)
			});
		case SUBTRACT:
			return assign(state,{
				isOperation:true,
				prevNum:parseFloat(state.result),
				result:''+(action.nextNum - action.prevNum)
			});
		case ADD:
			return assign(state,{
				isOperation:true,
				prevNum:parseFloat(state.result),
				result:''+(action.nextNum + action.prevNum)
			})
		case EQUAL:
			return assign(state,{
				isOperation:false,
				result:state.result
			});
		default: return state;
	}
}

export default operations;