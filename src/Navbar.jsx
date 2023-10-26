import React, {useState} from 'react'

const Navbar = () => {
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const updateMenu = () => {
        if(!isMenuClicked){
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else{
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }


        setIsMenuClicked(!isMenuClicked)
    }
  return (
       <div>
          <nav>
            
            <a href="google.com" className="logo">Courage's <span className='span'>Port</span>folio</a>

            {/* <div className='burger-menu'  onClick={updateMenu}>
              <div className={burger_class}>
              <div className='burger-bars'></div>
              <div className='burger-bars'></div>
              <div className='burger-bars'></div>
              </div>
              <span className='tooltip'>Menu</span>
             
            </div> */}
            
        </nav> 

       <div className="menu-container">
         
                { isMenuClicked? 
                <ul className={menu_class} id='menu-list'>
                          <li className='nav-item'><a href="#" className='nav-link'>Home</a></li>
                          <li className='nav-item'><a href="#" className='nav-link'>Hire Me</a></li>
                          <li className='nav-item'><a href="#" className='nav-link'>Projects</a></li>
                          <li className='nav-item'><a href="#" className='nav-link'>Book a call</a></li>
                        
                  </ul> 
                  :
                   null

                    }
             
       </div>
       </div>
          
  )
}

export default Navbar