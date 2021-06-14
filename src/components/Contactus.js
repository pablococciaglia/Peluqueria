import React from 'react'

export const Contactus = () => {
    return (
        <>
            <a name="ContactUs" href="#!"><div className="component__title"><span>Contacto&nbsp;&nbsp;&nbsp;&nbsp;</span></div></a>

                <form className="contactus">

                    <div className="input-field flow-text">
                        <i className="material-icons prefix">account_box</i>
                        <input type="text" id="name" name="name" className="autocomplete flow-text" required/>
                        <label className=" flow-text" htmlFor="name">Nombre</label>
                    </div>
                
                    <div className="input-field flow-text">
                        <i className="material-icons prefix">email</i>
                        <input type="email" name="email" id="email" className="autocomplete flow-text" required/>
                        <label htmlFor="email">E-mail</label>
                    </div>
    
                    <div className="input-field  flow-text">
                        <i className="material-icons prefix">border_color</i>
                        <textarea autoCapitalize="sentences" className="contactus__textarea" type="text" id="message" name="message" className="autocomplete" required/>
                        <label htmlFor="message">Mensaje</label>
                    </div>

                    <a className="btn-floating btn-large contactus__icon" type="submit"><i className="material-icons">send</i></a>

                </form>

            
           
        </>
    )
}
