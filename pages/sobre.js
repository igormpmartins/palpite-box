import React from 'react'
import Link from 'next/link'
import PageTitle from '/components/PageTitle'

const Sobre = () => {
    return (
        <div className='mx-auto text-center m-4'>
            <PageTitle title='Sobre' />
            <h1 className='font-bold'>Sobre</h1>
            <p className='m-4'>
            Projeto foi construído utilizando HTML5, Javascript, CSS, React e NEXT.JS
            </p>
        </div>
    )
}

export default Sobre