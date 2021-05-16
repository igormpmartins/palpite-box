import React from 'react'
import Styles from './styles.module.css'

const Footer = () => {
    return (
        <div className={Styles.rodape}>
            <div className={Styles.textDev}>
                Desenvolvido por:{'  '}
                <a className={Styles.link} href='https://www.facebook.com/igor.martins.9674/'>Igor Martins</a>/ 
                <a className={Styles.link} href='https://www.linkedin.com/in/igormpmartins/'>LinkedIn</a> / 
                <a className={Styles.link} href='https://github.com/igormpmartins'>GitHub</a> 
            </div>
            <div className='mt-2'>
                <img className={Styles.imageFooter} src='/logo_semana_fsm.png' alt='FullStackMaster'/>
                <img className={Styles.imageFooter} src='/logo_devpleno.png' alt='DevPleno'/>
            </div>                
        </div>            
    )
}

export default Footer