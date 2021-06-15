import React from 'react'
import dibujo1 from '../assets/fotos/aboutus/aboutus1.png'
import dibujo2 from '../assets/fotos/aboutus/aboutus2.png'
export const Aboutus = () => {
    return (
        <>
            <div id="AboutUs" className="component__title"><span>Nosotros&nbsp;&nbsp;&nbsp;&nbsp;</span></div>

            <div className="aboutus__container">
                <div className="aboutus__white">
                        <img src={dibujo1} alt="dibujo de mujer"/>
                </div>
                <div className="aboutus__red">
                    <p className="flow-text">
                        Diseñados para vivir una experiencia de placer, belleza y bienestar. Recordamos momentos y sensaciones, nos centramos en crear experiencias agradables.
                        Lavacabezas con música, masaje y cromoterapia, Pediluvio Spa privados con hidromasaje y masaje corporal. 
                        Zona “sweet”, exclusiva para novias en nuestro Salón de Fuengirola. 
                        Cabinas de belleza totalmente equipadas con la última tecnología.
                        Puestos de maquillaje profesional. 
                        Nuestro credo: Creemos que la belleza perfecta es distinta para cada persona y conseguirla no debe convertirse en una lucha diaria. Por eso, no producimos en masa, sino que adaptamos el look, teniéndote en cuenta a ti, tus facciones y tus necesidades a la hora de diseñar el corte y el color. 
                    </p>
                </div>
            </div>
            <div className="aboutus__container">
                <div className="aboutus__red">
                    <p className="flow-text">
                        
                        Nuestra obsesión: que su paso por nuestros salones sea una verdadera experiencia de placer y belleza. Con dos salones clave en La Costa del Sol; Marbella y Fuengirola, Monisú nos hemos convertido en referencia en la zona. 
                        Debemos la fama a la construcción de un equipo humano cuyas creaciones parten de la personalización y el deseo de hacer realidad los deseos de sus clientes. 
                        En nuestros salones, encontrará las ultimas novedades en tratamientos para su cabello en lavacabezas con cromoterapia, donde se puede disfrutar de un relajante masaje shiatsu a la vez que escucha música relajante o simplemente el rumor del mar.Contamos con una amplia gama de servicios estéticos de ultima generación, tanto faciales como corporales. Lo que más nos preocupa es su experiencia, entender qué desea y trabajar sobre ellas, proponerle ideas, y sobre todo hacerle sentir especial…
                    </p>
                </div>

                <div className="aboutus__white">
                    <img src={dibujo2} alt="dibujo de mujer"/>
                </div>
            </div>


            
        </>
    )
}
