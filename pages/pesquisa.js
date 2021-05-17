import React, {useState} from 'react'
import Link from 'next/link'

const Pesquisa = () => {

    const [form, setForm] = useState({
        Nome: 'Igor',
        Email: 'igormpmartins@gmail.com',
        Whatsapp: '51 99998-4049',
        Cupom: '123fds1fa',
        Promo: 'corong4ever'
    });

    const salvar = async() => {

        const response = await fetch('/api/save', {
            method: 'POST',
            body: JSON.stringify(form)
        })

        const data = await response.json()
        console.log(data)

    }

    const onChange = (event) => {

        const value = event.target.value
        const key = event.target.name

        setForm(old => ({
            ...old,
            [key]: value
        }))

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
                <input type='text' className='entrada' placeholder='Nome' name='Nome' onChange={onChange}></input>
            </div>
            <div className='mx-auto w-1/5 font-bold'>
                <label>Email:</label>
                <input type='text' className='entrada' placeholder='Email' name='Email' onChange={onChange}></input>
            </div>
            <div className='mx-auto w-1/5 font-bold'>
                <label>Whatsapp:</label>
                <input type='text' className='entrada' placeholder='Whatsapp' name='Whatsapp' onChange={onChange}></input>
            </div>
            <p>
            {JSON.stringify(form, null, 2)}
            </p>
            <button onClick={salvar} className='botao'>Salvar</button>
        </div>
    )

}

export default Pesquisa