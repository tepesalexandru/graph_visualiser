import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addNode, addConnection, resetGraph, setGraphType} from './actions';

class Factory extends Component {

    state = {
        inputValue: '',
        from: '',
        to: '',
        rawTextData: '', 
        completeNumber: ''
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
        if (this.state.rawTextData === '') return;
        if (this.props.info.type === "tree") {
          this.props.resetGraph();
          let nodes = [];
          let rawdata = this.state.rawTextData.slice();
          let skip = 1;
          while (rawdata !== '') {
            rawdata = this.state.rawTextData.substring(skip);
            let nextComma = rawdata.indexOf(",");
            let pr = rawdata.indexOf(")");
            let newNode;
            if (nextComma === -1)
            skip += pr + 1;
            else skip += nextComma + 1;
            if (nextComma !== -1)
             newNode = rawdata.substring(0, nextComma);
            else newNode = rawdata.substring(0, pr);
            nodes.push(newNode);
          }
          console.log(nodes);
          let q = [];
          let added = [];
          let len = nodes.length;
          for (let i = 0; i < len; i++) {
            added[i] = false;
            if (nodes[i] === "0") {
              this.props.addNode(i + 1);
              q.push(i + 1);
              break;
            }
          }
          console.log(q[0]);
          while (q.length > 0) {
            console.log(q);
            for (let i = 0; i < len; i++) {
              if (parseInt(nodes[i]) === q[0] && !added[i]) {
                added[i] = true;
                q.push(i + 1);
                console.log(q);
                this.props.addNode(i + 1)
                this.props.addConnection(q[0], i + 1);
              }
            }
            q.shift();
          }

        } else {
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
        
    }

    onResetClick = () => {
        this.props.resetGraph();
        this.props.addNode('');
    }

    onExampleClick = () => {
        this.onResetClick();
        this.setState({rawTextData: this.getExample()}, () => {
            this.parseRawTextdata();
        })
        
    }

    getGraphTypeClasses = (type, direction) => {
        let cl = '';
        if (type === this.props.info.type) {
          console.log("the right one!")
            cl = "bg-blue-700 text-white";
        } else cl = "bg-gray-300 text-gray-900";
        if (direction === "right") {
            return `py-2 pr-4 pl-6 rounded-tr rounded-br ${cl} ml-1 focus:outline-none focus:shadow-outline`;
        } else if (direction === "right") return `py-2 pl-4 pr-6 rounded-tl rounded-bl ${cl} mr-1 focus:outline-none focus:shadow-outline`;
        return `py-2 pl-4 pr-6 ${cl} mr-1 focus:outline-none focus:shadow-outline`
      }

    getExample = () => {
      if (this.props.info.type === "directed")
      return "(1,2), (2,3), (4,5), (7,6), (3,7), (4,1), (5,6)";
      else if (this.props.info.type === "undirected") return "[1,2], [2,3], [4,5], [7,6], [3,7], [4,1], [5,6]";
      return "(2,5,1,1,0,3,3,7,4,6)"
    }

    generateCompleteGraph = () => {
      this.onResetClick();
      let nr = parseInt(this.state.completeNumber);
      for (let i = 1; i <= nr; i++) {
        this.props.addNode(i);
      }
      for (let i = 1; i < nr; i++) {
        for (let j = i + 1; j <= nr; j++) {
          this.props.addConnection(i, j);
        }
      }
    }

    render() {
        return (
            <div style={{ flex: 1 }} className="p-6 mx-6 font-sans bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-medium mb-2">Graph Information</h2>
              <h6 className="uppercase text-sm font-bold tracking-wider mb-2">
                Graph type :{" "}
              </h6>
            <div className="w-full flex items-center mb-6">
              <button onClick={() => this.props.setGraphType("directed")} className={this.getGraphTypeClasses("directed", "left")}>
                Directed
              </button>
              <div className="h-8 w-8 flex items-center justify-center bg-white rounded-full -mx-4 z-10">
                <p className="-mt-1">or</p>
              </div>
              <button onClick={() => this.props.setGraphType("undirected")} className={this.getGraphTypeClasses("undirected", "middle")}>
                Undirected
              </button>
              <div className="h-8 w-8 flex items-center justify-center bg-white rounded-full -mx-4 z-10">
                <p className="-mt-1">or</p>
              </div>
              <button onClick={() => this.props.setGraphType("tree")} className={this.getGraphTypeClasses("tree", "right")}>
                Tree
              </button>
            </div>
    
            <div className="flex w-full mb-4">
              <input
                className="flex-1 border border-gray-600 mr-2 rounded focus:outline-none focus:shadow-outline p-2"
                type="text"
                placeholder="Ex: 3"
                value={this.state.inputValue}
                onChange={(e) => this.setState({ inputValue: e.target.value })}
              />
              <button
                className="py-2 px-4 bg-blue-700 text-white rounded focus:outline-none focus:shadow-outline uppercase"
                onClick={() => this.addNode()}
              >
                Add node
              </button>
            </div>
    
            <div className="flex w-full mb-4">
              <div className="flex-1 pr-2 grid grid-cols-2 gap-2">
                <input
                  className="border border-gray-600 rounded focus:outline-none focus:shadow-outline p-2"
                  type="text"
                  placeholder="From..."
                  value={this.state.from}
                  onChange={(e) => this.setState({ from: e.target.value })}
                />
                <input
                  className="border border-gray-600 rounded focus:outline-none focus:shadow-outline p-2"
                  type="text"
                  placeholder="To..."
                  value={this.state.to}
                  onChange={(e) => this.setState({ to: e.target.value })}
                />
              </div>
              <button
                className="flex-shrink-0 py-2 px-4 bg-blue-700 text-white rounded focus:outline-none focus:shadow-outline uppercase"
                onClick={() => this.addEdge()}
              >
                Add edge
              </button>
            </div>
    
            <div className="flex w-full mb-6">
              <input
                className="flex-1 border border-gray-600 rounded focus:outline-none focus:shadow-outline p-2"
                placeholder="Insert graph data..."
                onChange={(e) => this.setState({ rawTextData: e.target.value })}
                value={this.state.rawTextData}
              />
              <button
                className="ml-2 flex-shrink-0 py-2 px-4 bg-blue-700 text-white rounded focus:outline-none focus:shadow-outline uppercase"
                onClick={() => this.parseRawTextdata()}
              >
                Draw graph
              </button>
              <button
                className="ml-2 flex-shrink-0 py-2 px-4 bg-blue-700 text-white rounded focus:outline-none focus:shadow-outline uppercase"
                onClick={() => this.onResetClick()}
              >
                Reset
              </button>
            </div>
    
            
    
            <div className="w-full mb-6">
              <h6 className="uppercase text-sm font-bold tracking-wider mb-2">
                Example
              </h6>
              <div className="flex w-full">
                <div className="flex-1 border border-gray-600 rounded p-2 cursor-not-allowed opacity-50">
                <p>{this.getExample()}</p>
                </div>
                <button
                  className="ml-2 flex-shrink-0 py-2 px-4 bg-blue-700 text-white rounded focus:outline-none focus:shadow-outline uppercase"
                  onClick={() => this.onExampleClick()}
                >
                  Run Example
                </button>
              </div>
            </div>
            <div className="w-full">
            <h6 className="uppercase text-sm font-bold tracking-wider mb-2">
                Complete Graph
            </h6>
            <input
                className="flex-1 border border-gray-600 mr-2 rounded focus:outline-none focus:shadow-outline p-2"
                type="text"
                placeholder="Ex: 5"
                value={this.state.completeNumber}
                onChange={(e) => this.setState({ completeNumber: e.target.value })}
              />
              <button
                className="py-2 px-4 bg-blue-700 text-white rounded focus:outline-none focus:shadow-outline uppercase"
                onClick={() => this.generateCompleteGraph()}
              >
                Generate Graph
              </button>
            </div>
          </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {info: state.graphInformation};
}

export default connect(mapStateToProps, {
    addNode, addConnection, resetGraph, setGraphType
})(Factory);