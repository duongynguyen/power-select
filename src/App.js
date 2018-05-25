import React, { Component } from 'react';
import './App.css';
import { TypeAhead } from 'react-power-select';
import 'react-power-select/dist/react-power-select.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFramework: 'React',
            frameworks : ['React', 'Ember', 'Angular', 'Vue', 'Preact', 'Inferno']
        };
    }

    handleChange = ({ option }) => {
        this.setState({ selectedFramework: option });
    };

    render() {
        return (
            <div className="App">
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <div className="demo">
                            <h3>Plain Array</h3>
                            <TypeAhead
                                options={this.state.frameworks}
                                selected={this.state.selectedFramework}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
