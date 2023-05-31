import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import img2 from '../../ASSETS/img(1).jpg'
import img1 from '../../ASSETS/dairy1.jpg'
import img3 from '../../ASSETS/dairy2.jpg'
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
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import './ProductPage.css'
import Footer1 from '../../COMPONENTS/Footer/Footer1'
import Footer2 from '../../COMPONENTS/Footer/Footer2'
import ProductSlider from '../../COMPONENTS/Product/ProductSlider'

const ProductPage = () => {
  const {prodid} = useParams()
  const [imageset, setimageset] = React.useState(null)
  const [productdata, setproductdata] = React.useState([])
  const [activeimg, setactiveimg] = React.useState({})
  const [count, setcount] = React.useState(1)
  const [showreview, setshowreview] = React.useState(false)

  const getproductdatabyid = async () =>{
      let temp ={
        "Code":200,
        "Message": "Success",
        "Data":[
          {
            "ProductId":1,
            "ProductName": "Dairy Milk",
            "ProductDescription":"Cadbury Dairy Milk is a British brand of milk chocolate manufactured by Cadbury. It was introduced in the United Kingdom in June 1905 and now consists of a number of products. Every product in the Dairy Milk line is made with exclusively milk chocolate. In 2014, Dairy Milk was ranked the best-selling chocolate bar in the UK.According to a 2007 report in The New York Times, a British bar contained (in order) milk, sugar, cocoa mass, cocoa butter, vegetable fat and emulsifiers, whilst the American version manufactured by Hershey started its list of ingredients with sugar. It also listed lactose, emulsifier soy lecithin, and natural and artificial flavorings",
            "ProductImage":[
              {
                id:1,
                image : img1
              },
              {
                id :2,
                image:img2
              },
              {
                 id:3,
                 image:img3
              }
            ],
                    "ProductCode": "P1",
                    "ProductCategory": "Category 1",
                    "ProductSubCategory": "Sub Category 1",
                    "ProductBrand": "Brand 1",
                    "ProductColor": "Color 1",
                    "ProductSize": "Size 1",
                    "ProductWeight": "Weight 1",
                    "ProductMaterial": "Material 1",
                    "ProductQuantity": 10,
                    "ProductUnit": "Unit 1",
                    "ProductPrice": 100,
                    "SalesPrice": 80,
                    "ProductDiscount": 20,
                    "ProductDiscountType": "Percentage",
                    "ProductTax": 20,
                    "ProductTaxType": "Percentage",
                    "ProductShippingCharge": 20,
                    "ProductShippingChargeType": "Percentage",
                    "ProductShippingTime": "1-2 days",
                    "ProductShippingTimeType": "Days",
                    "ProductShippingLocation": "Location 1",
                    "ProductShippingLocationType": "Country",
                    "ProductShippingReturnPolicy": "Return Policy 1",
                    "ProductShippingReturnPolicyType": "Days",
                    "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
                    "ProductShippingReturnPolicyDescriptionType": "Days",
                    "ProductReviews": [
                      {
                          "ReviewId": 1,
                          "Name": "Bishal Chansi",
                          "Email": "",
                          "Rating": 5,
                          "Date": "2021-08-01",
                          "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                      },
                      {
                        "ReviewId": 2,
                        "Name": "Roshan",
                        "Email": "",
                        "Rating": 4,
                        "Date": "2021-08-01",
                        "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                    },
                    {
                        "ReviewId": 3,
                        "Name": "Sanam",
                        "Email": "",
                        "Rating": 2,
                        "Date": "2021-08-01",
                        "Review": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    }
                    ]
          }
        ]
      }
      if(temp.Code == 200){
           setimageset(temp.Data[0].ProductImage)
           setproductdata(temp.Data[0])
           setactiveimg(temp.Data[0].ProductImage[0])
      }
  }

  useEffect(() => {
    getproductdatabyid()
    window.scroll(0,0)
  }, [])

  const [rating,setrating]=React.useState(0)
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
    <div className='productpage'>
     <Navbar/>
     <div className='pc1'>
      <Link to='/'>
      <button className='goback'>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
         <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
         </svg>
        Go Back
      </button>
      </Link>
      <div className='c11'>
        <div className='imgset'>
          {
             imageset && imageset?.map((item, index) => {
                return(
                  <div className='imgsmall'
                  onClick={() => {
                    setactiveimg(item)
                }}>
                   <img src={item.image} alt=""
                    className={
                      activeimg.id == item.id ? 'active' : ''
                  }
                   />
                  </div>
                )
             })
          }
        </div>
        <div className='imgbig'>
        <img src={activeimg.image} alt="" />

        </div>
      </div>

      <div className='c12'>
      <h1 className='head1'>{productdata.ProductName}</h1>
      <div className='c121'>
           <p className='price'>
           Rs.{productdata.SalesPrice * count}
          <span>Rs.{productdata.ProductPrice * count}</span>
          </p>
          <div className='incrdecr'>
                            <button
                                onClick={() => {
                                    if (count > 1) {
                                        setcount(count - 1)
                                    }
                                }}
                            >-</button>
                            <p>{count}</p>
                            <button
                                onClick={() => {
                                    if (count < 10) {
                                        setcount(count + 1)
                                    }
                                }}
                            >+</button>
                        </div>       

      </div>
        <div className='btncont'>
              <button
               onClick={() => {
                  alert("Added to cart")
                  }}
               >
                Add to Cart
              </button>
              <button
                onClick={() => {
                alert('Buy Now')
               }}
              >
               Buy Now
             </button>
        </div>      
      </div>
     </div>
     <div className='pc2'>{
      showreview ?
      <div className='tabs'>
        <button className='inactive'
        onClick={
          () => {
            setshowreview(false)
          }
        }
        >
          Description
        </button>
        <button className='active'
         onClick={
          () => {
            setshowreview(true)
          }
        }
        >
          Reviews
        </button>
      </div>
      :
      <div className='tabs'>
        <button className='active'
         onClick={
          () => {
            setshowreview(false)
          }
        }
        >
          Description
        </button>
        <button className='inactive'
         onClick={
          () => {
            setshowreview(true)
          }
        }
        >
          Reviews
        </button>
      </div>
     }
      {
        showreview ?
        <div className='reviewcont'>
          <form>
            <div className='fromgroup'>
              <label htmlFor=''>Name</label>
              <input type='text' />
            </div>
            <div className='fromgroup'>
            <label htmlFor=''>Email</label>
              <input type='email' />
            </div>
            <div className='fromfroup'>
            <label htmlFor=''>Review</label>
              <textarea name='' id='' cols="30" rows='10'></textarea>
            </div>
            <div className='fromgroup'>
              <label>Rating</label>
              <div className='rating'>
                <div className='star'
                onClick={() =>{
                  setrating(1)
                } }
                >
                  {
                    rating >=1 ?
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>

                  }
                </div>
                <div className='star'
                onClick={() =>{
                  setrating(2)
                } }>
                  {
                    rating >=2 ?
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>

                  }
                </div>
                <div className='star'
                onClick={() =>{
                  setrating(3)
                } }>
                  {
                    rating >=3 ?
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>

                  }
                </div>
                <div className='star'
                onClick={() =>{
                  setrating(4)
                } }>
                  {
                    rating >=4 ?
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>

                  }
                </div>
                <div className='star'
                onClick={() =>{
                  setrating(5)
                } }>
                  {
                    rating >=5 ?
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>

                  }
                </div>
              </div>
            </div>
            <button>Submit</button>
          </form>


          <div className='allreview'>
            <h1 className='head1'>Product Reviews</h1>
            {productdata.ProductReviews &&
             productdata.ProductReviews.map((item, index) => {
              return (
                <div className='review'>
                <div className='reviewhead'>
                <p className='name'>{item.Name}</p>
                <div className='rating1'>
                <div className='star'>
                  {
                    item.Rating >=1 ?
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>

                  }
                </div>
                <div className='star'>
                  {
                    item.Rating >=2 ?
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>

                  }
                </div>
                <div className='star'>
                  {
                    item.Rating >=3 ?
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>

                  }
                </div>
                <div className='star'>
                  {
                    item.Rating >=4 ?
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>

                  }
                </div>
                <div className='star'>
                  {
                    item.Rating >=5 ?
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>

                  }
                </div>
              </div>
                <span className='date'>{item.Date}</span>
                </div>

                <div className='reviewbody'>
                  {item.Review}
                </div>
                </div>
              )
            }) 
            }
          </div>
        </div>
        :
       <p className='desc'>{productdata.ProductDescription}</p>
      }
     </div>

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

export default ProductPage