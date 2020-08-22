export const resetGraph = () => {
    return {
        type: 'RESET_GRAPH'
    }
}

export const addNode = (node) => {
    return {
        type: 'ADD_NODE',
        payload: {
            id: parseInt(node),
            label: node
        }
    }
}

export const deleteNode = (node) => {
    return {
        type: 'DELETE_NODE',
        payload: node
    }
}

export const addConnection = (a, b) => {
    return {
        type: 'ADD_CONNECTION',
        payload: {
            a, b
        }
    }
}

export const deleteConnection = (id) => {
    return {
        type: 'DELETE_CONNECTION',
        payload: id
    }
}