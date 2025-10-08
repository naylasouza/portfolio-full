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
                src={assets.user_image} 
                alt="Nayla - Desenvolvedora Full-Stack" 
                className='w-full h-auto rounded-3xl'
            />
        </div>
        <div className='flex-1'>
          <p className='mb-10'> 
              Nayla, Desenvolvedora Full-Stack com foco em Front-End, formada pela FIAP.<br/>

              Com experiência no desenvolvimento de uma plataforma de empregabilidade completa, atualmente realizo projetos pontuais 
              como freelancer, atuando com metodologias ágeis e testes. Minha trajetória é marcada por resultados de excelência e inovação, o que me garantiu 
              dois prêmios acadêmicos de destaque (1º e 2º lugar em 2023/2024). 
              Sou uma profissional ambiciosa, focada em entregas e em evolução contínua. 
              
              <span className='block font-semibold text-lg'> 
                  Está buscando alguém que ama o que faz? Vamos conversar!
              </span>
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