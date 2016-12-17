import React from 'react';

class OperateButton extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'OperateButton';
    }

    componentDidMount() {
     	const { store } = this.context;
     	this.unsubscribe = store.subscribe(()=>{
     		this.forceUpdate();
     	});
    }

    bindClick = ()=>{
    	let { operationActions,operateText } = this.props;
    	const { store } = this.context;
    	const state = store.getState();
    	let number = parseFloat(state.result);
    	switch(operateText){
    		case 'C':
    			operationActions.clearResult();
    			break;
    		case '+/-':
    			operationActions.inverse(number);
    			break;
    		case '%':
    			operationActions.percent(number);
    			break;
    		case '÷':
    			operationActions.divide();
    			break;
    		case '×':
    			operationActions.multiply();
    			break;
    		case '-':
    			operationActions.subtract();
    			break;
    		case '+':
    			operationActions.add();
    			break;
    		case '=':
				operationActions.equal();
				break;
    	}
    }

    render() {
    	let { className,operateText } = this.props;
        return <a href="javascript:;" className={className} onClick={this.bindClick}>{operateText}</a>;
    }
}

OperateButton.contextTypes = {
	store:React.PropTypes.object
}

export default OperateButton;
