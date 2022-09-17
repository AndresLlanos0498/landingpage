import React, { useRef } from 'react'
import Carousel from 'react-tiny-slider'

const blocks = ['https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 
                'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 
                'https://images.pexels.com/photos/251225/pexels-photo-251225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 
                'https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                'https://images.pexels.com/photos/5935791/pexels-photo-5935791.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940']


const Carouselito = () => {
  const carousel = useRef(null)

  const response = {
    '300': {
      'items': 1
    },
    '700': {
      'items': 2
    },
    '1024': {
      'items': 3
    }
  }

  return (
     <div className="__carousel">
      <Carousel 
        responsive={response}
        swipeAngle={false}
        lazyload={true}
        gutter={6}
        edgePadding={7}
        items ={3}
        mouseDrag={true}
        autoplay={1}
        ref={carousel}
        controls={false}
        autoplayButtonOutput={false}
        autoplayButton={false}
        nav={false}
        onClick={(slideIndex, info, event) => {
          console.log(slideIndex, info, event)
        }}
      >
        {blocks.map((block) => {
          return <div
            className={'__carousel__container'}
            
          >
            <img 
            className={'tns-lazy-img'} 
            data-src={block}
            src=""
            alt="andresllanos"
            style={{objectFit: "cover", height:"640px", maxHeight:"640px", backgroundColor: "white", width: "100%", marginTop: "5px",
            borderRadius:"5px"}}/>
            
          </div>
        })}
      </Carousel>
      
    </div>
  );
};

export default Carouselito;
