import React, { Component } from 'react';
import Factory from './Factory';
import GraphDrawer from './GraphDrawer'
import GraphDetails from './GraphDetails';

export default class App extends Component {
    render() {
        return (
            <div>
            <div style={{display: "flex"}} >
            <h1 className="ui center aligned icon header">
            <i className="connectdevelop icon massive" />
                Graph Visualiser</h1>
            </div>
            
            <div style={{display: "flex"}}>
                <GraphDrawer />
                <Factory />
                <GraphDetails />
               
            </div>
            </div>
            
        )
    }
}
