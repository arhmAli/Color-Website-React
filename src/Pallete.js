import React, { Component } from 'react'
import ColorBox from './ColorBox'
import Navbar from './Navbar';
import './Pallete.css'

class Pallete extends Component {
  constructor(props){
    super(props);
    this.state={level:500,format:"hex"};
    this.changeLevel=this.changeLevel.bind(this)
    this.changeFormat=this.changeFormat.bind(this);
  }
  changeLevel(level){
    this.setState({level})
  }
  changeFormat(val){
    this.setState({format:val})
  }
  render() {
    const colorBoxes=this.props.palette.colors[this.state.level].map(color=>(
        <ColorBox 
        background={color[this.state.format]} 
        name={color.name}
        key={color.id}/>
    ))
    return (
      <div className='Palette'>
        <Navbar 
        level={this.state.level} 
        changeLevel={this.changeLevel}
        handleChange={this.changeFormat}/>
        <div className='Palette-colors'>
        {colorBoxes}
        <footer className='Palette-footer'>
          {this.props.palette.paletteName}
          <span className='emoji'>{this.props.palette.emoji}</span>
        </footer>
        </div>
        
      </div>
    )
  }
}
export default Pallete