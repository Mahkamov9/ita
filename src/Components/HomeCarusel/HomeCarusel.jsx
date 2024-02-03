import React, {useState} from "react";
import Carousel from 'react-bootstrap/Carousel';

import Rasm from '../../Assets/Img/ita-logo.png';

const data = [
  {
   image: Rasm,
   caption:"Caption",
   description:"Description Here"
  },
  {
    image: Rasm,
    caption:"Caption",
    description:"Description Here"
   },
   {
    image: Rasm,
    caption:"Caption",
    description:"Description Here"
   }
]

function HomeCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className="w-50 h-50 bg-light rounded" activeIndex={index} onSelect={handleSelect}>
       {data.map((slide, i) => {
        return (
          <Carousel.Item className="text-center ">
              <div className="carusel_text">
                <b className="carusel_text">Lorem, ipsum dolor.</b>
                <p>Lorem, ipsum.</p>
                <i>Lorem ipsum dolor sit.</i>
              </div>
          </Carousel.Item>
        )
      })}

    </Carousel>
  );
}
export default HomeCarousel;