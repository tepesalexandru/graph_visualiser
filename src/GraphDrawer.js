import React, { Component } from 'react';
import Graph from 'vis-react';
import {connect} from 'react-redux';
import {deleteNode, deleteConnection} from './actions'

class GraphDrawer extends Component {

    getGraphOptions = () => {
        return {
            height: "500px",
            edges: {
                arrows: {
                    to: {
                        enabled: this.props.graphType === "directed"
                    }
                },
                color: {
                    color: 'grey'
                },
                width: 2,
                smooth: {
                    enabled: true,
                    type: 'discrete'
                }
            },
            nodes: {
                color: {
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
    }

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
        console.log(this.props.graphType)
        return (
            <div className="ml-6 rounded-lg bg-white shadow-lg" style={{flex: 2}}>
                <Graph 
                    graph={this.props.graph}
                    options={this.getGraphOptions()}
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
    return {graph: state.graph, graphType: state.graphInformation.type}
}

export default connect(mapStateToProps, {
    deleteNode, deleteConnection
})(GraphDrawer);