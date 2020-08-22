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
            <div className="ml-6 border border-gray-700 rounded" style={{ flex: 2 }}>
                <Graph 
                    graph={this.props.graph}
                    options={{
                        height: "500px",
                        edges: {
                            arrows: {
                                to: {
                                    enabled: false
                                }
                            },
                            color: {
                                color: 'grey'
                            }
                        },
                        nodes: {
                            color: {
                                text: '#fff',
                                border: '#000',
                                background: '#000'
                            },
                            shape: 'circle',
                            font: '24px arial white'
                        }
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