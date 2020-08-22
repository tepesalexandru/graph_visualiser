import React from 'react'

export default function Information() {
    return (
        <div className="p-6 mx-6 mt-6 font-sans bg-white rounded-lg shadow-lg">
            <h4 className="uppercase text-sm font-bold tracking-wider mb-2">
              Instructions :
            </h4>
            <ul className="list-disc pl-4 grid grid-cols-1 gap-1 mb-6">
              <li>Double click nodes or edges to delete them</li>
              <li>Click and hold nodes to drag them around</li>
              <li>
                Strinctly enter numbers in the input fields. Correct: "2", Wrong: "
                2 "
              </li>
              <li>
                The graph data for directed graphs must respect the following strucutre: "(a,b), (c,d), ..., (x,y)"
              </li>
              <li>
                The graph data for undirected graphs must respect the following strucutre: "[a,b], [c,d], ..., [x,y]" or the one for directed graphs.
              </li>
            </ul>
        </div>
    )
}
