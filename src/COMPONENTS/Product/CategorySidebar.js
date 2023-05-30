import React from 'react'
import img from '../../ASSETS/vegetable.png'
import img1 from '../../ASSETS/fruits.png'
import img2 from '../../ASSETS/fish.png'
import img3 from '../../ASSETS/meat-4-512.png'
import img4 from '../../ASSETS/grocery.png'
import img5 from '../../ASSETS/baby.png'
import img6 from '../../ASSETS/beverage.jpeg'
import './CategorySidebar.css'
const CategorySidebar = () => {
    const data =[
        {
            id:1,
            categoryimage: img,
            categoryname: 'Vegetables'
        },
        {
            id:2,
            categoryimage: img1,
            categoryname: 'Fruits'
        },
        {
            id:3,
            categoryimage: img2,
            categoryname: 'Sea Food'
        },
        {
            id:4,
            categoryimage: img3,
            categoryname: 'Meat'
        },
        {
            id:5,
            categoryimage: img4,
            categoryname: 'Grocery'
        },
        {
            id:6,
            categoryimage: img5,
            categoryname: 'Baby Care'
        },
        {
            id:7,
            categoryimage: img6,
            categoryname: 'Beverage'
        },
    ]
  return (
    <div className='categorysidebar'>
        {
            data.map((item) => {
                return(
                    <div className='category'>
                      <img src={item.categoryimage} alt='categoryimage' />
                      <h3>
                        {item.categoryname}
                      </h3>
                    </div>
                )
            })
        }
    </div>
  )
}

export default CategorySidebar