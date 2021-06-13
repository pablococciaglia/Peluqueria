import React from 'react'
import { Aboutus } from './components/Aboutus'
import { Contactus } from './components/Contactus'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Maps } from './components/Maps'
import { Navbar } from './components/Navbar'
import { Products } from './components/Products'
import { Prueba } from './components/Prueba'
import { RedSoc } from './components/RedSoc'
import { Slider } from './components/Slider'


export const App = () => {
     return (
        <>
           <Navbar /> 
           <Slider />
           <RedSoc />
           <Maps />
           <Gallery />
           <Products />
           <Aboutus />
           <Contactus />     
           <Prueba />
           <Footer />
        </>
    )
}
