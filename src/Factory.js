import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addNode, addConnection, resetGraph} from './actions';

class Factory extends Component {

    state = {
        inputValue: '',
        from: '',
        to: '',
        rawTextData: ''
    }

    componentDidMount() {
        this.props.addNode('');
    }

    addNode = () => {
        this.props.addNode(this.state.inputValue);
        this.setState({inputValue: ''});
    }

    addEdge = () => {
        this.props.addConnection(this.state.from, this.state.to);
        this.setState({to: '', from: ''})
    }

    parseRawTextdata = () => {
        console.log("Raw data:", this.state.rawTextData);
        if (this.state.rawTextData === '') return;
        const newNodePairs = this.state.rawTextData.split(", ");
        newNodePairs.map(pair => {
            let firstNode, secondNode;
            let comma = pair.indexOf(",");
            firstNode = pair.substring(1, comma);
            secondNode = pair.substring(comma + 1, pair.length - 1);
            this.props.addNode(firstNode);
            this.props.addNode(secondNode);
            this.props.addConnection(firstNode, secondNode)
        })
    }

    onResetClick = () => {
        this.props.resetGraph();
        this.props.addNode('');
    }

    onExampleClick = () => {
        this.onResetClick();
        this.setState({rawTextData: "(1,2), (2,3), (4,5), (7,6), (3,7), (4,1), (5,6)"}, () => {
            this.parseRawTextdata();
        })
        
    }

    render() {
        
        return (
            <div style={{flex: 1}}>
                <h2 className="ui header center aligned">Graph Information</h2>
                <div className="ui input">
                
                <input type="text" placeholder="node" value={this.state.inputValue} onChange={(e) => this.setState({inputValue: e.target.value})}/>
                <button className="ui button blue" onClick={() => this.addNode()}>
                    Add node
                </button>
                </div>
                <div className="ui input">
                <input type="text" placeholder="A" value={this.state.from} onChange={e => this.setState({from: e.target.value})}/>
                <input type="text" placeholder="B" value={this.state.to} onChange={e => this.setState({to: e.target.value})}/>
                <button className="ui button blue" onClick={() => this.addEdge()}>Add edge</button>
                </div>
                <div className="ui input">
                <input placeholder="Insert graph data" onChange={e => this.setState({rawTextData: e.target.value})} value={this.state.rawTextData}/>
                <button className="ui button blue" onClick={() => this.parseRawTextdata()}>Draw graph</button>
                <button className="ui button blue" onClick={() => this.onResetClick()}>Reset</button>
                </div>
                <h4 className="ui header">Instructions:</h4>
                <ul>
                    <li>Double click nodes or edges to delete them</li>
                    <li>Click and hold nodes to drag them around</li>
                    <li>Strinctly enter numbers in the input fields. Correct: "2", Wrong: "  2 "</li>
                    <li>The graph data must respect the following strucutre: "(a, b), (c, d), ..., (x, y)"</li>
                </ul>
                <div className="ui segments">
                    <div className="ui segment">
                        <p>Example</p>
                    </div>
                    <div className="ui secondary segment">
                        <p>(1,2), (2,3), (4,5), (7,6), (3,7), (4,1), (5,6)</p>
                    </div>
                </div>
                <button onClick={() => this.onExampleClick()} className="ui button blue">Run Example</button>
            </div>
        )
    }
}

export default connect(null, {
    addNode, addConnection, resetGraph
})(Factory);