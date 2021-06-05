import React from 'react'
import Marbella from "../assets/fotos/marbella.jpg"
import Fuengirola from "../assets/fotos/fuengirola.jpg"
export const Slider = () => {
    return (
        <>
        <div className="slider">
                <ul className="slides">
                    <li>
                        <img src={Marbella} alt="local marbella"/> 
                        <div className="caption right-align slider__fonts">
                            <h2 className="">Marbell</h2>
                            <h5 className="light grey-text text-lighten-3">Destino cinco estrellas</h5>
                        </div>
                    </li>
                    <li>
                        <img src={Fuengirola} alt="local marbella"/>
                        <div className="caption right-align slider__fonts">
                            <h2 className="">Fuengirol</h2>
                            <h5 className="light grey-text text-lighten-3">+Cultura</h5>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}
