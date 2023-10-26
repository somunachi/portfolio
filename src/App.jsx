import pic1 from './assets/icons8-html-5-is-a-software-solution-stack-that-defines-the-properties-and-behaviors-of-web-page-100.png';
import pic2 from './assets/icons8-css3-100.png';
import pic3 from './assets/icons8-git-100.png';
import igclone from './assets/ig-clone.png';
import googlesearch from './assets/google-search.png';
import udemy from './assets/udemy-pic.png';
import netflix from './assets/Capture.png';
import messi from './assets/lionel-messi-search.png';
import reactpic from './assets/icons8-react-96.png';
import loanify from './assets/loanifypic.png';
import growviral from './assets/growviral.png';
import Navbar from './Navbar';
import {HouseHeart, Tools, Telephone, Terminal, FileEarmarkPerson } from 'react-bootstrap-icons';
import React from 'react';
// import {Link} from 'react-router-dom';
import Aboutme from './Aboutme';

// import newNav from './Nav2';


function App() {

 
  return (
   <body>
  <section className="page-section">
  <div className="hero">
    <Navbar/>
      <div id="overlay"> </div>
        <div className="content">
            <h4>Hello, my name is </h4>
            <h1 id="name-change">Courage<span className='span'> Ezekiel</span></h1>
            <h3>I am a Front-End Developer. </h3>
        </div>

        <div className="scroll-menu">
            <div className="home-div">
                <span className='tooltip'>Home</span>
                <div className="home">
                    <HouseHeart size={20} color='white'/>
                </div>
            </div>

            
            <div className="abt">
                <FileEarmarkPerson size={20} color='white'/>
                
            </div>

            <div className="tools">
                <Tools size={20} color='white'/>
            </div>

            <div className="projects-sctn">
                <Terminal size={20} color='white'/>
            </div>

            <div className="contactme">
                <Telephone size={20} color='white'/>
            </div>
        </div>
</div>
  </section>

    <Aboutme />


   {/* <section className="aboutme-mobile">
    <div className="aboutme-mobile">
        <h2 className="aboutmeheading-mobile">
            About Me
        </h2>

        <p>
            Hello! I am a junior web developer with a knack for problem solving and critical thinking. I graduated from the prestigious University of Ibadan with a degree in Physiotherapy but I started 
            my web development journey out of curiousity in 2021 and soon discovered that I enjoyed it. <br />
            I am rather introverted but I enjoy stimulating conversations and learning new things. I also enjoy curating and creating content and I actively volunteer with the Disability Advocacy Initiative as a social media manager. Someday, I hope to work in the accessibility technology space.
            Amongst other things, I create fashion, lifestyle and beauty content so stay with me on this journey and let's figure out amazing things together.  
        </p>
    </div>

   
   </section> */}
    {/* <!-- skill set section starts here --> */}
    <section className="skillset page-section">
<div className="main">
    <div className="skillset1">
        <p className="skillset-heading">Skill Set</p>

    </div>
<div className="skill-list">

    <div className="html-css">
        <div className="html">
            <img src= {pic1} alt="" className="skill-img html-img" />
            <p className="skill-text">HTML</p>
        </div>

        <div className="css">
            <img src={pic2} alt="" className="skill-img css-img"/>
            <p className="skill-text1">CSS</p>
        </div>
    </div>

   <div className="git-js">
    <div className="git">
        <img src={pic3} alt="" className="git-img"/>
        <p className="skill-text2">GIT</p>
    </div>

    <div className="js">
        <img src={reactpic} alt="" className="js-img"/>
        <p className="skill-text3">ReactJS</p>
    </div>
   </div>
</div>

<button type="button" className="mail-to"><a href="mailto:ezekielcourage@gmail.com" className='mailbtn'>Let's Talk</a></button>
</div>
    </section>

    {/* <!-- skill set section ends here  -->

    <!-- projects section starts here  --> */}

    <section className="projects-section page-section">
        <div className="project-heading">
            <h1 className="project-h1">Projects:</h1>
            <h3>Clones:-</h3>
        </div>
{/* <!-- carousel begins -->
        
<!-- carousel ends --> */}
        <div className="project-images">
            <div className="clones">
                <div className="projects-img">
                    <img src={udemy} alt="" className="clone-img"/>
                </div>

                <div className="clone-desc">
                    <button className='project-btn'> <a href="https://github.com/somunachi/STUTERN-CSS/tree/youdemy_landing_page" target="_blank" className="clone-link">Github</a></button>
                    <button className='project-btn'><a href="https://velvety-florentine-670ed1.netlify.app/" target="_blank" className="clone-link">Demo </a></button>
                </div>
            </div>

            <div className="clones">
                <div className="projects-img">
                    <img src={igclone} alt="" className="clone-img"/>
                </div>

                <div className="clone-desc">
                    <button className='project-btn'><a href="https://github.com/somunachi/STUTERN-CSS/tree/CourageInstaClone" className="clone-link">Github </a></button>
                    <button className='project-btn'><a href="https://candid-genie-c0c7ed.netlify.app/" className="clone-link" target='_blank'>Demo </a></button>
                </div>
            </div>

            <div className="clones">
                <div className="projects-img">
                    <img src={googlesearch} alt="" className="clone-img" />
                </div>

                <div className="clone-desc">
                    <button className='project-btn'> <a href="https://github.com/somunachi/STUTERN-CSS/tree/google-search" className="clone-link">Github</a></button>
                    <button className='project-btn'> <a href="https://timely-bublanina-0a58f0.netlify.app/" className="clone-link" target="_blank">Demo</a></button>
                </div>
            </div>

            <div className="clones">
                <div className="projects-img">
                    <img src={netflix} alt="" className="clone-img"/>
                </div>

                <div className="clone-desc">
                    <button className='project-btn'> <a href="https://github.com/somunachi/STUTERN-CSS/tree/netflix_web_clone" target="_blank" className="clone-link">Github</a></button>
                    <button className='project-btn'> <a href="https://coruscating-kitsune-b8570d.netlify.app/" target="_blank" className="clone-link">Demo</a></button>
                </div>
            </div>

            <div className="clones">
                <div className="projects-img">
                    <img src={messi} alt="" className="clone-img"/>
                </div>

                <div className="clone-desc">
                    <button className='project-btn'><a href="https://github.com/somunachi/Redesign-Team" target="_blank" className="clone-link">Github</a></button>
                    <button className='project-btn'> <a href="https://teal-tarsier-8abcac.netlify.app/" target="_blank" className="clone-link">Demo</a></button>
                </div>
            </div>
        </div>


        <h3 className="javascript-projects">React Projects</h3>


        <div className="project-images1">

            <div className="clones js-clones">
                <div className="projects-img">
                    <img src={loanify} alt="my stopwatch app" className="clone-img"/>
                </div>

                <div className="clone-desc">
                    <button className='project-btn'> <a href="https://github.com/somunachi/LoanifyApp.git" target="_blank"  className="clone-link">Github</a></button>
                    <button type='button' className='project-btn'> <a href="https://loanify-app.vercel.app"  className="clone-link" target="_blank">Demo</a></button>
                </div>

            </div>

             <div className="clones">
                <div className="projects-img timer-img">
                    <img src={growviral} alt="" className="clone-img"/>
                </div>

                <div className="clone-desc">
                    <button className='project-btn'> <a href="https://github.com/somunachi/GrowViral.git" target="_blank"  className="clone-link">Github</a></button>
                    <button type='button' className='project-btn'> <a href="https://grow-viral.vercel.app/" className="clone-link" target="_blank">Demo</a></button>
                </div>
            </div>
            {/*
            https://grow-viral.vercel.app/
            <div className="clones">
                <div className="projects-img digclock-img">
                    <img src={digitalclock} alt="" className="clone-img"/>
                </div>

                <div className="clone-desc">
                    <p>Tap to see my <a href="https://shimmering-gaufre-bd33f8.netlify.app" className="clone-link">Digital Clock</a></p>
                </div>
            </div> */}
        </div>
    </section>
{/* 
    <section className="reach-me page-section">
       <div className="reach-me-message">
        <h3>I'm currently accepting entries to create a homepage for five businesses for free. <br/> Enter your email below if you are interested.</h3>
       </div>
        <div className="newsletter">
            <form action="">
                <input type="email" name="email" id="mail" placeholder="Enter Your Email"/>
                <input type="submit" name="submit" value="Subscribe"/>
            </form>
        </div>
       
    </section> */}

    <section className="connect page-section">
        <h2>Connect with me</h2>
        <div className="socialmedia">
            <a href="mailto:ezekielcourage@gmail.com"><i className="fa-solid fa-envelope"></i></a>
            <a href="https://www.linkedin.com/in/courage-ezekiel-712253174"><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://wa.me/message/GDDRA3P7BQTKP1"><i className="fa-solid fa-phone"></i></a>
           

        </div>
    </section>
   </body>
  )
}

export default App
