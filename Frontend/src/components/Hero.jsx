import { Link } from "react-scroll"
function Hero() {
  return (
    <section className='hero'>
      <div className="item">
        <h3>Dream Maker</h3>
        <div>
          <h1>Your personal Dream Maker</h1>
          <p>we believe in good services!</p>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            Book Now
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero