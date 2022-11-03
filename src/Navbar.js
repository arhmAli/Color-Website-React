import React, { Component } from 'react'
import 'rc-slider/assets/index.css'
import Slider from 'rc-slider';
import { Link } from 'react-router-dom';
import './Navbar.css'
import Select from '@mui/material/Select';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
// import { MenuItem } from '@mui/material';

export default class Navbar extends Component {
  constructor(props){
    super(props);
    this.state={format:'hex',open:false}
    this.closeSnack=this.closeSnack.bind(this)
    this.handleFormatChange=this.handleFormatChange.bind(this)
  }
  closeSnack(){
    this.setState({open:false})
  }
  handleFormatChange(e){
    this.setState({format:e.target.value,open:true});
    this.props.handleChange(e.target.value)
  }
  render() {
    const{level,changeLevel}=this.props
    return (
    <header className='Navbar'>
        <div className='logo'>
            <Link to='/'>React COLOR PICKER</Link>
        </div>
        <div className='slider-container'>
            <span>Level: {level}</span>
        <div className='slider'>
          <Slider 
        defaultValue={level} 
        min={100} 
        step={100}
        max={900} 
        onAfterChange={changeLevel}
        />
        </div>
        </div>
        <div className='select-container'>
          
          <Select className='dropdown'
          onChange={this.handleFormatChange} >
            <MenuItem value="hex">Hex -#ffffff</MenuItem>
            <MenuItem value="rgb">RGB -rgb(255,255,255)</MenuItem>
            <MenuItem value="rgba">RGBA -rgba(255,255,255,1.0)</MenuItem>
          </Select>
          
        </div>
        <Snackbar 
        anchorOrigin={{vertical:"bottom",horizontal:'left'}}
        open={this.state.open}
        autoHideDuration={3000}
        message={<span id='message-id'>Format changed to {this.state.format.toUpperCase()}</span>}
        ContentProps={{
          'aria-describedby':'message-id'
        }}
        onClose={this.closeSnack}
        action={
          [<IconButton 
            onClick={this.closeSnack} 
            color='inherit'
            key='close'
            aria-label='close'>
            <CloseIcon />
          </IconButton>
          ]
      }
        />
    </header>
    )
  }
}
