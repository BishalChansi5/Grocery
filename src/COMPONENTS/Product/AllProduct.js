import React from 'react'
import ProductCard from './ProductCard'
import img1 from '../../ASSETS/dairy1.jpg'
import img2 from '../../ASSETS/img(2).png'
import img3 from '../../ASSETS/img(3).webp'
import img4 from '../../ASSETS/img(4).jpg'
import img5 from '../../ASSETS/img(5).jpg'
import img6 from '../../ASSETS/img(6).jpeg'
import img7 from '../../ASSETS/img(7).jpeg'
import img8 from '../../ASSETS/img(8).jpg'
import img9 from '../../ASSETS/img(9).jpg'
import img10 from '../../ASSETS/img(10).jpg'
import img11 from '../../ASSETS/img(11).webp'
import img12 from '../../ASSETS/img(12).jpg'
import './AllProduct.css'
const AllProduct = () => {
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
  return (
    <div className='allproducts'>
       <h1>All Products</h1>
       <div className='products'>
          {
            products.map((item,index) => {
                return(
                    <ProductCard data={item} key={index} />
                )
            }
            )
          }
       </div>
    </div>
  )
}

export default AllProduct