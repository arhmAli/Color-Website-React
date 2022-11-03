import React, { Component } from 'react'
import{Link} from 'react-router-dom'
import MiniPalette from './MiniPalette';

export default class PaletteList extends Component {
  render() {
    const{palettes}=this.props;
    return (
        <div>
          <MiniPalette/>
        <h1>React Colors</h1>
        {palettes.map(p=>(
            <Link to={`/palette/${p.id}`}><MiniPalette {...p}/></Link>
        ))}
        </div>
    )
  }
}
