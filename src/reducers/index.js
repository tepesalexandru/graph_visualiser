import { combineReducers } from "redux";

const initialGraph = {
    nodes: [],
    edges: [],
}

const graphReducer = (oldGraph = initialGraph, action) => {
    switch (action.type) {
        case 'RESET_GRAPH': 
            oldGraph = initialGraph;
            return oldGraph;
        case 'ADD_NODE':
            const exists = oldGraph.nodes.find(node => node.id === action.payload.id);
            if (exists) return oldGraph;
            const newNode = {
                g: action.payload,
                grIn: 0,
                grEx: 0
            }
            return {...oldGraph, nodes: [...oldGraph.nodes, action.payload]};
        case 'DELETE_NODE':
            return {...oldGraph, nodes: oldGraph.nodes.filter(node => node.id !== action.payload)}
        case 'ADD_CONNECTION': {
            return {...oldGraph, edges: [...oldGraph.edges, {
                from: action.payload.a,
                to: action.payload.b
            }]}
        }
        case 'DELETE_CONNECTION': {
            return {...oldGraph, edges: oldGraph.edges.filter(edge => edge.id !== action.payload)}
        }
        default: 
            return oldGraph;
    }
}

const initialInformation = {
    type: 'undirected'
}

const graphInformationReducer = (oldInformation = initialInformation, action) => {
    switch (action.type) {
        case 'SET_GRAPH_TYPE':
            return {...oldInformation, type: action.payload}
        default:
            return oldInformation;
    }
}

export default combineReducers({
    graph: graphReducer,
    graphInformation: graphInformationReducer
});