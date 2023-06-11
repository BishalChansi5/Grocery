import React, { useEffect, useState } from 'react'
import SingleBanner from '../../COMPONENTS/Banners/SingleBanner'
import Footer from '../../COMPONENTS/Footer/Footer'
import Footer2 from '../../COMPONENTS/Footer/Footer2'
import Navbar from '../../COMPONENTS/Navbar/Navbar'

const FAQ = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  const [activesection, setactivesection] = useState(0)


  const faq = [
    {
      id: 1,
      question: 'Where we are?',
      answer: 'In the old town of Tokha Kathmandu ward number-3 located opposite the Bhutkhel park near the Shabhav Banqueat.'
    },
    {
      id: 2,
      question: 'What we supply?',
      answer: 'Produce Containers, Plastic Bags, Grocery Shopping Baskets, Disposable Bags, Merchandiser Stands, Beer, Liquor, & Wine Bags, Merchandiser Racks. '
    },
    {
      id: 3,
      question: 'Where does it come from?',
      answer: 'Supplier From Gresik, East Java, Indonesia. Supplier: Shampoo, soap, toothpaste, shaving razor, hand body lotion, household cleaning products, coffee beans, instant coffee, coffee mix, tea, chocco, biscuits, wafer, cookies, milk, candy, canned food'
    }
    
  ]

  return (
    <div className='extrapage'>
      <Navbar />
      <SingleBanner
        heading="FAQs"
        bannerimage='https://images.unsplash.com/photo-1665789318391-6057c533005e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'
      />

      <div className='faqcontainer'>
        
        {
          faq.map((item, index) => {
            return (
              activesection == item.id ?
                <div className='faq'>
                  <div className='faqhead'>
                    <h1>
                      {item.question}
                    </h1>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"
                      onClick={() => setactivesection(0)}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div className='faqbody'>
                    <p>
                      {item.answer}
                    </p>
                  </div>
                </div>
                :
                <div className='faq'>
                  <div className='faqhead'>
                    <h1>{item.question}</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"
                      onClick={() => setactivesection(item.id)}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>

                  </div>
                </div>
            )
          })
        }


      </div>


      <Footer />
      <Footer2 />
    </div>
  )
}

export default FAQ