import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCard from './ProductCard'
import './ProductSlider.css'
const ProductSlider = ({products,categoryname}) => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 4,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 3,
          slidesToSlide: 1 // optional, default to 1.
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
         {products.map((item)=>{
            return(
                <ProductCard data={item} key={item.id} />
            )
         })}
        </Carousel>
    </div>
  )
}

export default ProductSlider