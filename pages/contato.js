import React from 'react'
import Link from 'next/link'
import PageTitle from '/components/PageTitle'

const Contato = () => {
    return (
        <div className='mx-auto text-center'>
            <PageTitle title='Contato' />
            <h1 className='font-bold m-4'>Contato</h1>
            <div className='mx-auto text-center m-4'>
                <p>Dados de Contato do Restaurante</p>
            </div>
        </div>
    )
}

export default Contato