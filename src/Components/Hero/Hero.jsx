import './Hero.css'
import profileImg from '../../assets/profile_img.svg'

const Hero = () => {
  return (
    <section className="hero">
      <img src={profileImg} alt="Profile of Kavindu Theekshana" />
      <h1><span>I&apos;m Kavindu Theekshana, </span>a web developer from Sri Lanka</h1>
      <p>
        I am a Software Developer with web development experience, currently
        pursuing a BSc in Information Technology and focused on building
        expertise in modern programming and application development.
      </p>
      <div className="hero-actions">
        <button className="hero-connect">Connect with me</button>
        <button className="hero-resume">My Resume</button>
      </div>
    </section>
  )
}

export default Hero
