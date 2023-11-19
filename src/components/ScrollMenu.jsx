import {HouseHeart, Tools, Telephone, Terminal, FileEarmarkPerson } from 'react-bootstrap-icons';
// import { Link } from 'react-router-dom';


const ScrollMenu = () => {
  return (
    <div className="scroll-menu">
    <div className="home-div">
        <span className='tooltip'>Home</span>
        <div className="home">
            <a href='#Home'> <HouseHeart size={20} color='white'/></a>
           
        </div>
    </div>

    <div className="abt">
        <a href='#aboutme'><FileEarmarkPerson size={20} color='white'/></a>
        
    </div>

    <div className="tools">
        <a href='#skillset'><Tools size={20} color='white'/></a>
    </div>

    <div className="projects-sctn">
        <a href="#projects"><Terminal size={20} color='white'/></a>
    </div>

    <div className="contactme">
        <a href="#connect"><Telephone size={20} color='white'/></a>
    </div>
</div>
  )
}

export default ScrollMenu