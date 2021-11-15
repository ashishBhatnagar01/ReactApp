import Carousel from 'react-bootstrap/Carousel'
function SliderImages(props) {
  return (
    <div className="car">
      <Carousel variant="">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={props.src1}
            alt="First slide"
            style={{width:"1000px",height:"400px",objectFit:"cover"}}
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={props.src2}
            alt="Second slide"
            style={{width:"1000px",height:"400px",objectFit:"cover"}}
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src= {props.src3}
            alt="Third slide"
            style={{width:"1000px",height:"400px",objectFit:"cover"}}
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default SliderImages;
