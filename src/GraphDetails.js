import React, { Component } from 'react';
import {connect} from 'react-redux';

class GraphDetails extends Component {

    gradInterior = () => {
        
    }

    render() {
        return (
            <div>
                <ol>
                    {this.gradInterior()}
                </ol>
               
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {graph: state.graph}
}

export default connect(mapStateToProps)(GraphDetails);