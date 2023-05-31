import React from 'react'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import BannerSlider from '../../COMPONENTS/Banners/BannerSlider'
import HomeCategories from '../../COMPONENTS/Category/HomeCategories'
import Product_Sidebar from '../../COMPONENTS/Product/Product_Sidebar'
import Footer1 from '../../COMPONENTS/Footer/Footer1'
import Footer2 from '../../COMPONENTS/Footer/Footer2'
import img2 from '../../ASSETS/img(1).jpg'
import img13 from '../../ASSETS/img(2).png'
import img14 from '../../ASSETS/img(3).webp'
import img4 from '../../ASSETS/img(4).jpg'
import img5 from '../../ASSETS/img(5).jpg'
import img6 from '../../ASSETS/img(6).jpeg'
import img7 from '../../ASSETS/img(7).jpeg'
import img8 from '../../ASSETS/img(8).jpg'
import img9 from '../../ASSETS/img(9).jpg'
import img10 from '../../ASSETS/img(10).jpg'
import img11 from '../../ASSETS/img(11).webp'
import img12 from '../../ASSETS/img(12).jpg'
import ProductSlider from '../../COMPONENTS/Product/ProductSlider'

const Home = () => {
  const products = [
    {
        id:1,
        productimage:img2,
        productname: 'Dairy Milk',
        productprice: 280,
        counttype: '1 each',
        discountpercent: 0
    },
    {
        id:2,
        productimage:img13,
        productname: 'Wai Wai Noodles',
        productprice: 20,
        counttype: 'Per Packet',
        discountpercent: 0
    },
    {
        id:3,
        productimage:img14,
        productname: 'Oreo',
        productprice: 320,
        counttype: '1 each',
        discountpercent: 5
    },
    {
        id:4,
        productimage:img4,
        productname: 'Ramen Noodles',
        productprice: 200,
        counttype: 'Per Packet',
        discountpercent: 10
    },
    {
        id:5,
        productimage:img5,
        productname: 'Chicken Sausage',
        productprice: 380,
        counttype: 'Per Pack',
        discountpercent: 12
    },
    {
        id:6,
        productimage:img6,
        productname: 'Cutton-Candy Ice-cream',
        productprice: 420,
        counttype: '500 ml',
        discountpercent: 10
    },
    {
        id:7,
        productimage:img7,
        productname: 'Amul Butter',
        productprice: 370,
        counttype: '1/2 kg',
        discountpercent: 10
    },
    {
        id:8,
        productimage:img8,
        productname: 'Kimchi',
        productprice: 220,
        counttype: '250 gram',
        discountpercent: 8
    },
    {
        id:9,
        productimage:img9,
        productname: 'Soft Drinks',
        productprice: 260,
        counttype: '2.2 Liter',
        discountpercent: 8
    },
    {
        id:10,
        productimage:img10,
        productname: 'Spices',
        productprice: 140,
        counttype: '250 gram',
        discountpercent: 10
    },
    {
        id:11,
        productimage:img11,
        productname: 'Rice',
        productprice: 280,
        counttype: '2 kg',
        discountpercent: 12
    },
    {
        id:12,
        productimage:img12,
        productname: 'Strawberry',
        productprice: 350,
        counttype: '500 gram',
        discountpercent: 12
    }
]
  return (
    <div>
      <Navbar/>
      <BannerSlider/>
      <HomeCategories/>
      <Product_Sidebar/>
      <div className='slidercont'>
      <ProductSlider products={products} categoryname='Related Products'/>
     </div>
     <div className='slidercont'>
      <ProductSlider products={products} categoryname='Explore More'/>
     </div>
      <Footer1/>
      <Footer2/>
    </div>
  )
}

export default Home