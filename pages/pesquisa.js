import React, {useState} from 'react'
import PageTitle from '/components/PageTitle'
import useSWR from 'swr'
import styles from './styles.module.css'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Pesquisa = () => {

    const [form, setForm] = useState({
        Nome: '',
        Email: '',
        Whatsapp: '',
        Cupom: '',
        Promo: '',
        Nota: undefined
    });

    const [success, setSuccess] = useState(false)
    const [retorno, setRetorno] = useState({})
    const notas = [0,1,2,3,4,5]
    const [tentouEnviar, setTentouEnviar] = useState(false)

    const canSave = () => {
        const result = form.Nome !== '' && form.Email !== '' &&  form.Nota !== undefined
        console.log('canSave', result)
        return result
    }

    const salvar = async() => {

        setTentouEnviar(true)

        if (!canSave()) {
            return;
        }

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

    const {data, error} = useSWR('/api/get-promo', fetcher)
    
    return (
        <div className='pt-6'>
            <PageTitle title='Pesquisa' />
            <h1 className='font-bold text-center my-4 text-2xl'>Críticas e sugestões</h1>
            <p className='text-center mb-6'>
            {!data && 
            <p>Carregando...</p>
            }
            {!error && data && data.showCoupon && 
                 <p> <span>{data.restaurant}</span> sempre busca por atender melhor seus clientes.<br />
                 Por isso, estamos sempre abertos a ouvir a sua opinião.
                 </p>
            }
            </p>
            {!success && 
            <div>
                <div className={styles.divEntrada}>
                    <label>Seu nome:</label>
                    <input type='text' className={styles.entrada} placeholder='Nome' name='Nome' required onChange={onChange}></input>
                </div>
                {tentouEnviar && form.Nome === '' &&
                    <div className={styles.alerta}>
                         <p>Informe o Nome</p>
                     </div>
                }
                <div className={styles.divEntrada}>
                    <label>Email:</label>
                    <input type='text' className={styles.entrada} placeholder='Email' name='Email' required onChange={onChange}></input>
                </div>
                {tentouEnviar && form.Email === '' &&
                    <div className={styles.alerta}>
                        <p>Informe o Email</p>
                    </div>
                }                
                <div className={styles.divEntrada}>
                    <label>Whatsapp:</label>
                    <input type='text' className={styles.entrada} placeholder='Whatsapp' name='Whatsapp' required onChange={onChange}></input>
                </div>
                {tentouEnviar && form.Whatsapp === '' &&
                    <div className={styles.alerta}>
                        <p>Informe o Whatsapp</p>
                    </div>
                }                 
                <div className={styles.divEntrada}>
                    <label>Nota:</label>
                </div>                    
                <div className='w-60 mx-auto'>
                    <div className='flex y-6'>
                        <br/>
                        {
                        notas.map(nota=> {
                            return (
                                <label className='block w-1/6' key={nota} >{nota}<br />
                                <input type='radio' className={styles.radioEntrada} name='Nota' onChange={onChange} value={nota}/>
                                </label>
                            )}
                        )}
                    </div>
                </div>
                {tentouEnviar && form.Nota === undefined &&
                    <div className={styles.alerta} >
                        <p>Informe o Nota</p>
                    </div>
                }                  
                <button onClick={salvar} className={styles.botao}>Salvar</button>
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