import { useState } from 'react'
import { TiThMenu } from 'react-icons/ti'
import PROFILE_PHOTO from '../../public/perfil.png'

const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      {/* desktop */}
      <header className='hidden md:flex items-center justify-between px-6 py-3 w-[20%] min-w-[150px] md:w-[1024px] mx-auto'>
        <img className='rounded-full hidden md:block w-20 h-20' src={PROFILE_PHOTO.src} alt='' />
        <nav className='flex flex-col md:flex-row gap-10 opacity-80 text-white'>
          <NavItems />
        </nav>
      </header>
      {/* mobile */}
      <header className='md:hidden relative flex justify-end py-1 px-4 w-full min-w-[320px] h-[50px] mx-auto'>
        {!open ? (
          <div className='cursor-pointer' onClick={() => setOpen(true)}>
            <TiThMenu color='#fff' size={40} />
          </div>
        ) : (
          <>
            <nav className='flex flex-col px-4 py-4 rounded-l-lg absolute gap-10 z-[500] overflow-y-visible fromRightFast text-white bg-[#002C54]'>
              <NavItems />
            </nav>{' '}
            <div
              className='fixed inset-0 bg-black opacity-50 w-auto h-auto z-40'
              onClick={() => setOpen(false)}
            ></div>
          </>
        )}
      </header>
    </>
  )
}

const NavItems = () => {
  return (
    <>
      <a href='/'>Inicio</a>
      <a href='/projects'>Proyectos</a>
      <a href='/experience'>Experiencia</a>
      <a href='/education'>Formación</a>
      <a href='/services'>Servicios</a>
      <a href='/contact'>Contacto</a>
    </>
  )
}
export default Header
