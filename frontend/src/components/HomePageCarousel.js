import classes from './HomePageCarousel.module.css';
import { Carousel } from "react-bootstrap";
import '../components/HomeCarousel.css'

function HomePageCarousel() {

  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src="https://events.eletsonline.com/wp-content/uploads/2020/04/education-banner-7.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className={classes.mainHeading}>Develop Extra-curricular Skills through Skill Competition</h3>
            <p className={classes.subHeading}>Get regular opportunities to showcase talent at comfort of your home and out of doors.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src="https://events.eletsonline.com/wp-content/uploads/2020/04/education-banner-7.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className={classes.mainHeading}>Find Classes offered by top Experts as per your needs & schedule</h3>
            <p className={classes.subHeading}>Learn the skills you need to live your dreams in hobby, career and life.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src="https://events.eletsonline.com/wp-content/uploads/2020/04/education-banner-7.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className={classes.mainHeading}>Obtain instant nudge from global community of skill experts</h3>
            <p className={classes.subHeading}>
              Connect with passionate experts looking to spotlight the highs and lows in your work and help you improve.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default HomePageCarousel;