import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import PageTitle from '/components/PageTitle'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {

    //TODO: centralizar o código da obtenção do nome!
    const {data, error} = useSWR('/api/get-promo', fetcher)

    return (
        <React.Fragment>
            <PageTitle title='Seja bem-vindo!' />
            <div className='container font-bold text-center'>
                <div className='font-bold text-center mt-12'>
                {!data && 
                <p>Carregando...</p>
                }
                {!error && data && data.showCoupon && 
                 <p> <span>{data.restaurant}</span> sempre busca por atender melhor seus clientes.<br />
                 Por isso, estamos sempre abertos a ouvir a sua opinião.
                 </p>
                 }
                </div>
                <div className='text-center mt-12'>
                    <Link href='/pesquisa'>
                        <a className='bg-blue-400 w-80 mx-auto px-12 py-6 text-lg rounded-lg shadow-lg hover:shadow'>
                            Dar a opinião ou sugestão
                        </a>
                    </Link>
                </div>
                <div className='text-gray-400 my-4 italic mt-12'>
                    {!data && 
                    <p>Carregando...</p>
                    }
                    {!error && data && data.showCoupon && 
                        <p>{data.message} </p>
                    }
                </div>
            </div>
        </React.Fragment>
    );
}

export default Index