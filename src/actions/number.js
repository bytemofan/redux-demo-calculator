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

export const numberToDo = (text)=>{
	switch(text){
		case '0':return{
			type:NUM_ONE_ZERO,
			text:text
		}
		case '00':return{
			type:NUM_TWO_ZERO,
			text:text
		}
		case '1':return{
			type:NUM_ONE,
			text:text
		}
		case '2':return{
			type:NUM_TWO,
			text:text
		}
		case '3':return{
			type:NUM_THREE,
			text:text
		}
		case '4':return{
			type:NUM_FOUR,
			text:text
		}
		case '5':return{
			type:NUM_FIVE,
			text:text
		}
		case '6':return{
			type:NUM_SIX,
			text:text
		}
		case '7':return{
			type:NUM_SEVEN,
			text:text
		}
		case '8':return{
			type:NUM_EIGHT,
			text:text
		}
		case '9':return{
			type:NUM_NINE,
			text:text
		}
		case '.':return{
			type:NUM_DOT,
			text:text
		}
	}
}