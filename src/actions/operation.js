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

export const clearResult = ()=>({
	type:CLEAR_RESULT,
	result:'0',
});

export const inverse = (number)=>({
	type:INVERSE,
	number
});

export const percent = (number)=>({
	type:PERCENT,
	number
});

export const divide = ()=>({type:DIVIDE});

export const multiply = ()=>({type:MULTIPLY});

export const subtract = ()=>({type:SUBTRACT});

export const add = ()=>({type:ADD});

export const equal = ()=>({type:EQUAL});
