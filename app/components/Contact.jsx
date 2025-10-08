
"use client"
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'

const Contact = () => {

    const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Enviando....");
    const formData = new FormData(event.target);

    formData.append("access_key", "23df96c6-e6ce-44be-a522-4cdc8310667f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Formulário enviado com sucesso");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };



  return (
    <div id="contact" className='w-full px-[12%] py-20 scroll-mt-20 
                    bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-contain'>
        
        <h4 className='text-center mb-2 text-lg'>Contato</h4>
        <h2 className='text-center text-5xl'>Entre em contato</h2>

        <form onSubmit={onSubmit} className='max-w-xl mx-auto mt-10 '> 
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4'>
                <input 
                    type="text" 
                    placeholder='Seu nome' 
                    required 
                    className='p-3 outline-none border-[1.5px] border-gray-300 rounded-lg focus:border-gray-700 transition duration-300'
                    name='name'
                />
                <input 
                    type='email' 
                    placeholder='Seu email' 
                    required
                    className='p-3 outline-none border-[1.5px] border-gray-300 rounded-lg focus:border-gray-700 transition duration-300'
                    name='email'
                />
            </div>
            <textarea 
                rows='6' 
                placeholder='Sua mensagem' 
                required 
                className='w-full p-4 outline-none border-[1.5px] border-gray-300 rounded-lg focus:border-gray-700 transition duration-300 mb-6'
                name='message'
            ></textarea>
            <button 
                type='submit' 
                className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500'>
                Enviar<Image src={assets.right_arrow_white} alt='' className='w-4' />

                
            </button>
            <p className='mt-8'>{result}.</p>
        </form>
    </div>
  )
}

export default Contact