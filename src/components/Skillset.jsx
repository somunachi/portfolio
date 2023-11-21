    const Skillset = () => {
  return (
    <section className="skillset page-section" id='skillset'>
    <div className="main">
        <div className="skillset1">
            <p className="skillset-heading">Skill Set</p>
    
        </div>
    <div className="skill-list">
    
        <div className="html-css">
            <div className="html">
                <img src= '../assets/pictures/icons8-html-5-is-a-software-solution-stack-that-defines-the-properties-and-behaviors-of-web-page-100.png' alt="" className="skill-img html-img" />
                <p className="skill-text">HTML</p>
            </div>
    
            <div className="css">
                <img src='../assets/pictures/icons8-css3-100.png' alt="" className="skill-img css-img"/>
                <p className="skill-text1">CSS</p>
            </div>
        </div>
    
       <div className="git-js">
        <div className="git">
            <img src='../assets/pictures/icons8-git-100.png' alt="" className="git-img"/>
            <p className="skill-text2">GIT</p>
        </div>
    
        <div className="js">
            <img src='../assets/pictures/icons8-react-96.png' alt="" className="js-img"/>
            <p className="skill-text3">ReactJS</p>
        </div>
       </div>
    </div>
    
    <button type="button" className="mail-to"><a href="mailto:ezekielcourage@gmail.com" className='mailbtn'>Let's Talk</a></button>
    </div>
        </section>
  )
}

export default Skillset