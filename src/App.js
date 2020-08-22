import React, { Component } from 'react';
import Factory from './Factory';
import GraphDrawer from './GraphDrawer'
import GraphDetails from './GraphDetails';
import Information from './Information';

export default class App extends Component {
    render() {
        return (
            <div className="bg-gray-300 p-6 min-h-screen">
            <div className="mb-6 px-6 flex justify-between items-center">
              <h1 className="text-3xl font-bold icon header flex items-center">
                <svg
                  className="h-10 w-10 mr-2"
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
              <a
                href="https://github.com/tepesalexandru/graph_visualiser"
                className="flex items-center bg-white py-2 px-4 rounded-lg shadow"
              >
                <svg
                  className="text-gray-800 mr-2 h-6 w-6"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.0002 0C10.818 0 0 10.8179 0 24C0 35.2489 7.89337 45.4673 18.3751 48V40.0598C17.3366 40.2872 16.3807 40.2938 15.3235 39.9822C13.9051 39.5636 12.7527 38.6188 11.8972 37.1781C11.3519 36.2582 10.3855 35.2606 9.37727 35.3339L9.13007 32.5323C11.3101 32.3456 13.1961 33.8606 14.3157 35.7415C14.813 36.5779 15.3854 37.0682 16.12 37.285C16.8301 37.4941 17.5925 37.3938 18.481 37.08C18.704 35.3013 19.5188 34.6355 20.1344 33.698V33.6965C13.8832 32.7642 11.3918 29.4478 10.403 26.8301C9.09272 23.3544 9.79585 19.0122 12.1129 16.2682C12.1579 16.2147 12.2392 16.0748 12.2077 15.9771C11.1453 12.7679 12.4399 10.1133 12.4875 9.83167C13.7136 10.1942 13.9128 9.46692 17.8134 11.8367L18.4876 12.2417C18.7696 12.4098 18.6809 12.3138 18.9629 12.2926C20.5915 11.8502 22.3083 11.606 23.9998 11.584C25.7042 11.606 27.41 11.8502 29.1059 12.3105L29.3242 12.3325C29.3052 12.3296 29.3835 12.3186 29.515 12.2402C34.3875 9.28894 34.2124 10.2535 35.5191 9.82874C35.5663 10.1107 36.8437 12.8086 35.7926 15.9771C35.6509 16.4136 40.0169 20.4115 37.597 26.829C36.6082 29.4478 34.1172 32.7642 27.8659 33.6965V33.698C28.6672 34.9193 29.63 35.569 29.6249 38.0885V48C40.107 45.4673 48 35.2489 48 24C48.0004 10.8179 37.1824 0 24.0002 0V0Z"
                    fill="currentColor"
                  />
                </svg>
                <p className="text-gray-900 text-2xl">Github</p>
              </a>
            </div>

    
            <div style={{ display: "flex" }}>
              <GraphDrawer />
              <Factory />
            </div>
            <Information />
          </div>
            
        )
    }
}
