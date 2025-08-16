import React from 'react'
import {useState, useRef } from 'react';
import {motion} from 'framer-motion';
import emailjs from '@emailjs/browser';
import {styles} from '../style';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import {slideIn} from '../utils/motion';


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

  };
  const handleSunmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_g9nlpeg',
      'template_0xk270e',
    {
      from_name: form.name,
      to_name: 'Ricardo',
      from_email: form.email,
      to_email: 'ricardofpm_20@hotmail.com',
      message: form.message,
    },
    'huJ2tMxnDcXEfjXc8'
    ).then(() => {
      setLoading(false);
      alert('Gracias por contactarme! Te responderé lo antes posible.');
      setForm({
        name: '',
        email: '',
        message: '',
      });
    },(error)=>{
      setLoading(false);
      alert('Algo salió mal. Por favor, inténtalo de nuevo más tarde.');  
    })
  };

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Ponte en contacto conmigo!</p>
        <h3 className={styles.sectionHeadText}>Contacto</h3>

        <form
          ref={formRef}
          onSubmit={handleSunmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Nombre</span>
            <input
              type="text"
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder='Cómo te llamas?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-g outline-none border-none font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Email</span>
            <input
              type="email"
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='Cuál es tu email?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-g outline-none border-none font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Mensaje</span>
            <textarea
              rows='7'
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Qué proyecto tienes en mente?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-g outline-none border-none font-medium'
            />
          </label>
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
          >
            {loading ? 'Enviando..' : 'Enviar'}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact,'contact');