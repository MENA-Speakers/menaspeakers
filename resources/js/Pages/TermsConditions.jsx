import React from 'react';
import MainLayout from "@/Layouts/MainLayout";
import {Head} from "@inertiajs/react";

function TermsCondition() {
  const bitrixForm = () => {
    (function(w,d,u){
      const s = d.createElement( 'script' );s.async=true;s.src=u+'?'+(Date.now()/180000|0);
      const h = d.getElementsByTagName( 'script' )[ 0 ];h.parentNode.insertBefore(s,h);
    })(window,document,'https://cdn.bitrix24.com/b25531643/crm/form/loader_53.js');
  }
  return (
    <MainLayout>
      <Head>
        <title>Terms & Conditions</title>
      </Head>
      <section className="relative h-[550px]">
        <img src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80" alt="" className="w-full h-full object-cover"/>

        <div className="absolute inset-0 z-0">
          <div className="w-full h-full z-20 bg-black/50">
            <div className="max-w-7xl mx-auto flex items-center justify-center h-full  px-4 sm px-6 lg px-8">
              <h1 className="text-white text-5xl font-bold">Terms & Conditions</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 lg:px-0">


        <div className={'max-w-6xl mx-auto space-y-3'}>

          <h1>Hey form bere </h1>
          {bitrixForm()}

          end of form

          <p>MENA Speakers maintains the https://mena-speakers.com Website ("Site"). The use of this website (www.mena-speakers.com) is subject to the conditions of use described hereunder.
            The mere use of the website implies the knowledge and the acceptance of these conditions of use and the privacy policy.</p>
          <p><strong>Copyrights</strong>
            <br/>Copyright MENA SPEAKERS FZE. All Rights Reserved. The text, images, graphics, sound files, animation files, video files and their arrangement on the
              MENA SPEAKERS FZE website are all subject to Copyright and other intellectual property protection.
              These objects may not be copied for commercial use or distribution, nor may these objects be modified or reposted to other websites.
              Some of the webpages of MENA SPEAKERS FZE may also contain material that is subject to the copyright rights of third parties and their providers.</p>

          <p><strong>Information</strong><br/>The information available on or via the website is of a general nature and is only provided for a general use.
            This information is not adapted to personal or specific circumstances. No rights can be derived from the information.</p>
          <p>Despite the fact that best efforts were made to draw up the content of the website with due care, it cannot be excluded that information is obsolete, incomplete or in any other way incorrect.
            MENA SPEAKERS cannot give any guarantees concerning the nature or the content of the information available on or via the website.</p>
          <p>"Visa and Master Card and which AED will be accepted for payment"</p>
          <p>‘’Cardholder must retain a copy of transaction records and Merchant policies and rules’’</p>
          <p>‘’User is responsible for maintaining the confidentiality of his account’’</p>

          <p>Should you notice errors in the information available on or via the website, please contact us at INFO@MENA-SPEAKERS.COM.</p>
          <p><strong>No Licenses</strong><br/>Your access to neither this Internet website, nor any material contained therein shall in any way grant or be taken to grant any person a license to the
            Intellectual Property of MENA SPEAKERS.
            <br/>No intellectual property rights regarding the website itself, part of the website or information available on or via the website are transferred to you.
              <br/>The information that is made available to you on or via the website, can only be used for your own internal purposes. You shall not use the information or
                databases for any other purpose, especially for commercial exploitation.</p>
          <p><strong>Interruptions</strong><br/>MENA SPEAKERS makes every effort to prevent, as much as possible, interruptions due to technical errors. Nevertheless,
            MENA SPEAKERS cannot guarantee that the website will be completely free of any kind of interruption or will not be subject to other technical problems.</p>
          <p><strong>Links and references</strong><br/>The website can contain links to other websites. MENA SPEAKERS does not monitor those websites and has no technical or content
            control on those websites. Therefore, MENA SPEAKERS cannot guarantee the completeness or the accuracy of the content, nor the availability of those websites.</p>
          <p>The incorporation of links to other websites does not imply any connection, partnership, relationship or approval of those websites or their content.</p>
          <p>Should you desire to create links from your website to this website, please contact us at INFO@MENA-SPEAKERS.COM beforehand.</p>
          <p><strong>Liability</strong><br/>MENA SPEAKERS shall not be liable for any damages arising or resulting from any direct or indirect use of the website or of the
            information made available on or via the website.
            MENA SPEAKERS is not liable for damages resulting from potential interruptions of the website, caused by technical errors, even if the error is qualified as a
            “serious fault” under United Arab Emirates law,
            “United Arab Emirates is our country of domicile” and stipulate that the governing law is the local law.
            viruses or any other disturbing element, or the consultation or the use of the websites (e.g. via links) referred to on or via the website or the information available on the former.</p>
          <p>MENA SPEAKERS is not liable for electronic communications via the website, e.g. e-mails, or delays, interceptions or manipulation by third parties of those communications.</p>
          <p>Any use of the information available on or via the website is therefore completely at your own risk. Consequently, you are liable for any of your choices made based on the information available on or via the website.</p><p>You shall take all reasonable precautions to prevent your equipment from being harmed by viruses, bugs, Trojan horses, etc. MENA SPEAKERS does not guarantee any compatibility of your equipment with the files being part of or present on the website, or any accessibility of those elements.</p>
          <p>‘’We will not trade with or provide any services to OFAC and sanctioned countries’’</p>
          <p>
            ‘’Customer using the website who are Minor /under the age of 18 shall not register as a User of the website and shall not transact on or use the website’’
          </p>
          <p><strong>Applicable law and jurisdiction</strong>
            <br/>This website and its use are subject to the United Arab Emirates law and regulations. Should any of the provision be considered void under the United Arab Emirates law and regulations or any mandatory regulations of another country that would apply the other provisions will remain in full force and effect.</p><p>Last updated: October&nbsp;2022</p>
        </div>
      </section>
    </MainLayout>
  );
}

export default TermsCondition;
