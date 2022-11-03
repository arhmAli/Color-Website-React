import React from 'react'

const styles={
    main:{
        backgroundColor:'purple',
        border:'3px solid teal'
    }
}
function MiniPalette (props) {
    const{classes,name}=props;
    
  return (
    <div className='{classes.main}'>
        <h1>Colors</h1>
    </div>
  )
}
export default (MiniPalette);