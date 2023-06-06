import React from 'react'
import Slider from 'react-slick'
import img from '../../ASSETS/img.jpg'
import img1 from '../../ASSETS/img1.jpg'
import img2 from '../../ASSETS/img2.jpg'
import img3 from '../../ASSETS/img3.jpg'
import img4 from '../../ASSETS/img4.jpg'
import img5 from '../../ASSETS/img5.jpg'
import img6 from '../../ASSETS/img6.jpg'
import './BannerSlider.css'


const BannerSlider = () => {
    const data = [
        {
            id:1,
            image: img1,
            title: 'Find Happiness With Us. Happy shopping!',
            description: 'Don’t worry. We have everything you need. We focus on what you need',
            button: 'https://www.google.com'

        },
        {
            id:2,
            image: img,
            title: 'Find Happiness With Us. Happy shopping!',
            description: 'Don’t worry. We have everything you need. We focus on what you need',
            button: 'https://www.google.com'

        },
        {
            id:3,
            image: img2,
            title: 'Find Happiness With Us. Happy shopping!',
            description: 'Don’t worry. We have everything you need. We focus on what you need',
            button: 'https://www.google.com'

        },
        {
            id:4,
            image: img3,
            title: 'Find Happiness With Us. Happy shopping!',
            description: 'Don’t worry. We have everything you need. We focus on what you need',
            button: 'https://www.google.com'

        },
        {
            id:5,
            image: img4,
            title: 'Find Happiness With Us. Happy shopping!',
            description: 'Don’t worry. We have everything you need. We focus on what you need',
            button: 'https://www.google.com'

        },
        {
            id:6,
            image: img5,
            title: 'Find Happiness With Us. Happy shopping!',
            description: 'Don’t worry. We have everything you need. We focus on what you need',
            button: 'https://www.google.com'

        },
        {
            id:7,
            image: img6,
            title: 'Find Happiness With Us. Happy shopping!',
            description: 'Don’t worry. We have everything you need. We focus on what you need',
            button: 'https://www.google.com'

        }
     ]

     var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

  return (
    <div className='bannerslider'>
       <Slider className='bannerslider'{...settings} 
       
       >
         {
            data.map(item=>{
                return(
                    <div className='imagecont' key={item.id}>
                        <img src={item.image}  alt='noting' loading='priority'/>
                        <div className='content'>
                            <h1>{item.title}</h1>
                            <span>{item.description}</span>
                            <button>Shop More</button>
                        </div>
                    </div>
                )
            })
         }
       </Slider>
    </div>
  )
}

export default BannerSlider