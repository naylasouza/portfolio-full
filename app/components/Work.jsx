'use client'
import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Work = () => {
  return (
    <div id='work' className='w-full px-5 lg:px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg'>Meu portfólio</h4>
      <h2 className='text-center text-5xl'>Meus últimos projetos</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-5'>
        {workData.map((project, index) => (
          <a
            key={index}
            href={project.githubLink}
            target='_blank'
            rel='noopener noreferrer'
            className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group overflow-hidden'
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className='absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500'></div>
            <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 
                        -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
              <div>
                <h2 className='font-semibold'>{project.title}</h2>
                <p className='text-sm text-gray-700'>{project.description}</p>
              </div>
              <div>
                <Image src={assets.send_icon} className='w-5' alt='Ícone de envio' />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Work
