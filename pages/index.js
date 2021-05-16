import React from 'react'
import Link from 'next/link'

const Index = () => {
    return (
        <React.Fragment>
            <div className='container font-bold text-center'>
                <div className='font-bold text-center mt-12'>
                    <p>
                    O restaurante (Ler da Planilha) sempre busca por atender melhor seus clientes.<br />
                    Por isso, estamos sempre abertos a ouvir a sua opinião.
                    </p>
                </div>
                <div className='text-center mt-12'>
                    <Link href='/pesquisa'>
                        <a className='bg-blue-400 px-12 py-6 text-2xl rounded-lg shadow-lg hover:shadow'>
                            Dar a opinião ou sugestão
                        </a>
                    </Link>
                </div>
                <div className='text-gray-400 my-4 italic mt-12'>
                    (Texto dinâmico da planilha)
                </div>
            </div>
        </React.Fragment>
    );
}

export default Index