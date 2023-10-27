import Navbar from './Navbar';
import ScrollMenu from './ScrollMenu';
import Content from './content';


const Hero = () => {
  return (
    <section className="page-section" id='Home'>
        <div className="hero">
            <Navbar />
            <Content />
            <ScrollMenu />
        </div>
    </section>
  )
}

export default Hero