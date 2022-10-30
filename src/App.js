import React, { Component } from 'react'
import Pallete from './Pallete'
import seedColor from './seedColor'
import{Routes,Route} from 'react-router-dom'
import PaletteList from './PaletteList'
import {generatePalette} from './colorHelpers'

class App extends Component {
  findPalette(id){
   return seedColor.find(function(palette){
      return palette.id===id
    })
  }
  render() {
    console.log(generatePalette(seedColor[4]))
   
    return (
      <Routes>
      <Route exact path='/' element={<PaletteList palettes={seedColor}/>}/>
      <Route 
      exact path='/palette/material-ui-colors'
      element={<Pallete palette={generatePalette(seedColor[0])}/>}
       />
       <Route 
       exact path='/palette/flat-ui-colors-v1'
       element={<Pallete palette={generatePalette(seedColor[1])}/>}
        />
        <Route 
        exact path='/palette/flat-ui-colors-dutch'
        element={<Pallete palette={generatePalette(seedColor[2])}/>}
         />
         <Route 
         exact path='/palette/flat-ui-colors-american'
         element={<Pallete palette={generatePalette(seedColor[3])}/>}
          />
          <Route 
          exact path='/palette/flat-ui-colors-aussie'
          element={<Pallete palette={generatePalette(seedColor[4])}/>}
           />
           <Route 
           exact path='/palette/flat-ui-colors-british'
           element={<Pallete palette={generatePalette(seedColor[5])}/>}
            />
            <Route 
            exact path='/palette/flat-ui-colors-spanish'
            element={<Pallete palette={generatePalette(seedColor[6])}/>}
             />
             <Route 
             exact path='/palette/flat-ui-colors-indian'
             element={<Pallete palette={generatePalette(seedColor[7])}/>}
              />
              <Route 
              exact path='/palette/flat-ui-colors-french'
              element={<Pallete palette={generatePalette(seedColor[8])}/>}
               />
       {/* <Route 
       exact path='/palette/material-ui-colors'
       element={<Pallete palette={generatePalette(seedColor[0])}/>}
        /> */}
      {/* <div>
        <Pallete palette={generatePalette(seedColor[4])}/>
      </div> */}
      </Routes>
    )
  }
}
export default App
