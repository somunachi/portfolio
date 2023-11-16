import aboutmepic from './assets/birthdaystand.png';

const Aboutme = () => {
  return (
    <section className="page-section aboutmesctn" id='aboutme'>
    <h2 className="aboutmeheading">About Me</h2>
    <div className="aboutmediv">
    <p className='about-me'>
        Hello! I am a junior web developer with an aptitude for problem solving and critical thinking. I graduated from the prestigious University of Ibadan with a degree in Physiotherapy but I started 
        my web development journey in 2022 and soon discovered that I enjoyed it.
        <br />
        <br />
        I am rather introverted but I enjoy stimulating conversations and learning new things. I also enjoy curating and creating content and I actively volunteer with the Disability Advocacy Initiative as a social media manager. Someday, I hope to work in the accessibility technology space.
        <br />
        <br />
        Amongst other things, I create fashion, lifestyle and beauty content so stay with me on this journey and let's figure out amazing things together.
     </p>

     <div className="aboutmepic">
      <img src={aboutmepic} alt="my image" className='aboutmeimg'/>
     </div>
    </div>

</section>
  )
}

export default Aboutme