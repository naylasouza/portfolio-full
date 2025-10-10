"use cliente"
import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Work = () => {
  return (
    <div id='work' className='w-full px-5 lg:px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg'>Meu portfolio</h4>
      <h2 className='text-center text-5xl'>Meus últimos projetos</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-5'>
        {workData.map((project, index)=>(
            <div key={index} 
            className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group' style={{backgroundImage: `url(${project.bgImage})`}}>
                <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 
                        -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                    <div>
                        <h2 className='font-semibold'>{project.title}</h2>
                        <p className='text-sm text-gray-700'>{project.description}</p>
                    </div>
                    <div >
                        <Image src={assets.send_icon} className='w-5' alt='Icone de envio' />
                    </div>
                </div>
                
            </div>
        ))}
      </div>
      {/* Criar "ver mais" */}
    </div>
  )
}

export default Work