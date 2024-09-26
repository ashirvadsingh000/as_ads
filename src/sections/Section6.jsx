import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

import '../assets/css/section6.css'
const Section6 = () => {
  return (
  <div id='Section6' className=" bg-slate-200 flex flex-col justify-center h-full">
    <h1 className='mt-24 lg:text-5xl text-4xl font-bold self-center'>Our Plans</h1>
    <section id="pricing-container">

<div id="pricing-switch">

    <span class="switch-label switch-label-monthly">Monthly</span>
    <label class="switch" id="">
        <input type="checkbox" checked="checked"/>
        <span class="slider"></span>
    </label>
    <span class="switch-label switch-label-yearly active">Yearly <span class="save-money">Save 10%</span></span>
  
    <div class="save-money--mobile">Save 10% on Yearly Plans</div>

</div>

<div id="pricing-cards">

 
    <div class="price-card">

        <div class="price-card--header">
            <h4>Premium</h4>
        </div>

        <div class="price-card--price">
            <div class="price-card--price-text">
                <div class="price-card--price-number toggle-price-content odometer" data-price-monthly="2,499" data-price-yearly="2,250">2,250</div>
            </div>
            <div class="price-card--price-conditions">
                <div class="toggle-price-content" data-price-monthly="Billed Monthly" data-price-yearly="Billed Annually">Billed Annually</div>
                <div class="price-card--onboarding-fee toggle-price-content" data-price-monthly="+ $7,500 Onboarding Fee" data-price-yearly="No Onboarding Fee">No Onboarding Fee</div>
            </div>
        </div>

        <div class="price-card--cta">
            <a class="price-card--cta--button btn" href="/get-started-today">Get Started</a>
        </div>

        <div class="price-card--features">

            <ul class="price-card--features--list">
                <li class="price-card--features--item has-tooltip">Sales & Marketing Platform
                    <div class="tooltip-container"><strong>Sales & Marketing Platform</strong>
                        <p>Vendasta's end-to-end sales solution for companies that serve local businesses, and want to grow digital revenue.</p>
                    </div>
                </li>
                <li class="price-card--features--item has-tooltip">Snapshot & Campaigns
                    <div class="tooltip-container"><strong>Snapshot & Campaigns</strong>
                        <p>Access to award-winning automated needs-assessment and email marketing automation. Unlimited emails sent to unlimited accounts.</p>
                    </div>
                </li>
                <li class="price-card--features--item has-tooltip">Marketplace
                    <div class="tooltip-container"><strong>Marketplace</strong>
                        <p>Access to world-class resellable products & services, aimed to fulfilling the digital marketing needs of your small & medium sized business clients.</p>
                    </div>
                </li>
                <li class="price-card--features--item has-tooltip">Business Center & Store
                    <div class="tooltip-container"><strong>Business Center & Store</strong>
                        <p>Portal for your local business clients, featuring your agency’s branding. They can access the products purchased from your Marketplace.</p>
                    </div>
                </li>

                <li class="price-card--features--item has-tooltip">Tech support
                    <div class="tooltip-container"><strong>Tech support</strong>
                        <p>Phone, Email and Web Chat support, <br/>9am-9pm EST Mon-Fri, <br/>2pm-7pm EST Sat-Sun</p>
                    </div>
                </li>
                <li class="price-card--features--item has-tooltip">Partner Success Manager
                    <div class="tooltip-container"><strong>Partner Success Manager</strong>
                        <p>One-on-one with a Vendasta Success Manager, who will provide sales training so you reach your goals quickly.</p>
                    </div>
                </li>
                <li class="price-card--features--item has-tooltip">Custom domains
                    <div class="tooltip-container"><strong>Custom domains</strong>
                        <p>Fully white-label the platform on your agency's own domains.</p>
                    </div>
                </li>
                <li class="price-card--features--item has-tooltip">Concierge
                    <div class="tooltip-container"><strong>Concierge</strong>
                        <p>Multi-client agency fulfillment & task management app for teams.</p>
                    </div>
                </li>
                <li class="price-card--features--item has-tooltip">Brand Analytics
                    <div class="tooltip-container"><strong>Brand Analytics</strong>
                        <p>Access to multi-location brand management app.</p>
                    </div>
                </li>
                <li class="price-card--features--item has-tooltip">Managed Digital Ads
                    <div class="tooltip-container"><strong>Managed Digital Ads</strong>
                        <p>Access to our managed advertising service. Drive store visits, calls, texts & form fills for your clients.</p>
                    </div>
                </li>
                <li class="price-card--features--item has-tooltip">Access to in-market seminars
                    <div class="tooltip-container"><strong>Access to in-market seminars</strong>
                        <p>Face to face training from our experts to yours.</p>
                    </div>
                </li>
                <li class="price-card--features--item has-tooltip">APIs & SSO
                    <div class="tooltip-container"><strong>APIs & SSO</strong>
                        <p>APIs to use our products in your dashboards.</p>
                    </div>
                </li>
                <li class="price-card--features--item has-tooltip">Digital Agency
                    <div class="tooltip-container"><strong>Digital Agency</strong>
                        <p>Outsource your work to our fulfillment team.</p>
                    </div>
                </li>
                <li class="price-card--features--item has-tooltip">100% white-label
                    <div class="tooltip-container"><strong>100% white-label</strong>
                        <p>Digital Agency Email and phone communication under your brand. Customized workflows and toll-free numbers.</p>
                    </div>
                </li>
                <button className=' cursor-pointer text-xl self-center border-2 border-black p-1 rounded-md hover:bg-cyan-400 flex flex-row gap-2'>
                 Get Offer <FaArrowRightLong  className=' text-center self-center'/>
                </button>

            </ul>
        </div>

        <div class="price-card--mobile-features-toggle"></div>

    </div>

    <div class="price-card price-card--hero">

        <div class="price-card--header">
            <h4>Enterprise</h4>
        </div>
        <div class="price-card--hero-text">
            Most Popular Plan
        </div>

        <div class="price-card--price">
            <div class="price-card--price-text">
                <div class="price-card--price-number toggle-price-content odometer" data-price-monthly="999" data-price-yearly="900">900</div>
            </div>
            <div class="price-card--price-conditions">
                <div class="toggle-price-content" data-price-monthly="Billed Monthly" data-price-yearly="Billed Annually">Billed Annually</div>
                <div class="price-card--onboarding-fee toggle-price-content" data-price-monthly="+ $2,500 Onboarding Fee" data-price-yearly="No Onboarding Fee">No Onboarding Fee</div>
            </div>
        </div>

        <div class="price-card--cta">
            <a class="price-card--cta--button btn" href="/get-started-today">Get Started</a>
        </div>

        <div class="price-card--features">
            <ul class="price-card--features--list">

                <li class="price-card--features--item has-tooltip">Sales & Marketing Platform
                    <div class="tooltip-container"><strong>Sales & Marketing Platform</strong>
                        <p>Vendasta's end-to-end sales solution for companies that serve local businesses, and want to grow digital revenue.</p>
                    </div>
                </li>
                <li class="price-card--features--item has-tooltip">Snapshot & Campaigns
                    <div class="tooltip-container"><strong>Snapshot & Campaigns</strong>
                        <p>Access to award-winning automated needs-assessment and email marketing automation. Unlimited emails sent to unlimited accounts.</p>
                    </div>
                </li>
                <li class="price-card--features--item has-tooltip">Marketplace
                    <div class="tooltip-container"><strong>Marketplace</strong>
                        <p>Access to world-class resellable products & services, aimed to fulfilling the digital marketing needs of your small & medium sized business clients.</p>
                    </div>
                </li>
                <li class="price-card--features--item has-tooltip">Business Center & Store
                    <div class="tooltip-container"><strong>Business Center & Store</strong>
                        <p>Portal for your local business clients, featuring your agency’s branding. They can access the products purchased from your Marketplace.</p>
                    </div>
                </li>

                <li class="price-card--features--item has-tooltip">Tech support
                    <div class="tooltip-container"><strong>Tech support</strong>
                        <p>Phone, Email and Web Chat support, <br/>9am-9pm EST Mon-Fri, <br/>2pm-7pm EST Sat-Sun</p>
                    </div>
                </li>
                <li class="price-card--features--item has-tooltip">Partner Success Manager
                    <div class="tooltip-container"><strong>Partner Success Manager</strong>
                        <p>One-on-one with a Vendasta Success Manager, who will provide sales training so you reach your goals quickly.</p>
                    </div>
                </li>
                <li class="price-card--features--item has-tooltip">Custom domains
                    <div class="tooltip-container"><strong>Custom domains</strong>
                        <p>Fully white-label the platform on your agency's own domains.</p>
                    </div>
                </li>
                <li class="price-card--features--item has-tooltip">Concierge
                    <div class="tooltip-container"><strong>Concierge</strong>
                        <p>Multi-client agency fulfillment & task management app for teams.</p>
                    </div>
                </li>
                <li class="price-card--features--item has-tooltip">Brand Analytics
                    <div class="tooltip-container"><strong>Brand Analytics</strong>
                        <p>Access to multi-location brand management app.</p>
                    </div>
                </li>
                <li class="price-card--features--item has-tooltip">Managed Digital Ads
                    <div class="tooltip-container"><strong>Managed Digital Ads</strong>
                        <p>Access to our managed advertising service. Drive store visits, calls, texts & form fills for your clients.</p>
                    </div>
                </li>
                <li class="price-card--features--item has-tooltip">Access to in-market seminars
                    <div class="tooltip-container"><strong>Access to in-market seminars</strong>
                        <p>Face to face training from our experts to yours.</p>
                    </div>
                </li>
                <li class="price-card--features--item has-tooltip">APIs & SSO
                    <div class="tooltip-container"><strong>APIs & SSO</strong>
                        <p>APIs to use our products in your dashboards.</p>
                    </div>
                </li>
                <li class="price-card--features--item has-tooltip">Digital Agency
                    <div class="tooltip-container"><strong>Digital Agency</strong>
                        <p>Outsource your work to our fulfillment team.</p>
                    </div>
                </li>
                <li class="price-card--features--item has-tooltip tooltip-disabled features-disabled">100% white-label
                    <div class="tooltip-container"><strong>100% white-label</strong>
                        <p>Digital Agency Email and phone communication under your brand. Customized workflows and toll-free numbers.</p>
                    </div>
                </li>
                <button className=' cursor-pointer text-xl self-center border-2 border-black p-1 rounded-md hover:bg-cyan-400 flex flex-row gap-2'>
                 Get Offer <FaArrowRightLong  className=' text-center self-center'/>
                </button>

            </ul>
        </div>

        <div class="price-card--mobile-features-toggle"></div>

    </div>
    
    <div class="price-card">

        <div class="price-card--header">
            <h4>Pro</h4>
        </div>

        <div class="price-card--price">
            <div class="price-card--price-text">
                <div class="price-card--price-number toggle-price-content odometer" data-price-monthly="499" data-price-yearly="450">450</div>
            </div>
            <div class="price-card--price-conditions">
                <div class="toggle-price-content" data-price-monthly="Billed Monthly" data-price-yearly="Billed Annually">Billed Annually</div>
                <div class="price-card--onboarding-fee toggle-price-content" data-price-monthly="+ $1,500 Onboarding Fee" data-price-yearly="No Onboarding Fee">No Onboarding Fee</div>
            </div>
        </div>

        <div class="price-card--cta">
            <a class="price-card--cta--button btn" href="/get-started-today">Get Started</a>
        </div>

        <div class="price-card--features">
            <ul class="price-card--features--list">

                <li class="price-card--features--item has-tooltip">Sales & Marketing Platform
                    <div class="tooltip-container"><strong>Sales & Marketing Platform</strong>
                        <p>Vendasta's end-to-end sales solution for companies that serve local businesses, and want to grow digital revenue.</p>
                    </div>
                </li>
                <li class="price-card--features--item has-tooltip">Snapshot & Campaigns
                    <div class="tooltip-container"><strong>Snapshot & Campaigns</strong>
                        <p>Access to award-winning automated needs-assessment and email marketing automation. Unlimited emails sent to unlimited accounts.</p>
                    </div>
                </li>
                <li class="price-card--features--item has-tooltip">Marketplace
                    <div class="tooltip-container"><strong>Marketplace</strong>
                        <p>Access to world-class resellable products & services, aimed to fulfilling the digital marketing needs of your small & medium sized business clients.</p>
                    </div>
                </li>
                <li class="price-card--features--item has-tooltip">Business Center & Store
                    <div class="tooltip-container"><strong>Business Center & Store</strong>
                        <p>Portal for your local business clients, featuring your agency’s branding. They can access the products purchased from your Marketplace.</p>
                    </div>
                </li>

                <li class="price-card--features--item has-tooltip">Tech support
                    <div class="tooltip-container"><strong>Tech support</strong>
                        <p>Phone, Email and Web Chat support, <br/>9am-9pm EST Mon-Fri, <br/>2pm-7pm EST Sat-Sun</p>
                    </div>
                </li>
                <li class="price-card--features--item has-tooltip">Partner Success Manager
                    <div class="tooltip-container"><strong>Partner Success Manager</strong>
                        <p>One-on-one with a Vendasta Success Manager, who will provide sales training so you reach your goals quickly.</p>
                    </div>
                </li>
                <li class="price-card--features--item has-tooltip">Custom domains
                    <div class="tooltip-container"><strong>Custom domains</strong>
                        <p>Fully white-label the platform on your agency's own domains.</p>
                    </div>
                </li>
                <li class="price-card--features--item has-tooltip">Concierge
                    <div class="tooltip-container"><strong>Concierge</strong>
                        <p>Multi-client agency fulfillment & task management app for teams.</p>
                    </div>
                </li>
                <li class="price-card--features--item has-tooltip">Brand Analytics
                    <div class="tooltip-container"><strong>Brand Analytics</strong>
                        <p>Access to multi-location brand management app.</p>
                    </div>
                </li>
                <li class="price-card--features--item has-tooltip">Managed Digital Ads
                    <div class="tooltip-container"><strong>Managed Digital Ads</strong>
                        <p>Access to our managed advertising service. Drive store visits, calls, texts & form fills for your clients.</p>
                    </div>
                </li>
                <li class="price-card--features--item has-tooltip">Access to in-market seminars
                    <div class="tooltip-container"><strong>Access to in-market seminars</strong>
                        <p>Face to face training from our experts to yours.</p>
                    </div>
                </li>
                <li class="price-card--features--item has-tooltip tooltip-disabled features-disabled">APIs & SSO
                    <div class="tooltip-container"><strong>APIs & SSO</strong>
                        <p>APIs to use our products in your dashboards.</p>
                    </div>
                </li>
                <li class="price-card--features--item has-tooltip tooltip-disabled features-disabled">Digital Agency
                    <div class="tooltip-container"><strong>Digital Agency</strong>
                        <p>Outsource your work to our fulfillment team.</p>
                    </div>
                </li>
                <li class="price-card--features--item has-tooltip tooltip-disabled features-disabled">100% white-label
                    <div class="tooltip-container"><strong>100% white-label</strong>
                        <p>Digital Agency Email and phone communication under your brand. Customized workflows and toll-free numbers.</p>
                    </div>
                </li>
                <button className=' cursor-pointer text-xl self-center border-2 border-black p-1 rounded-md hover:bg-cyan-400 flex flex-row gap-2'>
                 Get Offer <FaArrowRightLong  className=' text-center self-center'/>
                </button>

            </ul>
        </div>

        <div class="price-card--mobile-features-toggle"></div>

    </div>
   
    <div class="price-card">

        <div class="price-card--header">
            <h4>Basic</h4>
        </div>

        <div class="price-card--price">
            <div class="price-card--price-text only-yearly">
                <div class="price-card--price-number odometer">249</div>
                <div class="only-yearly--text"><span>Only Available Yearly</span></div>
            </div>
            <div class="price-card--price-conditions">
                <div>Billed Annually</div>
                <div class="price-card--onboarding-fee">No Onboarding Fee</div>
            </div>
        </div>

        <div class="price-card--cta">
            <a class="price-card--cta--button btn" href="/get-started-today">Get Started</a>
        </div>

        <div class="price-card--features">
            <ul class="price-card--features--list">

                <li class="price-card--features--item has-tooltip">Sales & Marketing Platform
                    <div class="tooltip-container"><strong>Sales & Marketing Platform</strong>
                        <p>Vendasta's end-to-end sales solution for companies that serve local businesses, and want to grow digital revenue.</p>
                    </div>
                </li>
                <li class="price-card--features--item has-tooltip">Snapshot & Campaigns
                    <div class="tooltip-container"><strong>Snapshot & Campaigns</strong>
                        <p>Access to award-winning automated needs-assessment and email marketing automation. Unlimited emails sent to unlimited accounts.</p>
                    </div>
                </li>
                <li class="price-card--features--item has-tooltip">Marketplace
                    <div class="tooltip-container"><strong>Marketplace</strong>
                        <p>Access to world-class resellable products & services, aimed to fulfilling the digital marketing needs of your small & medium sized business clients.</p>
                    </div>
                </li>
                <li class="price-card--features--item has-tooltip">Business Center & Store
                    <div class="tooltip-container"><strong>Business Center & Store</strong>
                        <p>Portal for your local business clients, featuring your agency’s branding. They can access the products purchased from your Marketplace.</p>
                    </div>
                </li>
                <li class="price-card--features--item has-tooltip">Tech support (limited)
                    <div class="tooltip-container"><strong>Tech support (limited)</strong>
                        <p>Email and Web Chat support, <br/>9am-9pm EST Mon-Fri, <br/>2pm-7pm EST Sat-Sun</p>
                    </div>
                </li>

                <li class="price-card--features--item has-tooltip tooltip-disabled features-disabled">Partner Success Manager
                    <div class="tooltip-container"><strong>Partner Success Manager</strong>
                        <p>One-on-one with a Vendasta Success Manager, who will provide sales training so you reach your goals quickly.</p>
                    </div>
                </li>
                <li class="price-card--features--item has-tooltip tooltip-disabled features-disabled">Custom domains
                    <div class="tooltip-container"><strong>Custom domains</strong>
                        <p>Fully white-label the platform on your agency's own domains.</p>
                    </div>
                </li>
                <li class="price-card--features--item has-tooltip tooltip-disabled features-disabled">Concierge
                    <div class="tooltip-container"><strong>Concierge</strong>
                        <p>Multi-client agency fulfillment & task management app for teams.</p>
                    </div>
                </li>
                <li class="price-card--features--item has-tooltip tooltip-disabled features-disabled">Brand Analytics
                    <div class="tooltip-container"><strong>Brand Analytics</strong>
                        <p>Access to multi-location brand management app.</p>
                    </div>
                </li>
                <li class="price-card--features--item has-tooltip tooltip-disabled features-disabled">Managed Digital Ads
                    <div class="tooltip-container"><strong>Managed Digital Ads</strong>
                        <p>Access to our managed advertising service. Drive store visits, calls, texts & form fills for your clients.</p>
                    </div>
                </li>
                <li class="price-card--features--item has-tooltip tooltip-disabled features-disabled">Access to in-market seminars
                    <div class="tooltip-container"><strong>Access to in-market seminars</strong>
                        <p>Face to face training from our experts to yours.</p>
                    </div>
                </li>
                <li class="price-card--features--item has-tooltip tooltip-disabled features-disabled">APIs & SSO
                    <div class="tooltip-container"><strong>APIs & SSO</strong>
                        <p>APIs to use our products in your dashboards.</p>
                    </div>
                </li>
                <li class="price-card--features--item has-tooltip tooltip-disabled features-disabled">Digital Agency
                    <div class="tooltip-container"><strong>Digital Agency</strong>
                        <p>Outsource your work to our fulfillment team.</p>
                    </div>
                </li>
                <li class="price-card--features--item has-tooltip tooltip-disabled features-disabled">100% white-label
                    <div class="tooltip-container"><strong>100% white-label</strong>
                        <p>Digital Agency Email and phone communication under your brand. Customized workflows and toll-free numbers.</p>
                    </div>
                </li>
                <button className=' cursor-pointer text-xl self-center border-2 border-black p-1 rounded-md hover:bg-cyan-400 flex flex-row gap-2'>
                 Get Offer <FaArrowRightLong  className=' text-center self-center'/>
                </button>
            </ul>
        </div>

        <div class="price-card--mobile-features-toggle"></div>

    </div>

</div>


</section>
  </div>
  )
}

export default Section6
