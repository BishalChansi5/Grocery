import React, { useEffect } from 'react'
import SingleBanner from '../../COMPONENTS/Banners/SingleBanner'
import Footer from '../../COMPONENTS/Footer/Footer'
import Footer2 from '../../COMPONENTS/Footer/Footer2'
import Navbar from '../../COMPONENTS/Navbar/Navbar'

const Termsandconditions = () => {


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='extrapage'>
      <Navbar />
      <SingleBanner
        bannerimage='https://images.unsplash.com/photo-1448697138198-9aa6d0d84bf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
        heading="Terms & Conditions"
      />


      <div className='pgcont1'>
        <h3>Terms and Conditions</h3>
        <p>WELCOME TO Ashish GROCERY AND THANK YOU FOR REGISTERING WITH US! IT IS IMPORTANT THAT YOU REVIEW THIS AGREEMENT BECAUSE, BY ACCESSING THIS WEBSITE, BY PLACING AN ORDER WITH US BY TELEPHONE, EMAIL, OR THROUGH THIS WEBSITE, YOU ARE AGREEING TO THE TERMS AND CONDITIONS THAT GOVERN THE USE OF THE SITE AND THE TERMS UPON WHICH WE AGREE TO DELIVER TO YOU.</p>
      </div>
      <div className='pgcont1'>
        <h3>OUR DELIVERY SERVICE</h3>
        <p>When you place an order, we use all reasonable efforts to deliver to you at the time of your choosing or by 5:00 pm on the day of your arrival. Once you place your order by telephone, fax, email, or online, we will act as bailee for the ordered products. You can modify an existing order at any time up until the order leaves the store by calling our customer service number. Please note that we reserve the right to refuse service to anyone. We reserve the right to change the cost of deliveries and/or our delivery fees at any time.</p>
      </div>

      <div className='pgcont1'>

        <h3>PRICE AND AVAILABILITY</h3>
        <p>From time to time, products you order may be unavailable. If we are unable to fulfill your entire order, we will make every reasonable effort to substitute the closest product. We do not set the prices for the items you select on your grocery list. We pay the prices that each individual store has already set.

To receive delivery, you do not need to be present to receive your order from our driver. In the case of bad weather or unforeseen delivery complications, deliveries may be delayed. We will make every effort to get your groceries to you by 5:00 pm on the date of your arrival.

Your order will arrive with an invoice that will list all of the items you have received and were billed for. If something is missing from your order, please call us so that we can do everything reasonable in our power to ensure your satisfaction.
In the case where you fail to pay for the products ordered, you agree to forfeit to the Company any right, title, or interest you may have in the products.</p>
      </div>

      <div className='pgcont1'>
        <h3>PAYMENT</h3>
        <p>We accept cash and digital payments such as esewa and khalti.  If you fail to pay any fees or charges when due, we may charge some amount and we may suspend or terminate your access to our Service. </p>
      </div>

      <div className='pgcont1'>
        <h3>COPYRIGHT AND OWNERSHIP</h3>
        <p>All Site content, design, text, graphics, and interfaces; the collection, selection, and arrangement thereof; and all software are the property of, or duly licensed to,Ashish SuperMart. Consent is granted to view all of such things for the sole purpose of placing an order with us. You are not authorized to save or collect any such information. Any other use of materials on this Site, including modification, distribution, or reproduction is strictly prohibited. You acknowledge that All Seasons Grocery and/or third-party content providers remain the owners of such material and that you do not acquire any of those ownership rights by downloading copyrighted material. All Seasons Grocery reserves the right to revoke your use of the Site.</p>
      </div>

      <div className='pgcont1'>
        <h3>ACCEPTABLE USE POLICY</h3>
        <p>You agree not to engage in unacceptable use of our service, site, or systems. Among other things, you agree not to: (a) disseminate or transmit unsolicited messages, chain letters, or unsolicited commercial e-mail; (b) disseminate or transmit material that, to a reasonable person, may be abusive, obscene, pornographic, defamatory, harassing, grossly offensive, vulgar, threatening, or malicious; (c) disseminate or transmit files, graphics, software, or other material that actually or potentially infringes the copyright, trademark, patent, trade secret, or other intellectual property rights of any person; (d) create a false identity or otherwise attempt to mislead any person as to the identity or origin of any communication; (e) export, re-export, or permit downloading of any message or content in violation of any export or import law, regulation, or restriction of the United States and its agencies and authorities, or without all required approvals, licenses, or exemptions; (f) interfere with, disrupt, or attempt to gain unauthorized access to other accounts; (g) disseminate or transmit viruses, Trojan horses, or any other malicious code or program; or (h) engage in any other activity deemed by us to be in conflict with the spirit or intent of this Agreement.</p>
      </div>
      <Footer />
      <Footer2 />
    </div>
  )
}

export default Termsandconditions