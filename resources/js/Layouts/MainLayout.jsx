import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {Link} from "@inertiajs/react";

const navigation = [
  { name: 'Home', route: 'index' },
  { name: 'Speakers', route: 'speakers.index' },
  { name: 'Blog', route: 'blogs.index' },
  { name: 'Contact', route: 'pages.contact' },
]

export default function MainLayout({ children}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50 bg-black/30">
       <div className="max-w-7xl mx-auto">
         <nav className="flex items-center justify-between p-3 lg:px-8" aria-label="Global">
           <div className="flex lg:flex-1">
             <Link href="/" className="-m-1.5 p-1.5">
               <span className="sr-only">MENA Speakers</span>
               <img
                 className="h-12 w-auto"
                 src="/images/Mena-logo-white.png"
                 alt=""
               />
             </Link>
           </div>
           <div className="flex lg:hidden">
             <button
               type="button"
               className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
               onClick={() => setMobileMenuOpen(true)}
             >
               <span className="sr-only">Open main menu</span>
               <Bars3Icon className="h-6 w-6" aria-hidden="true" />
             </button>
           </div>
           <div className="hidden lg:flex lg:gap-x-12">
             {navigation.map((item) => (
               <Link key={item.name} href={route(item.route)} className="text-sm font-semibold leading-6 text-white">
                 {item.name}
               </Link>
             ))}
           </div>
           <div className=" hidden lg:flex lg:flex-1 lg:justify-end">
             <Link href={route('pages.contact')} className="bg-gradient-to-r from-mena-100 to-mena-300 text-sm font-semibold py-2.5 px-4 py-2 px-4 text-white">
               Book Now <span aria-hidden="true">&rarr;</span>
             </Link>
           </div>
         </nav>
         <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
           <div className="fixed inset-0 z-50" />
           <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
             <div className="flex items-center justify-between">
               <a href="#" className="-m-1.5 p-1.5">
                 <span className="sr-only">MENA Speakers</span>
                 <img
                   className="h-12 w-auto"
                   src="/images/logo.png"
                   alt=""
                 />
               </a>
               <button
                 type="button"
                 className="-m-2.5 rounded-md p-2.5 text-gray-700"
                 onClick={() => setMobileMenuOpen(false)}
               >
                 <span className="sr-only">Close menu</span>
                 <XMarkIcon className="h-6 w-6" aria-hidden="true" />
               </button>
             </div>
             <div className="mt-6 flow-root">
               <div className="-my-6 divide-y divide-gray-500/10">
                 <div className="space-y-2 py-6">
                   {navigation.map((item) => (
                     <a
                       key={item.name}
                       href={route(item.route)}
                       className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                     >
                       {item.name}
                     </a>
                   ))}
                 </div>
                 <div className=" hidden lg:flex lg:flex-1 lg:justify-end">
                   <Link href={route('pages.contact')} className="bg-gradient-to-r from-pink-500 to-rose-500 text-sm font-semibold py-2.5 px-4 py-2 px-4 text-white">
                     Book Now <span aria-hidden="true">&rarr;</span>
                   </Link>
                 </div>
               </div>
             </div>
           </Dialog.Panel>
         </Dialog>
       </div>
      </header>

      {/* Main content */}
      {children}

      {/* Footer */}
      <footer className="bg-black  pt-12 text-gray-400 p-6">
        <div className="max-w-7xl mx-auto py-8 grid grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="col-span-2">
            <img className={'h-20'} src="/images/Mena-logo-white.png" alt=""/>
          </div>

          <div className="">
            <p className={'font-bold text-white'}>Leave a Message</p>
            <div className="mt-4 space-y-2 flex flex-col">
              <a href="mailto:info@mena-speakers.com" className="hover:text-gray-50">info@mena-speakers.com</a>
              <a href="tel:+971559832756" className={'hover:text-gray-50'}>+971 55 98 32 756</a>
            </div>
          </div>


          <div className="">
            <p className={'font-bold text-white'}>Explore</p>

            <div className="mt-4 space-y-2 flex flex-col">
              <Link href={route('speakers.index')} className="hover:text-gray-50">Speakers</Link>
              <Link href={route('blogs.index')} className="hover:text-gray-50">Blog</Link>
              <Link href={route('faqs.index')} className="hover:text-gray-50">FAQs</Link>
              <Link href={route('pages.policy')} className="hover:text-gray-50">Privacy Policy</Link>
              <Link href={route('pages.contact')} className="hover:text-gray-50">Contact</Link>

            </div>
          </div>


          <div className="col-span-2">
            <p className={'font-bold text-white'}>Follow Us</p>
            <div className="mt-4 space-x-6 flex ">
              <a href="https://www.facebook.com/menaspeakers" target="_blank" className="hover:text-gray-50">
                <svg className={'w-8 h-8'} xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve"  fill="#fff" stroke="#fff" viewBox="-143 145 512 512"><path d="M329 145h-432c-22.1 0-40 17.9-40 40v432c0 22.1 17.9 40 40 40h432c22.1 0 40-17.9 40-40V185c0-22.1-17.9-40-40-40zm10 472c0 5.5-4.5 10-10 10h-432c-5.5 0-10-4.5-10-10V185c0-5.5 4.5-10 10-10h432c5.5 0 10 4.5 10 10v432z"/><path d="M146.8 313.7c10.3 0 21.3 3.2 21.3 3.2l6.6-39.2s-14-4.8-47.4-4.8c-20.5 0-32.4 7.8-41.1 19.3-8.2 10.9-8.5 28.4-8.5 39.7v25.7H51.2v38.3h26.5v133h49.6v-133h39.3l2.9-38.3h-42.2v-29.9c0-10.3 9.2-14 19.5-14z"/></svg>

              </a>
              <a href="https://www.instagram.com/menaspeakers" target="_blank" className="hover:text-gray-50">
                <svg className={'w-8 h-8'} xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve"  fill="#fff" stroke="#fff" viewBox="-143 145 512 512"><path d="M113 145c-141.4 0-256 114.6-256 256s114.6 256 256 256 256-114.6 256-256-114.6-256-256-256zm159.8 415.7c-20.8 20.8-44.9 37.1-71.8 48.4-27.8 11.8-57.4 17.7-88 17.7-30.5 0-60.1-6-88-17.7-26.9-11.4-51.1-27.7-71.8-48.4-20.8-20.8-37.1-44.9-48.4-71.8C-107 461.1-113 431.5-113 401s6-60.1 17.7-88c11.4-26.9 27.7-51.1 48.4-71.8 20.9-20.8 45-37.1 71.9-48.5C52.9 181 82.5 175 113 175s60.1 6 88 17.7c26.9 11.4 51.1 27.7 71.8 48.4 20.8 20.8 37.1 44.9 48.4 71.8 11.8 27.8 17.7 57.4 17.7 88 0 30.5-6 60.1-17.7 88-11.4 26.9-27.7 51.1-48.4 71.8z"/><path d="M191.6 273h-157c-27.3 0-49.5 22.2-49.5 49.5v157.1c0 27.3 22.2 49.5 49.5 49.5h157c27.3 0 49.5-22.2 49.5-49.5V322.4c-.1-27.2-22.3-49.4-49.5-49.4zm14.2 29.5h5.7v43.4l-43.3.1-.1-43.4 37.7-.1zM76.5 374.7c8.2-11.3 21.5-18.8 36.5-18.8s28.3 7.4 36.5 18.8c5.4 7.4 8.5 16.5 8.5 26.3 0 24.8-20.2 45.1-45.1 45.1C88 446.1 68 425.8 68 401c0-9.8 3.2-18.9 8.5-26.3zm139.6 104.8c0 13.5-11 24.5-24.5 24.5h-157c-13.5 0-24.5-11-24.5-24.5V374.7h38.2c-3.3 8.1-5.2 17-5.2 26.3 0 38.6 31.4 70 70 70s70-31.4 70-70c0-9.3-1.9-18.2-5.2-26.3h38.2v104.8z"/></svg>
              </a>

              <a href="https://www.linkedin.com/company/10342646" target="_blank" className="hover:text-gray-50">
                <svg className={'w-8 h-8'} xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve"  fill="#fff" stroke="#fff" viewBox="-143 145 512 512"><path d="M113 145c-141.4 0-256 114.6-256 256s114.6 256 256 256 256-114.6 256-256-114.6-256-256-256zm159.8 415.7c-20.8 20.8-44.9 37.1-71.8 48.4-27.8 11.8-57.4 17.7-88 17.7-30.5 0-60.1-6-88-17.7-26.9-11.4-51.1-27.7-71.8-48.4-20.8-20.8-37.1-44.9-48.4-71.8C-107 461.1-113 431.5-113 401s6-60.1 17.7-88c11.4-26.9 27.7-51.1 48.4-71.8 20.9-20.8 45-37.1 71.9-48.5C52.9 181 82.5 175 113 175s60.1 6 88 17.7c26.9 11.4 51.1 27.7 71.8 48.4 20.8 20.8 37.1 44.9 48.4 71.8 11.8 27.8 17.7 57.4 17.7 88 0 30.5-6 60.1-17.7 88-11.4 26.9-27.7 51.1-48.4 71.8z"/><path d="M-8.5 348.4h49.9v159.7H-8.5zM15.4 273c-18.4 0-30.5 11.9-30.5 27.7 0 15.5 11.7 27.7 29.8 27.7h.4c18.8 0 30.5-12.3 30.4-27.7-.4-15.8-11.7-27.7-30.1-27.7zM177.7 346.9c-28.6 0-46.5 15.6-49.8 26.6v-25.1H71.8c.7 13.3 0 159.7 0 159.7h56.1v-86.3c0-4.9-.2-9.7 1.2-13.1 3.8-9.6 12.1-19.6 27-19.6 19.5 0 28.3 14.8 28.3 36.4v82.6H241v-88.8c0-49.4-27.8-72.4-63.3-72.4z"/></svg>
              </a>

              <a href="https://www.twitter.com/menaspeakers" target="_blank" className="hover:text-gray-50">
                <svg className={'w-8 h-8'} xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve"  fill="#fff" stroke="#fff" viewBox="-143 145 512 512"><path d="M329 145h-432c-22.1 0-40 17.9-40 40v432c0 22.1 17.9 40 40 40h432c22.1 0 40-17.9 40-40V185c0-22.1-17.9-40-40-40zm10 472c0 5.5-4.5 10-10 10h-432c-5.5 0-10-4.5-10-10V185c0-5.5 4.5-10 10-10h432c5.5 0 10 4.5 10 10v432z"/><path d="M146.8 313.7c10.3 0 21.3 3.2 21.3 3.2l6.6-39.2s-14-4.8-47.4-4.8c-20.5 0-32.4 7.8-41.1 19.3-8.2 10.9-8.5 28.4-8.5 39.7v25.7H51.2v38.3h26.5v133h49.6v-133h39.3l2.9-38.3h-42.2v-29.9c0-10.3 9.2-14 19.5-14z"/></svg>
              </a>


            </div>
          </div>


        </div>
        <div className="max-w-7xl mx-auto p-6 text-gray-300">
          <p>© Copyright MENA SPEAKERS All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
