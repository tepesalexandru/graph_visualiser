import React, { Component } from 'react';
import Graph from 'vis-react';
import {connect} from 'react-redux';
import {deleteNode, deleteConnection} from './actions'

class GraphDrawer extends Component {

    graphEvents = {
        select: function(event) {
            // on node click
        },
        doubleClick: (event) => {
            console.log(event)
            if (event.edges[0]) this.props.deleteConnection(event.edges[0]);
            this.props.deleteNode(event.nodes[0])
        }
    }

    render() {
        console.log(this.props.graph)
        return (
            <div style={{flex: 2, border: "1px solid"}}>
                <Graph 
                    graph={this.props.graph}
                    options={{
                        height: "500px"
                    }}
                    events={this.graphEvents}
                    getNetwork={this.getNetwork}
                    getEdges={this.getEdges}
                    getNodes={this.getNodes}
                    vis={vis => (this.vis = vis)}
                />
                
            </div>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {graph: state.graph}
}

export default connect(mapStateToProps, {
    deleteNode, deleteConnection
})(GraphDrawer);