"use cliente"
import { assets, infoList } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

function About() {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20 '>
      <h4 className='text-center m-b-2 text-lg mt-10'>Introdução</h4>
      <h2 className='text-center text-5xl'>Sobre mim</h2>

      <div className='flex w-full flex-col lg:flex-row gap-20 my-20'>
        <div className='w-full lg:w-1/3 max-w-sm mx-auto rounded-3xl mt-10 lg:mt-0 relative'> 
            <Image 
                src={assets.user_profile} 
                alt="Nayla - Desenvolvedora Full-Stack" 
                className='w-full h-auto rounded-3xl'
            />
        </div>
        <div className='flex-1'>
          <p className='mb-10'> 
              Desenvolvedora Full Stack com foco em Front-End, formada pela FIAP e com experiência na criação de sites, sistemas e plataformas web.
<br/>
<br/>
              Trabalho com React, Next.js, TypeScript e JavaScript, desenvolvendo projetos com código limpo, estrutura escalável e foco em manutenção a longo prazo. Também aplico técnicas de SEO para melhorar o posicionamento dos projetos nos buscadores e utilizo minha formação em UX para criar interfaces mais intuitivas e funcionais.
<br/>
<br/>
              Ao longo da minha trajetória, participei de projetos para diferentes necessidades e segmentos, sempre buscando soluções práticas, bem construídas e alinhadas aos objetivos do negócio.
          </p>
          
          <ul className='grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl'> 
              {infoList.map(({icon, iconDark, title, description}, index)=>(
                <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer duration-500 hover:bg-[#fcf4ff] 
                      hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),_3px_3px_0_0_rgba(0,0,0,1)] 
                      hover:-translate-y-1'
                  key={index}>
                  <Image src={icon} alt={title} className='w-7 mt-3'/>
                  <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                  <p className='text-gray-600 text-sm'>{description}</p>
                </li>
              ))}
           </ul>
        </div>
      </div>
    </div>
  )
}

export default About