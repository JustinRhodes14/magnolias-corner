import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import jack1 from '/Users/rhodes/Projects/magnoliasCorner/magnolias-corner/src/pictures/jack-1.jpg';
import jack2 from '/Users/rhodes/Projects/magnoliasCorner/magnolias-corner/src/pictures/jack-2.jpg';
import jack3 from '/Users/rhodes/Projects/magnoliasCorner/magnolias-corner/src/pictures/jack-3.jpg';

// TODO: Images need to be sized to consistent dimensions, should be easy though with Charlottes drawings
// Might need to set rules for how wide captions and items can be
// Of course some styling will need to be added

function Gallery() {
  return (
    <Carousel>
      <Carousel.Item interval={5000}> 
        <img src={jack1} alt='Jack #1' width={'456px'} height={'456px'}/>
        <Carousel.Caption>
          <h3>Geseki</h3>
          <p>Adorable though</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img src={jack2} alt='Jack #2' width={'456px'} height={'456px'}/>
        <Carousel.Caption>
          <h3>Fat ass</h3>
          <p>Ung</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img src={jack3} alt='Jack #3' width={'456px'} height={'456px'}/>
        <Carousel.Caption>
          <h3>Hoe</h3>
          <p>But he's our baby</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Gallery;