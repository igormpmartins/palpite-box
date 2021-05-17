import React, {useState} from 'react'
import Link from 'next/link'

const Pesquisa = () => {

    const [form, setForm] = useState({
        Nome: '',
        Email: '',
        Whatsapp: '',
        Cupom: '',
        Promo: ''
    });

    const [success, setSuccess] = useState(false)
    const [retorno, setRetorno] = useState({})

    const salvar = async() => {

        const response = await fetch('/api/save', {
            method: 'POST',
            body: JSON.stringify(form)
        })

        const data = await response.json()
        setSuccess(true)
        setRetorno(data)

        console.log(retorno)


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
            {!success && 
            <div>
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
                <button onClick={salvar} className='botao'>Salvar</button>
            </div>
            }
            {success && 
            <div className='text-center w-1/5 mx-auto mb-3'>
                <p className='mb-3 bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-1 py-3 mb-6'>
                    Obrigado por contribuir com sua sugestão ou crítica
                </p>
                {retorno.showCupon &&
                    <div className='text-center border p-4 mb-4'>
                        Seu Cupom: <br />
                        <span className='font-bold text-2xl'>{retorno.Cupom}</span>
                    </div>
                }
                {retorno.showCupon &&
                    <div className='text-center border p-4 mb-4'>
                        <span className='font-bold block mb-2'>{retorno.Promo}</span>
                        <br/>
                        <span className='italic'>Tire um print ou foto dessa tela e apresente no estabelecimento.</span>
                    </div>
                }
                
            </div>
            }
            
        </div>
    )

}

export default Pesquisa