import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { numberToDo } from '../actions/number';
import * as operationActionCreator from '../actions/operation';
import Operate from '../components/Operate';

const mapStateToProps = (state)=>{
	/*console.log('operation js')
	console.log(state)*/
	return {
		result:state.result
	}
};

const mapDispatchToProps = (dispatch,ownProps)=>({
	onNumberClick:bindActionCreators(numberToDo,dispatch),
	operationActions:bindActionCreators(operationActionCreator,dispatch)
});	

const Operation = connect(
	mapStateToProps,
	mapDispatchToProps
)(Operate);

export default Operation;
