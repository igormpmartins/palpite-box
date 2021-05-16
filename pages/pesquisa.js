import React from 'react'
import Link from 'next/link'

const Pesquisa = () => {

    const salvar = async() => {
        const form = {
            Nome: 'Igor',
            Email: 'igormpmartins@gmail.com',
            Whatsapp: '51 99998-4049',
            Cupom: '123fds1fa',
            Promo: 'corong4ever'
        }
        const response = await fetch('/api/save', {
            method: 'POST',
            body: JSON.stringify(form)
        })

        const data = await response.json()
        console.log(data)

    }
    
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
            <button onClick={salvar} className='mx-auto p-4 block rounded-lg shadow-lg bg-blue-400 my-2 hover:shadow'>Salvar</button>
        </div>
    )

}

export default Pesquisa