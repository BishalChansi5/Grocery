import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCard from './ProductCard'
import './ProductSlider.css'
const ProductSlider = ({products,categoryname}) => {
    const responsive = {
      display6: {
        breakpoint: { max: 2000, min: 1700 },
        items: 6
    },
    display5:{
        breakpoint: { max: 1700, min: 1200 },
        items: 5
    },

    display4:{
        breakpoint: { max: 1200, min: 900 },
        items: 4
    },
    display3:{
        breakpoint: { max: 900, min: 600 },
        items: 3
    },
    display1:{
        breakpoint: { max: 600, min: 500 },
        items: 2
    },
    display0:{
        breakpoint: { max: 500, min: 0 },
        items: 1
    }
};
  return (
    <div className='productsliderout'>
        <h1>{categoryname}</h1>
        <Carousel 
       swipeable={false}
       draggable={false}
       responsive={responsive}
       ssr={true} // means to render carousel on server-side.
       infinite={true}
       autoPlay={products.deviceType !== "mobile" ? true : false}
       autoPlaySpeed={3000}
       keyBoardControl={true}
       customTransition="all .5"
       transitionDuration={500}
       containerClass="carousel-container"
       removeArrowOnDeviceType={["tablet", "mobile"]}
       deviceType={products.deviceType}
       dotListClass="custom-dot-list-style"
       itemClass="carousel-item-padding-40-px"
        >
         {products.map((item,index)=>{
            return(
                <ProductCard data={item} key={index} />
            )
         })}
        </Carousel>
    </div>
  )
}

export default ProductSlider