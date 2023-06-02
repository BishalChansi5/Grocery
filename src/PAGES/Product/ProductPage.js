import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
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
                "ProductPrice": 260,
                "SalesPrice": 80,
                "ProductDiscount": 8,
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
      },
      {
        "ProductId":2,
        "ProductName": "Wai Wai",
        "ProductDescription":"Ingredients: Wheat Flour, Edible Vegetable oil, Iodized salt, Wheat Gluten, Minerals Salt, Raising Agent, Soya Sauce, Artifician Chicken Flavor, Black Pepper, Flavor Enhancers, Thickner, Onion.  Legal Disclaimer:Not Recommended For Infants Below 12 Months ",
        "ProductImage":[
          {
            id:1,
            image : img2
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
                "ProductPrice": 20,
                "SalesPrice": 80,
                "ProductDiscount": 0,
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
      },
      {
        "ProductId":3,
        "ProductName": "Oreo",
        "ProductDescription":"The Oreo is a cookie sandwich or cream biscuit. It is made by the Nabisco division of Mondelēz International. The cookie has a sweet, white filling of 'creme' or 'cream'. The creme is in between two circle-shaped chocolate or golden cookie pieces",
        "ProductImage":[
          {
            id:1,
            image : img3
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
                "ProductPrice": 360,
                "SalesPrice": 80,
                "ProductDiscount": 10,
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
      },
      {
        "ProductId":4,
        "ProductName": "Ramen Noodles",
        "ProductDescription":"An Asian noodle that is wheat-based and sometimes contains eggs. The off-white noodle is very popular all over the world and is available in straight rods or crinkled into brick shapes. It is sold fresh, dried, frozen and in instant form, which generally includes a flavor packet.",
        "ProductImage":[
          {
            id:1,
            image : img4
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
                "ProductPrice": 220,
                "SalesPrice": 80,
                "ProductDiscount": 6,
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
      },
      {
        "ProductId":5,
        "ProductName": "Chicken Sausage",
        "ProductDescription":"Chicken sausage is a type of sausage made from ground chicken meat. It is usually made from dark meat, and is often flavored with sage, parsley, or other herbs. It's high in protein and low in fat, and is a good source of iron and zinc.",
        "ProductImage":[
          {
            id:1,
            image : img5
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
                "ProductPrice": 380,
                "SalesPrice": 80,
                "ProductDiscount": 10,
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
      },
      {
        "ProductId":6,
        "ProductName": "Cotton-Candy Ice Cream",
        "ProductDescription":"Cotton candy characteristically is described as being sweet, caramellic, jammy, fruity and berry like. A unique flavour combination which has become known as the flavour cotton candy.Cotton candy ice cream is ice cream flavored to taste like cotton candy. There are a number of commercial cotton candy ice cream brands, or it can be made at home using cotton candy-flavored syrup mixed in with plain vanilla ice cream. It may be pink or blue or a mixture of the two swirled together. Many of the commercial ice cream brands have additional components, such as chocolate pieces or marshmallow swirls.",
        "ProductImage":[
          {
            id:1,
            image : img6
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
                "ProductPrice": 450,
                "SalesPrice": 80,
                "ProductDiscount": 12,
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
      },
      {
        "ProductId":7,
        "ProductName": "Amul Butter",
        "ProductDescription":"Amul unsalted butter is made from fresh cream and nothing else. It is in the purest form and doesn't contain any salt at all. With lower moisture content than other butter, it is an essential cooking and baking ingredient making it especially helpful when making pastries and puddings.so Amul had to come up with a solution and they found it in a chemical additive called diacetyl that gave it the required butter taste. , so Amul had to come up with a solution and they found it in a chemical additive called diacetyl that gave it the required butter taste.",
        "ProductImage":[
          {
            id:1,
            image : img7
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
                "ProductPrice": 300,
                "SalesPrice": 80,
                "ProductDiscount": 10,
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
      },
      {
        "ProductId":8,
        "ProductName": "Kimchi",
        "ProductDescription":"Kimchi is a Korean traditional fermented vegetable made from Chinese cabbage (beachu), radish, green onion, red pepper powder, garlic, ginger, and fermented seafood (jeotgal), which is traditionally made at home and served as a side dish at meals.The fermentation process gives kimchi its sour, salty and umami flavors as well as a sharp acidity. Other tastes such as sweetness and tanginess come through while chewing the vegetables.",
        "ProductImage":[
          {
            id:1,
            image : img8
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
                "ProductPrice": 200,
                "SalesPrice": 80,
                "ProductDiscount": 10,
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
      },
      {
        "ProductId":9,
        "ProductName": "Soft Drinks",
        "ProductDescription":"Soft drinks are defined as water-based flavored drinks usually with added carbon dioxide and with nutritive, nonnutritive, and/or intense sweeteners with other permitted food additives.The aerated drinks contains phosphoric acid which gets rid of the hair cuticles, is great for enhancing natural curls, dissolves unwanted dye and also makes your hair don great volume. Pouring cold drink into the soil reduces its pH making it perfect for the growth of the plants.Cold drinks of different brands are composed of Alcohol, carbohydrates, carbon dioxide, phosphate ions etc. These soft drinks give feeling of warmth, lightness and have a tangy taste which is liked by everyone. Carbon dioxide is responsible for the formation of froth on shaking the bottle.",
        "ProductImage":[
          {
            id:1,
            image : img9
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
                "ProductPrice": 280,
                "SalesPrice": 80,
                "ProductDiscount": 12,
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
      },
      {
        "ProductId":10,
        "ProductName": "Spices",
        "ProductDescription":"Spices not only improve the taste of food but also a good source of vitamins B and C, iron, calcium, and other antioxidants. Spices drawn from various parts of plants like bud, bark, root, flower, and fruits. Spices are being used by many medical industries like cosmetic, pharmaceutical, and aromatic as perfumery.A spice's chemical compounds can contribute mild to strong flavors. The balance of these chemical compounds gives a spice its characteristic flavor profile. Spices give characterizing tastes and aromas. They give six basic taste perceptions: sweet, salty, spicy, bitter, sour, and hot. ",
        "ProductImage":[
          {
            id:1,
            image : img10
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
                "ProductPrice": 180,
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
      },
      {
        "ProductId":11,
        "ProductName": "Rice",
        "ProductDescription":"rice, (Oryza sativa), edible starchy cereal grain and the grass plant (family Poaceae) by which it is produced. Roughly one-half of the world population, including virtually all of East and Southeast Asia, is wholly dependent upon rice as a staple food; 95 percent of the world's rice crop is eaten by humans.As a complex carb, it is the primary source of energy for over half of the world's people. Depending on the strain of rice, it can contain decent amounts of fibre, protein, vitamin B, iron and manganese. This means it can play a vital role against malnutrition. In some cultures, rice is thrown at weddings",
        "ProductImage":[
          {
            id:1,
            image : img11
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
                "ProductPrice": 350,
                "SalesPrice": 80,
                "ProductDiscount": 10,
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
      },
      {
        "ProductId":12,
        "ProductName": "Strawberry",
        "ProductDescription":"The strawberry is a succulent and fragrant fruit of bright red colour, obtained from the plant with the same name. In the West it is considered as the ' queen of the fruit'. It is eaten raw and used to make jam, stewed fruit.A strawberry is both a low-growing, flowering plant and also the name of the fruit that it produces. Strawberries are soft, sweet, bright red berries. They're also delicious. Strawberries have tiny edible seeds, which grow all over their surface.",
        "ProductImage":[
          {
            id:1,
            image : img12
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
                "ProductPrice": 180,
                "SalesPrice": 80,
                "ProductDiscount": 10,
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
const [reloadnavbar, setreloadnavbar] = React.useState(false)
const addtocart = () => {
    let cart = JSON.parse(localStorage.getItem('cart'))

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
    setreloadnavbar(!reloadnavbar)
    // window.location.reload()
    toast.success('Item added to cart')
}
  return (
    <div className='productpage'>
     <Navbar reloadnavbar={reloadnavbar}/>
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
                  addtocart()
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