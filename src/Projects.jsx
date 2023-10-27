import igclone from './assets/ig-clone.png';
import googlesearch from './assets/google-search.png';
import udemy from './assets/udemy-pic.png';
import netflix from './assets/Capture.png';
import messi from './assets/lionel-messi-search.png';
import loanify from './assets/loanifypic.png';
import growviral from './assets/growviral.png';

const Projects = () => {
  return (
    <section className="projects-section page-section" id='projects'>
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
  )
}

export default Projects