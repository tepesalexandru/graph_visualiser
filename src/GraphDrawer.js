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

    graphOptions = {
        height: "500px",
        edges: {
            arrows: {
                to: {
                    enabled: false
                }
            },
            color: {
                color: 'grey'
            },
            width: 2,
            smooth: {
                enabled: true,
                type: 'dynamic'
            }
        },
        nodes: {
            color: {
                text: '#fff',
                border: '#292F36',
                background: '#373E40',
                highlight: {
                    background: '#292F36'
                }
            },
            shape: 'ellipse',
            font: '24px arial white'
        }
    }

    render() {
        console.log(this.props.graph)
        return (
            <div className="ml-6 rounded-lg bg-white shadow-lg" style={{flex: 2}}>
                <Graph 
                    graph={this.props.graph}
                    options={this.graphOptions}
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