import Carousel from 'react-bootstrap/Carousel';

function Banner(){
    return(
        <div>
            <Carousel data-bs-theme="dark" className='mb-5'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="image/about.jpeg"
          alt="First slide"
          style={{height:500}}
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="image/action.jpeg"
          alt="Second slide"
          style={{height:500}}
        />
        
      </Carousel.Item>
      
    </Carousel>
        </div>
    )
}
export default Banner