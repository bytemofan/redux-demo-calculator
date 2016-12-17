import React from 'react';

class NumberButton extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'NumberButton';
    }

    bindClick = ()=>{
    	let { number,onNumberClick } = this.props;
    	onNumberClick(number)
    }

    render() {
        return <a href="javascript:;" onClick={this.bindClick}>{this.props.number}</a>;
    }
}

NumberButton.contextTypes = {
	store:React.PropTypes.object
}

export default NumberButton;
