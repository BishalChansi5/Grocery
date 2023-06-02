import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import './ProductCard.css'

const ProductCard = ({ data }) => {
  const [show, setshow] = useState(false)
  const [count, setCount] = useState(1)

  // const getproductid = () => {
  //   alert(data.id)
  // }

  const addtocart = () => {
    let cart = JSON.parse(localStorage.getItem('cart'))
    let productdata = data
    if (cart) {
      // alert('1 item is already added to cart')
      let itemincart = cart.find(item => item.productdata.ProductId === productdata.ProductId)
      if (itemincart) {
        cart = cart.map(item => {
          if (item.productdata.ProductId === productdata.ProductId) {
            return {
              ...item,
              quantity: item.quantity + count
            }
          }
          else {
            return item
          }
        })
        localStorage.setItem('cart', JSON.stringify(cart))
      }
      else {
        cart = [
          ...cart,
          {
            productdata,
            quantity: count
          }
        ]
        localStorage.setItem('cart', JSON.stringify(cart))
      }
    }
    else {
      cart = [{
        productdata,
        quantity: count
      }]

      // console.log(cart)
      localStorage.setItem('cart', JSON.stringify(cart))
    }
    // setreloadnavbar(!reloadnavbar)
    window.location.reload()
    // toast.success('Item added to cart')

  }
  return (
    <div className='product'>
        <div className='s1'>
            <img src={data.ProductImage[0].image} alt='image' />
        </div>
        <div className='s2'>
            <h3>Rs. {
                data.ProductPrice - (data.ProductPrice * data.ProductDiscount / 100)
            }
                <span>Rs. {data.ProductPrice}</span>
            </h3>
            <p>
              {data.ProductName}
            </p>
        </div>
        <div className='s3'>
            <p>{data.counttype}</p>
        </div>
       {
        show ? 
        <div className='addbtn'>
           <div className='qty'>
            <button
            onClick={() =>{
              if(count > 1)
               setCount(count-1)
            }
            
            }
            >-</button>
            <p>{count}</p>
            <button
            onClick={() => setCount(count+1)}
            >+</button>
            
           </div>
           <button className='addtocart'
            onClick={() => {
              setshow(false);
              addtocart()
            }}>
            Add <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg>

           </button>
        </div>
        :
        <div className='addbtn'>
        <Link 
        to={`/product/${data.id}`}
        >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} 
        stroke="currentColor" className="w-6 h-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        </Link>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} 
stroke="currentColor" className="w-6 h-6"
 onClick={() => setshow(true)}
>
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
</svg>

        </div>
       }
    </div>
  )
}

export default ProductCard