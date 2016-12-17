import React from 'react';

import Result from './Result';
import Operation from '../containers/Operation';

import './App.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'App';
    }
    render() {
        return (
        	<div className="calculator">
        		<Result/>
        		<Operation/>
        	</div>
        );
    }
}

export default App;
