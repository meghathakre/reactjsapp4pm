import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';

const TopBan=()=>{
    return(

        <Container>

<Carousel>
      <Carousel.Item>
       <img src="public/images/r1.jpg.jpg"height="300px" width="90%"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="public/images/r1.jpg.jpg" height="300px" width="90%"/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="public/images/r1.jpg.jpg"height="300px" width="90%"/>
      
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </Container>
    )
}
export default TopBan;