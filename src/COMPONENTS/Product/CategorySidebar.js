import React from 'react'
import img from '../../ASSETS/vegetable.png'
import img1 from '../../ASSETS/fruits.png'
import img2 from '../../ASSETS/fish.png'
import img3 from '../../ASSETS/meat-4-512.png'
import './CategorySidebar.css'
const CategorySidebar = () => {
    const data =[
        {
            id:1,
            categoryimage: img,
            categoryname: 'category 1'
        },
        {
            id:2,
            categoryimage: img1,
            categoryname: 'category 2'
        },
        {
            id:3,
            categoryimage: img2,
            categoryname: 'category 3'
        },
        {
            id:4,
            categoryimage: img3,
            categoryname: 'category 4'
        },
        {
            id:5,
            categoryimage: img,
            categoryname: 'category 5'
        },
        {
            id:6,
            categoryimage: img,
            categoryname: 'category 6'
        },
        {
            id:7,
            categoryimage: img,
            categoryname: 'category 7'
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