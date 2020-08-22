import React, { Component } from 'react';
import Factory from './Factory';
import GraphDrawer from './GraphDrawer'
import GraphDetails from './GraphDetails';

export default class App extends Component {
    render() {
        return (
            <div>
            <div className="mb-6">
          <h1 className="text-center text-4xl font-bold icon header flex flex-col items-center pt-6">
            <svg
              className="h-24 w-24"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="480px"
              height="480px"
            >
              <path
                fill="#FF4081"
                d="M10.5,17.5l0.5-0.9l21.7,21.9L32.3,39h-0.5L10.5,17.5z M34,39H14v3h20V39z"
              />
              <path
                fill="#9C27B0"
                d="M37.4,30.7l-0.5,0.9L15.3,9.5L15.6,9h0.6L37.4,30.7z M32.3,39l1.7,3l11-18h-3.5L32.3,39z"
              />
              <path
                fill="#00BCD4"
                d="M34,9H14V6h20V9z M32.3,9h-0.6L10.4,30.4l0.5,0.9L32.6,9.5L32.3,9z"
              />
              <path
                fill="#FFC107"
                d="M15.6,9L5.5,25.6L3,24L14,6L15.6,9z M32.6,9.4L32.3,9h-1.7l-19,6.6l-0.8,1.3L32.6,9.4z"
              />
              <path
                fill="#FF5722"
                d="M15.7,39L14,42L3,24h3.5L15.7,39z M16,31V9h-0.4L15,10v21h-4.2l0.6,1H15v5.9l0.7,1.1H16v-7h20.6l0.6-1H16z"
              />
              <path
                fill="#03A9F4"
                d="M36.7,16.2L15.5,38.7l0.2,0.3h0.9l20.5-21.8L31.7,39h0.7l0.6-1l5-19.8L36.7,16.2z M41.5,24L32.3,9L34,6l11,18H41.5z"
              />
            </svg>
            Graph Visualiser
          </h1>
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
