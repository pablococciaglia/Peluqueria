import React from 'react'
import { Navbar } from './components/Navbar'
import { Prueba } from './components/Prueba'
import { RedSoc } from './components/RedSoc'
import { Slider } from './components/Slider'

export const App = () => {
     return (
        <>
           <Navbar /> 
           <Slider />
           <RedSoc />
           <Prueba />
        
        </>
    )
}
