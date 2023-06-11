import React, { useEffect } from 'react'
import SingleBanner from '../../COMPONENTS/Banners/SingleBanner'
import Footer from '../../COMPONENTS/Footer/Footer'
import Footer2 from '../../COMPONENTS/Footer/Footer2'
import Navbar from '../../COMPONENTS/Navbar/Navbar'

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='extrapage'>
      <Navbar />
      <SingleBanner
        bannerimage='https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1630&q=80'
        heading="Privacy Policy"
      />
      <div className='pgcont1'>
        <h3>Privacy & Security</h3>
        <p>Welcome to www.AshishSuperMart.com (the "Site"). By using the Site, you signify your agreement to the terms of this privacy policy (the "Privacy Policy"). If you do not agree to this Privacy Policy, please do not use this Site. This site reserves the right, in its sole discretion, to modify, alter or otherwise update this Privacy Policy at any time. Therefore, we recommend that you read the Privacy Policy carefully each time you use the Site. The last date on which the Privacy Policy was updated was March 20, 2023. By using this Site you agree to the Privacy Policy posted on the site on the date and time of use.

Please also review the Terms and Conditions of Use of this Site, to which the Privacy Policy forms a part. If you wish to make a purchase from the Site, please also review the Terms and Conditions of Sale within the Terms and Conditions of Use, as they set forth the terms for any purchase you make from the Site.</p>
      </div>
      <div className='pgcont1'>
        <h3>Our Promise to You</h3>
        <p>This site respects your privacy, and we assure you that we take the protection of your personal information very seriously. "Personal Information" means information that identifies you personally, including your name, physical address, e-mail address, phone number, or credit card information. This Privacy Policy describes the information we collect from you when you use this Site, how we use that information, and how we protect that information.</p>
      </div>

      <div className='pgcont1'>

        <h3>Information You Provide to Us</h3>
        <p>You can visit and browse this Site without telling us who you are or revealing any Personal Information. If you choose only to look at the Site and do not wish to make any purchases, you need not provide any Personal Information.

When you create an account with us, we will ask you for the following Personal Information: first and last name, e-mail address (which may or may not be your user name) and telephone number. We will also ask you to create a password for your account. Please see our Terms and Conditions of Use for further information regarding passwords. This information may be used for various marketing and/or business purposes including, but not limited to, market research and direct mailings or e-mailings from.</p>
      </div>

      <div className='pgcont1'>
        <h3>Information Automatically Collected</h3>
        <p>When you visit this Site, our Web servers may collect some information automatically, such as your Internet protocol address, the identity of your Internet Service Provider, your operating system, and the time and date of your visit. This information is not linked to Personal Information. This information is used to compile aggregate statistics about the total number of daily visitors to our Site, the pages most frequently visited and how long visitors tend to stay at each page. By collecting this information, we get a better understanding of your preferences so we can continually improve your online experience with us.

We may use "cookies" or tracking mechanisms that collect Personal Information on this Site to connect your customer information to the items in your shopping cart.

The Site also tracks dates, times, and transactions made by users who are signed into their accounts while on the Site. We use this tracking for Site management purposes.</p>
      </div>

      <div className='pgcont1'>
        <h3>Unsolicited Information</h3>
        <p>If you choose to use one of our contact e-mail addresses to send us any information other than that listed above under "Information You Provide to Us" and "Information Automatically Collected," we are not responsible for keeping that information private. Please see our Terms and Conditions of Use for further information about our policies regarding unsolicited information.</p>
      </div>

      <div className='pgcont1'>
        <h3>Disclosure of Information We Collect</h3>
        <p>This site will disclose Personal Information in accordance with this Privacy Policy; in order to comply in the event that law requires a disclosure of information submitted to our Site, including when required by a warrant, subpoena or court order; or when we believe in good faith that disclosure is necessary to prevent harm or injury, such as in the event of product recalls, fraud, claims or other liability. The Grocery Outlet does not sell, trade, or rent your personal information to outside parties. The Grocery Outlet may share statistical information about our users, traffic patterns, and related Site information, in aggregate form, with third-party affiliates and vendors, but these statistics will include no Personal Information.</p>
      </div>
      <Footer />
      <Footer2 />
    </div>
  )
}

export default PrivacyPolicy