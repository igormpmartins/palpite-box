import React from 'react'
import Link from 'next/link'

const Pesquisa = () => {
    return (
        <div className='pt-6'>
            <h1 className='font-bold text-center my-4 text-2xl'>Críticas e sugestões</h1>
            <p className='text-center mb-6'>
            O restaurante (Ler da Planilha) sempre busca por atender melhor seus clientes.<br />
            Por isso, estamos sempre abertos a ouvir a sua opinião.
            </p>
            <div className='mx-auto w-1/5 font-bold'>
                <label>Seu nome:</label>
                <input type='text' className='block bg-blue-100 rounded shadow-md py-3 px-9 mb-3'></input>
            </div>
            <div className='mx-auto w-1/5 font-bold'>
                <label>Outro input:</label>
                <input type='text' className='block bg-blue-100 rounded shadow-md py-3 px-9 mb-3'></input>
            </div>
        </div>
    )

}

export default Pesquisa