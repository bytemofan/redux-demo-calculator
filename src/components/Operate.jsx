import React from 'react';
import './Operate.scss';
import NumberButton from './NumberButton';
import OperateButton from './OperateButton';

class Operate extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Operate';
    }

    render() {
    	let props = this.props;
        return <div className="opeartion-body">
	        <div className="table-tr">
		        <OperateButton className="line-one" operateText="C" {...props}/>
		        <OperateButton className="line-one" operateText="+/-" {...props}/>
		        <OperateButton className="line-one" operateText="%" {...props}/>
		        <OperateButton className="line-one" operateText="÷" {...props}/>
	        </div>
	        <div className="table-tr">
		        <NumberButton {...props} number="7"/>
		        <NumberButton {...props} number="8"/>
		        <NumberButton {...props} number="9"/>
		        <OperateButton operateText="×" {...props}/>
	        </div>
	        <div className="table-tr">
		        <NumberButton {...props} number="4"/>
		        <NumberButton {...props} number="5"/>
		        <NumberButton {...props} number="6"/>
		        <OperateButton operateText="-" {...props}/>
	        </div>
	        <div className="table-tr">
		        <NumberButton {...props} number="1"/>
		        <NumberButton {...props} number="2"/>
		        <NumberButton {...props} number="3"/>
		        <OperateButton operateText="+" {...props}/>
	        </div>
	        <div className="table-tr">
		        <NumberButton {...props} number="0"/>
		        <NumberButton {...props} number="00"/>
		        <NumberButton {...props} number="."/>
		        <OperateButton operateText="=" {...props}/>
	        </div>
        </div>;
    }
}

export default Operate;
