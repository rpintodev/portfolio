import {projects} from '../constants'
import {Tilt} from 'react-tilt';
import {motion} from 'framer-motion'
import {styles } from '../style'
import {github} from '../assets'
import {fadeIn,textVariant} from '../utils/motion'
import Slider from 'react-slick';
import {SectionWrapper} from '../hoc'


const ProyectCard = ({index,name,description,tags,image,source_code_link})=> {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };
  return(
    <motion.div variants={fadeIn('up','spring',index*0.5,0.75)}>
      <Tilt
        options={{max:45, scale:1,speed:450}}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full' 
      >
      <div className='relative w-full h-[230px]'>
        
      <Slider {...sliderSettings}>
            {image.map((img, i) => (
              <div key={i}>
                <img
                  src={img}
                  alt={`${name} image ${i}`}
                  className='w-full h-[230px] object-contain rounded-2xl'
                />
              </div>
            ))}
          </Slider>
        <div className='absolute inset-0 flex 
        justify-end m-3 card-img_hover'>
          <div
            onClick={()=> window.open(source_code_link,'_blank')}
            className='black-gradien w-10 h-10 rounded-full flex justify-center
            items-center cursor-pointer'
          >
            <img src={github} alt='github' className='w-1/2 h-1/2  object-contain' />
          </div>
        </div>
        
      </div>
      <div className='mt-5'>
          <h5 className='text-white font-bold text-[24px]'>{name}</h5>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
      <div className='mt-4 flex flex-wrap gap-2'>
        {tags.map((tag) =>(
          <p key={tag.name} className={`text=[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
      </Tilt>

    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variant={textVariant()}>
        <p  className={styles.sectionSubText}>
          Mi trabajo
        </p>
        <h2 className={styles.sectionHeadText}>
          Proyectos
        </h2>
      </motion.div>
      <div className='w-full flex'>
    <motion.p
      variant = {fadeIn('','',0.1)}
        className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Estos proyectos reflejan mis habilidades y experiencia a 
        través de soluciones a problemas reales. Cada uno incluye una
         descripción destacando sus características principales, 
         las tecnologías utilizadas y un enlace al repositorio en GitHub.
      </motion.p>
      </div>
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((proyect,index)=>(
          <ProyectCard 
          key={`proyect-${index}`}
          index = {index}
          {...proyect}
          />
        ))}
      </div>
    </>

  )
}

export default SectionWrapper ( Works, '')