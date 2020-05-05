import React, { Component } from 'react'

import './interface.css'

export class Interface extends Component {
    render() {
        return (
            <div className='interface'>
                <div className='interface-btns' >    
                    <button className={`interface-btn pathfinding AStar button`} onClick={this.props.runAlgorithm.bind(this, 'A*')}> Visualize A*</button>
                    <button className={`interface-btn pathfinding Greedy button`} onClick={this.props.runAlgorithm.bind(this, 'Greedy')}> Visualize Greedy BFS</button>
                    <button className={`interface-btn pathfinding Djisktras button`} onClick={this.props.runAlgorithm.bind(this, 'Djisktras')}>Visualize Djisktras</button>
                    <button className={`interface-btn generator button`} onClick={this.props.clearGrid}> Clear Grid</button> 
                    <button className={`interface-btn generator button`} onClick={this.props.generateMap.bind(this, 'perlin')}> Generate Noise Map</button>
                    <button className={`interface-btn generator button`} onClick={this.props.generateMap.bind(this, 'maze')}> Generate Maze</button>    
                </div>
            </div>
        )
    }
}

export default Interface