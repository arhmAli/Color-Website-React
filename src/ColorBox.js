import React, { Component } from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import './ColorBox.css'
export default class ColorBox extends Component {
  constructor(props){
    super(props)
    this.state={copied:false}
    this.changeCopy=this.changeCopy.bind(this)
  }
  changeCopy(){
    this.setState({copied:true},()=>{
      setTimeout(()=>this.setState({copied:false}),1500)
    });
  }
  render() {
    const {name,background}=this.props;
    const {copied}=this.state;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopy}>
      <div style={{background}} className='ColorBox'>
        <div className={`copy-overlay ${copied && "show"}`} style={{background}}  />
        <div className={`copy-msg ${copied && "show"}`}>
          <h1>Copied</h1>
          <p>{this.props.background}</p>
        </div>
        <div className='copy-container'>
            <div className='box-content'>
                <span>{name}</span>
            </div>
            <button className='copy-button'>Copy</button>
        </div>
        <span className='see-more'>More</span>
        </div>
        </CopyToClipboard>
    )
  }
}
