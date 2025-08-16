import { motion } from 'framer-motion';
import { styles } from '../style';
import { ComputersCanvas } from './canvas';
const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute 
        inset-0 top-[80px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
            <div className='w-1 sm:h-80 h-40 violet-gradient'/>
          </div>
          <div>
              <h1 className={`${styles.heroHeadText}`}>Hola, soy <span className='text-[#915eff]'> Ricardo </span></h1>
              <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                
                <span className='text-[#915eff]'> Soy Ingeniero en TI y desarrollador de sofware </span>
                con +3 años de experiencia en el desarrollo de aplicaciones web y móviles, especializado en
                <span className='text-[#915eff]'>  backends robustos y </span> 
                <br className='sm:block hidden' />  
                <span className='text-[#915eff]'>frontend atractivos, </span>
               para ofrecer soluciones innovadoras.
                <br className='sm:block hidden' />
                </p>            
            </div>

        </div>
        <ComputersCanvas/>
        <div className='absolute xs:bottom-10 bottom-25 w-full flex justify-center items-center'>
          <a href='#about'>
            <div className='w-[25px] h-[50px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2'>
              <motion.div
                animate = {{
                  y: [0,18,0]
                }}
                transition = {{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'Loop',

                }}
                className= 'w-2 h-2 rounded-full bg-secondary mb-1'
              />
            </div>
          </a>
        </div>
    </section>
  )
}

export default Hero 