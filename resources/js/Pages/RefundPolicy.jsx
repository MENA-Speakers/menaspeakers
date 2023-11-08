import React from 'react';
import MainLayout from "@/Layouts/MainLayout";
import {Head} from "@inertiajs/react";
import BlogCard from "@/Components/BlogCard";

function RefundPolicy() {

  return (
    <MainLayout>
      <Head>
        <title>Return Policy</title>
      </Head>
      <section className="relative h-[550px]">
        <img
          aria-label={'Return Policy header image'}
          src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80"
          alt="" className="w-full h-full object-cover"/>

        <div className="absolute inset-0 z-0">
          <div className="w-full h-full z-20 bg-black/50">
            <div className="max-w-7xl mx-auto flex items-center justify-center h-full  px-4 sm px-6 lg px-8">
              <h1 className="text-white text-5xl font-bold">Return Policy</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 lg:px-0">
        <div className={'max-w-6xl mx-auto space-y-3'}>
          <h2 className={'font-bold'}>What is MENA Speakers return policy?</h2>
          <p>‘All credit/debit cards’ details and personally identifiable information will NOT be stored, sold, shared,
            rented or leased to any third parties’’</p>
          <p>“ https://mena-speakers.com will not pass any debit/credit card details to third parties’’</p>
          <p>"https://mena-speakers.com takes appropriate steps to ensure data privacy and security including through
            various hardware and software methodologies. However, (mena-speakers.com) cannot guarantee the security of
            any information that is disclosed online’’</p>
          <p>
            "https://mena-speakers.com is not responsible for the privacy policies of websites to which it links. If you
            provide any information to such third parties different rules regarding the collection and use of your
            personal information may apply. You should contact these entities directly if you have any questions about
            their use of the information that they collect.’’
          </p>
          <p>
            “The Website Policies and Terms & Conditions may be changed or updated occasionally to meet the requirements
            and standards. Therefore, the Customers’ are encouraged to frequently visit these sections to be updated
            about the changes on the website. Modifications will be effective on the day they are posted”.
          </p>
          <p>We have a 30-day return policy, which means you have 30 days after receiving your item to request a
            return.&nbsp;
            <span className={'font-semibold'}>To be eligible for a return, your item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging.
                                                    You’ll also need the receipt or proof of purchase.&nbsp;</span><span
              className={'font-semibold'}>To start a return, you can contact us at info@mena-speakers.com. If your return is accepted,
                                                    we’ll send you a return shipping label, as well as instructions on how and where to send your package.
                                                    Items sent back to us without first requesting a return will not be accepted.&nbsp;</span>
            <span className={'font-semibold'}>You can always contact us for any return question at info@mena-speakers.com.</span>
          </p>

          <p>We deliver our Products to all Countries and mainly UAE. Shipping will be done by a third-party courier.
            Delivery within UAE cities shall be in 1 – 2 working days and from 4 to 10 working Days to Other Countries.
            UAE Delivery Fees will be a Flat Rate of AED: 20 and Delivery Fees outside
            UAE will be mentioned on the checkout page depending on the country and location. Avoid any delivery delay
            by providing your full address along with your contact details.</p>

          <p><b>Damages and Issues</b> Please inspect your order upon reception and contact us immediately if the item
            is defective,
            damaged or if you receive the wrong item, so that we can evaluate the issue and make it right.</p>
          <p><b>Exceptions / non-returnable items</b></p>
          <p>Certain types of items cannot be returned, like perishable goods (such as food, flowers, or plants),
            custom products (such as special orders or personalized items), and personal care goods (such as beauty
            products).
            We also do not accept returns for hazardous materials, flammable liquids, or gases. Please get in touch if
            you have questions or concerns about your specific item&nbsp;
            <span className={'font-bold'}>Unfortunately, we cannot accept returns on sale items or gift cards.</span>
          </p>
          <p><span className={'font-bold'}><b>Exchanges</b></span></p>
          <p><span>
                                                    The fastest way to ensure you get what you want is to return the item you have, and once the return is accepted, make a separate purchase for the new item.</span>
          </p>
          <p><b>Refunds</b></p>
          <p>We will notify you once we’ve received and inspected your return, and let you know if the refund was
            approved or not. If approved,
            you’ll be automatically refunded on your original payment method. Please remember it can take some time for
            your bank or credit card company to process and post the refund too.</p>
          <p>The multiple booking / orders / shipments may result in multiple postings to the cardholder’s monthly
            statement.</p>

          <p>
            “The Website Policies and Terms & Conditions may be changed or updated occasionally to meet the requirements
            and standards. Therefore, the Customers’ are encouraged to frequently visit these sections to be updated
            about the changes on the website. Modifications will be effective on the day they are posted”.
          </p>
        </div>
      </section>
    </MainLayout>
  );
}

export default RefundPolicy;
