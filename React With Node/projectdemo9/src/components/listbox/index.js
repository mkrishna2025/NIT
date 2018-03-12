import React from 'react';

export default class ListBox extends React.Component {
    render(){
        var options = this.props.options;
        return <select {...this.props}>
                <option value="none">Please Select {this.props.label}</option>
                {options.map(item => <option value={item.value}>{item.name}</option>)}
            </select>;
    }
}