import { useEffect, useState } from 'react'
import Logo from '../assets/primarylogo.png'
import './navbar.css'
import { Link } from 'react-scroll'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
  const [menu, setMenu] = useState(false)
  const [isApparelVisible, setIsApparelVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768)

  const navigate = useNavigate()
  const toggleMenu = () => {
    setMenu(prevMenu => !prevMenu)
  }
 
  const handleApparelHover = (isVisible) => {
    setIsApparelVisible(isVisible);
};
  

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className='navbarContainer'>
      {/* Logo */}
      <div>
        <img className='logoContainer' src={Logo} alt='primarylogo' />
      </div>

      {/* Navigation (Desktop) */}
      {isDesktop && (
        <div className='navigationContainer'> 
        <Link to="newin" smooth={true} duration={1000}>
          <div onClick={() => navigate('/new-in')} className='navText'>NEW IN</div>
        </Link>

          <div  className='navText' onMouseEnter={() => handleApparelHover(true)} onMouseLeave={() => handleApparelHover(false)}  >APPAREL</div> 
          {isApparelVisible &&  
             <div className='apparelList'  onMouseEnter={() => handleApparelHover(true)} onMouseLeave={() => handleApparelHover(false)}  > 
             <div  className='navText' >
              T-SHIRTS
             </div>
             <div  className='navText' >
              SHIRTS
             </div>
             <div  className='navText' >
              HOODIES
             </div>
             <div  className='navText' >
              SWEATSHIRTS
             </div>
             <div  className='navText' >
              CARGOS
             </div>
             <div  className='navText' >
              JEANS
             </div>
             <div  className='navText' >
              SHORTS
             </div>
        </div>
          }
        
          <div className='navText'>STORES</div>
        </div>
      )}

      {/* Search & Login (Always visible) */}
      <div className='searchContainer'>
        <div className='navText'>SEARCH</div>
        <div onClick={()=>{navigate('/login')}} className='navText'>LOGIN</div>
      </div>

      {/* Navigation (Mobile) */} 
      {!isDesktop &&  <div className={menu ? 'navigationContainer active' : 'navigationContainer'}>
      <Link to="newin" smooth={true} duration={1000}>
          <div className='navText'>NEW IN</div>
        </Link>
        <div className='navText'>APPAREL</div>
        <div className='navText'>STORES</div>
      </div>
      }
     

      {/* Menu Button (Mobile) */} 
      {!isDesktop &&  <div className='menuButton' onClick={toggleMenu}>
        <div className='navText'>{menu ? 'CLOSE' : 'MENU'}</div>
      </div> }
     
    </div>
  )
}
