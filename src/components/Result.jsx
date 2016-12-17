import React from 'react';
import { connect } from 'react-redux';

import './Result.scss';

class Result extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Result';
    }
    componentDidMount() {
     	const { store } = this.context;
     	this.unsubscribe = store.subscribe(()=>{
     		this.forceUpdate();
     	});
    }
    render() {
    	const props = this.props;
    	const { store } = this.context;
    	const state = store.getState();
    	//console.log(state);

        return <div className="result-body">{state.result}</div>;
    }
}

Result.contextTypes = {
	store:React.PropTypes.object
}

const mapStateToProps = (state)=>{
	/*console.log('result js')
	console.log(state)*/
	return {
		result:state.result
	}
}

Result = connect(mapStateToProps)(Result);

export default Result;
