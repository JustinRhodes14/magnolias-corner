import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import art1 from '/Users/rhodes/Projects/magnoliasCorner/magnolias-corner/src/pictures/art1.jpeg';
import art2 from '/Users/rhodes/Projects/magnoliasCorner/magnolias-corner/src/pictures/art2.jpeg';
import art3 from '/Users/rhodes/Projects/magnoliasCorner/magnolias-corner/src/pictures/art3.jpeg';
import art4 from '/Users/rhodes/Projects/magnoliasCorner/magnolias-corner/src/pictures/art4.jpeg';
import art5 from '/Users/rhodes/Projects/magnoliasCorner/magnolias-corner/src/pictures/art5.jpeg';
// TODO: Might need to set rules for how wide captions and items can be

function Gallery() {
  return (
    <Carousel>
      <Carousel.Item interval={5000}> 
        <Image src={art1} alt='Art Piece #1' width={'756px'} height={'756px'}/>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <Image src={art2} alt='Art Piece #2' width={'756px'} height={'756px'}/>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <Image src={art3} alt='Art Piece #3' width={'756px'} height={'756px'}/>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <Image src={art4} alt='Art Piece #4' width={'756px'} height={'756px'}/>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <Image src={art5} alt='Art Piece #5' width={'756px'} height={'756px'}/>
      </Carousel.Item>
    </Carousel>
  );
}

export default Gallery;