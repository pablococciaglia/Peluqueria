import React from 'react'
import logoF from '../assets/logos/facebook.svg'
import logoI from '../assets/logos/instagram.svg'
import logoW from '../assets/logos/whatsapp.svg'
export const RedSoc = () => {
    return (
        <div className="row">
            <div className="col s12 m6">
                <div className="redsoc__container">
                    <div>
                        <span className="redsoc__title">Monisú</span>
                        <span className="redsoc__subtitle">Marbell</span>
                    </div>
                    <div className="redsoc__containerlinks">
                        <div>
                            <a href="https://www.facebook.com/monisuhairandbeauty" rel="noreferrer" target="_blank" className="redsoc__icon"><img src={logoF} alt="Facebook icon" width="40px"/></a>
                        </div>
                        <div>
                            <a href="https://www.instagram.com/monisu.marbella/" rel="noreferrer" target="_blank" className="redsoc__icon"><img src={logoI} alt="Instagram icon" width="40px"/></a>
                        </div>
                        <div>
                            <a href="tel:952900650" rel="noreferrer" target="_blank"><i className="material-icons black-text redsoc__icon">phone</i></a>
                            <a href="tel:952900650" rel="noreferrer" target="_blank" className="redsoc__icontext">952900650</a>
                        </div>
                        <div>
                            <a href="https://wa.me/34647015846" rel="noreferrer" target="_blank"><img src={logoW} alt="Facebook icon" width="40px" className="redsoc__icon"/></a>
                            <a href="https://wa.me/34647015846" rel="noreferrer" target="_blank" className="redsoc__icontext">(+34)&nbsp;647015846</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col s12 m6">
                <div className="redsoc__container">
                    <div>
                        <span className="redsoc__title" target="_blank" >Monisú</span>
                        <span className="redsoc__subtitle" target="_blank" >Fuengirol</span>
                    </div>
                    <div className="redsoc__containerlinks">
                        <div>
                            <a href="https://www.facebook.com/monisu.fuengirola" rel="noreferrer" target="_blank" className="redsoc__icon"><img src={logoF} alt="Facebook icon" width="40px"/></a>
                        </div>
                        <div>
                            <a href="https://www.instagram.com/monisu.fuengirola/" rel="noreferrer" target="_blank" className="redsoc__icon"><img src={logoI} alt="Instagram icon" width="40px"/></a>
                        </div>
                        <div>
                            <a href="tel:952473202" rel="noreferrer" ><i className="material-icons black-text redsoc__icon">phone</i></a>&nbsp;
                            <a href="tel:952473202" rel="noreferrer" className="redsoc__icontext">952473202</a>
                        </div>
                        <div>
                            <a href="https://wa.me/34666341769" rel="noreferrer" target="_blank"><img src={logoW} alt="Facebook icon" width="40px" className="redsoc__icon"/></a>
                            <a href="https://wa.me/34666341769" rel="noreferrer" target="_blank" className="redsoc__icontext">(+34)&nbsp;666341769</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
