import React from 'react'
import logoF from '../assets/logos/facebook.svg'
import logoI from '../assets/logos/instagram.svg'
export const RedSoc = () => {
    return (
        <div className="row">
            <div className="col s12 m6" white>
                <div className="redsoc__container white">
                    <div>
                        <span className="redsoc__title">Monisú</span>
                        <span className="redsoc__subtitle">Marbell</span>
                    </div>
                    <div>
                        <a href="https://www.facebook.com/monisuhairandbeauty" target="_blank" className="redsoc__icon"><img src={logoF} alt="Facebook icon" width="40px"/></a>
                        <a href="https://www.instagram.com/monisu.marbella/" target="_blank" className="redsoc__icon"><img src={logoI} alt="Instagram icon" width="40px"/></a>
                    </div>
                    <div>
                        <i class="material-icons grey-text">phone</i>
                        <a href="tel:952900650" target="_blank" >952900650</a>
                    </div>
                    <div>
                        
                        <a href="https://wa.me/34647015846" target="_blank" >(+34) 647015846</a>
                    </div>
                </div>
            </div>
            <div className="col s12 m6" white>
                <div className="redsoc__container white">
                    <div>
                        <span className="redsoc__title" target="_blank" >Monisú</span>
                        <span className="redsoc__subtitle" target="_blank" >Fuengirol</span>
                    </div>
                    <div>
                        <a href="https://www.facebook.com/monisu.fuengirola" target="_blank" className="redsoc__icon"><img src={logoF} alt="Facebook icon" width="40px"/></a>
                        <a href="https://www.instagram.com/monisu.fuengirola/" target="_blank" className="redsoc__icon"><img src={logoI} alt="Instagram icon" width="40px"/></a>
                    </div>
                    <div>
                        <i class="material-icons grey-text">phone</i>
                        <a href="tel:952473202">952473202</a>
                    </div>
                    <div>
                        
                        <a href="https://wa.me/34666341769">(+34) 666341769</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
