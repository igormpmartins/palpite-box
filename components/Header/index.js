import React from 'react'
import Link from 'next/link'
import styles from './styles.module.css'

const Header = () => {
    return (
        <React.Fragment>
            <div className={styles.wrapper}>
                <div className='container mx-auto text-center '>
                    <Link href='/'>
                        <a>
                            <img className='mx-auto' src='/logo_palpitebox.png' alt='PalpiteBox' />
                        </a>
                    </Link>
                </div>
            </div>
            <div className='bg-gray-100 p-4 shadow-md text-center'>
                <Link href='/sobre'>
                    <a className={styles.link}>Sobre</a>
                </Link>
                <Link href='/contato'>
                    <a className={styles.link}>Contato</a>
                </Link>
                <Link href='/pesquisa'>
                    <a className={styles.link}>Pesquisa</a>
                </Link>
            </div>        
        </React.Fragment>
    )
}

export default Header

