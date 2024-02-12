import React, { Fragment, useState } from 'react'
import {Dialog, Menu, Transition} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {Link} from "@inertiajs/react";
import InlineNewsLetterForm from "@/Components/InlineNewsLetterForm";

const navigation = [
  { name: 'Home', dropdown: false, route: 'index' },
  { name: 'Speakers', dropdown: false, route: 'speakers.index' },
  { name: 'Gallery', dropdown: false, route: 'gallery.index' },
  { name: 'Blog', dropdown: false, route: 'blogs.index' },
  { name: 'Spotlight', dropdown: true, route: null, children: [
      { name: 'Sports', route: null, link: 'https://sports.mena-speakers.com?utm_source=mena-speakers.com&utm_medium=referral&utm_campaign=mena-speakers.com' },
      { name: 'Wellness', route: null, link: 'https://wellness.mena-speakers.com?utm_source=mena-speakers.com&utm_medium=referral&utm_campaign=mena-speakers.com' },
      { name: 'Coaching', route: null,  link: 'https://coaching.mena-speakers.com?utm_source=mena-speakers.com&utm_medium=referral&utm_campaign=mena-speakers.com' },
      ]
  },
  { name: 'Contact', dropdown: false, route: 'pages.contact' },
]

export default function MainLayout({ children} : {children: React.ReactNode}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50 bg-black/30">
       <div className="max-w-7xl mx-auto">
         <nav className="flex items-center justify-between p-3 lg:px-8" aria-label="Global">
           <div className="flex lg:flex-1">
             <Link href="/" className="-m-1.5 p-1.5" aria-label={'MENA Speakers Logo'}>
               <span className="sr-only">MENA Speakers</span>
               <img
                 className="h-12 w-auto"
                 src="/images/Mena-logo-white.png"
                 alt="mena speakers logo"
                 width={'142'}
                  height={'48'}
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
              !item.dropdown ? (
                <Link key={item.name} href={route(item.route)} className="text-sm font-semibold leading-6 text-white">
                  {item.name}
                </Link>
             )
              : (
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button className="text-sm font-semibold leading-6 text-white">
                        { item.name}
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-1 py-1 ">
                          {
                            item.children.map((child, index) => (
                              <Menu.Item key={index}>
                                <a
                                  href={ child.route ? route(child.route) : child.link}
                                  className="group flex w-full hover:bg-mena-300 hover:text-white items-center rounded-md px-2 py-2 text-sm"
                                  target={child.link ? '_blank' : ''}
                                >
                                  {child.name}
                                </a>
                              </Menu.Item>
                            ))
                          }
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
              )

              ))
             }
           </div>
           <div className=" hidden lg:flex lg:flex-1 lg:justify-end">
             <Link href={route('pages.contact')} className={"gradient-btn text-sm font-semibold py-2.5 px-4 py-2 px-4 text-white"}>
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
                   src="/images/mena-speakers-logo.png"
                   alt="mena speakers logo"
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
                 <div className="space-y-2 py-6 flex flex-col">
                   {navigation.map((item) => (

                     !item.dropdown ? (
                         <Link key={item.name} href={route(item.route)} className="text-sm font-semibold leading-6">
                           {item.name}
                         </Link>) : (

                      <div className={'px-2'}>
                        {
                          item.children.map((child, index) => (
                            <a
                              href={ child.route ? route(child.route) : child.link}
                              className="group flex w-full hover:bg-mena-300 hover:text-white items-center rounded-md px-2 py-2 text-sm"
                              target={child.link ? '_blank' : ''}
                            >
                              {child.name}
                            </a>
                          ))
                        }
                      </div>
                   )))}
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
      <footer className="bg-black  pt-12 text-gray-400 p-6" id={'footer'}>
        <div className="max-w-7xl mx-auto py-8 grid grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="col-span-1">
            <img className={'h-20'} width={237} height={80} src="/images/Mena-logo-white.png" alt="mena speakers logo"/>
          </div>

          <div className="col-span-1 grid grid-cols-1 lg:grid-cols-2 lg:col-span-2">
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

          </div>

          <div className="col-span-1 lg:col-span-2">
            <div className="">
              <p className={'font-bold text-white'}>Follow Us</p>
              <div className="mt-4 space-x-6 flex ">
                <a href="https://www.facebook.com/menaspeakers" aria-label="Facebook" target="_blank"
                   className={"hover:-translate-y-1.5 hover:duration-200"}>
                  <svg className={'w-8 h-8'} xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" fill="#fff"
                       stroke="#fff" viewBox="-143 145 512 512">
                    <path
                      d="M329 145h-432c-22.1 0-40 17.9-40 40v432c0 22.1 17.9 40 40 40h432c22.1 0 40-17.9 40-40V185c0-22.1-17.9-40-40-40zm10 472c0 5.5-4.5 10-10 10h-432c-5.5 0-10-4.5-10-10V185c0-5.5 4.5-10 10-10h432c5.5 0 10 4.5 10 10v432z"/>
                    <path
                      d="M146.8 313.7c10.3 0 21.3 3.2 21.3 3.2l6.6-39.2s-14-4.8-47.4-4.8c-20.5 0-32.4 7.8-41.1 19.3-8.2 10.9-8.5 28.4-8.5 39.7v25.7H51.2v38.3h26.5v133h49.6v-133h39.3l2.9-38.3h-42.2v-29.9c0-10.3 9.2-14 19.5-14z"/>
                  </svg>

                </a>
                <a href="https://www.instagram.com/menaspeakers" aria-label="Instagram" target="_blank"
                   className={"hover:-translate-y-1.5 hover:duration-200"}>
                  <svg className={'w-8 h-8'} xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" fill="#fff"
                       stroke="#fff" viewBox="-143 145 512 512">
                    <path
                      d="M113 145c-141.4 0-256 114.6-256 256s114.6 256 256 256 256-114.6 256-256-114.6-256-256-256zm159.8 415.7c-20.8 20.8-44.9 37.1-71.8 48.4-27.8 11.8-57.4 17.7-88 17.7-30.5 0-60.1-6-88-17.7-26.9-11.4-51.1-27.7-71.8-48.4-20.8-20.8-37.1-44.9-48.4-71.8C-107 461.1-113 431.5-113 401s6-60.1 17.7-88c11.4-26.9 27.7-51.1 48.4-71.8 20.9-20.8 45-37.1 71.9-48.5C52.9 181 82.5 175 113 175s60.1 6 88 17.7c26.9 11.4 51.1 27.7 71.8 48.4 20.8 20.8 37.1 44.9 48.4 71.8 11.8 27.8 17.7 57.4 17.7 88 0 30.5-6 60.1-17.7 88-11.4 26.9-27.7 51.1-48.4 71.8z"/>
                    <path
                      d="M191.6 273h-157c-27.3 0-49.5 22.2-49.5 49.5v157.1c0 27.3 22.2 49.5 49.5 49.5h157c27.3 0 49.5-22.2 49.5-49.5V322.4c-.1-27.2-22.3-49.4-49.5-49.4zm14.2 29.5h5.7v43.4l-43.3.1-.1-43.4 37.7-.1zM76.5 374.7c8.2-11.3 21.5-18.8 36.5-18.8s28.3 7.4 36.5 18.8c5.4 7.4 8.5 16.5 8.5 26.3 0 24.8-20.2 45.1-45.1 45.1C88 446.1 68 425.8 68 401c0-9.8 3.2-18.9 8.5-26.3zm139.6 104.8c0 13.5-11 24.5-24.5 24.5h-157c-13.5 0-24.5-11-24.5-24.5V374.7h38.2c-3.3 8.1-5.2 17-5.2 26.3 0 38.6 31.4 70 70 70s70-31.4 70-70c0-9.3-1.9-18.2-5.2-26.3h38.2v104.8z"/>
                  </svg>
                </a>

                <a href="https://www.linkedin.com/company/10342646" aria-label="LinkedIn" target="_blank"
                   className={"hover:-translate-y-1.5 hover:duration-200"}>
                  <svg className={'w-8 h-8'} xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" fill="#fff"
                       stroke="#fff" viewBox="-143 145 512 512">
                    <path
                      d="M113 145c-141.4 0-256 114.6-256 256s114.6 256 256 256 256-114.6 256-256-114.6-256-256-256zm159.8 415.7c-20.8 20.8-44.9 37.1-71.8 48.4-27.8 11.8-57.4 17.7-88 17.7-30.5 0-60.1-6-88-17.7-26.9-11.4-51.1-27.7-71.8-48.4-20.8-20.8-37.1-44.9-48.4-71.8C-107 461.1-113 431.5-113 401s6-60.1 17.7-88c11.4-26.9 27.7-51.1 48.4-71.8 20.9-20.8 45-37.1 71.9-48.5C52.9 181 82.5 175 113 175s60.1 6 88 17.7c26.9 11.4 51.1 27.7 71.8 48.4 20.8 20.8 37.1 44.9 48.4 71.8 11.8 27.8 17.7 57.4 17.7 88 0 30.5-6 60.1-17.7 88-11.4 26.9-27.7 51.1-48.4 71.8z"/>
                    <path
                      d="M-8.5 348.4h49.9v159.7H-8.5zM15.4 273c-18.4 0-30.5 11.9-30.5 27.7 0 15.5 11.7 27.7 29.8 27.7h.4c18.8 0 30.5-12.3 30.4-27.7-.4-15.8-11.7-27.7-30.1-27.7zM177.7 346.9c-28.6 0-46.5 15.6-49.8 26.6v-25.1H71.8c.7 13.3 0 159.7 0 159.7h56.1v-86.3c0-4.9-.2-9.7 1.2-13.1 3.8-9.6 12.1-19.6 27-19.6 19.5 0 28.3 14.8 28.3 36.4v82.6H241v-88.8c0-49.4-27.8-72.4-63.3-72.4z"/>
                  </svg>
                </a>

                <a href="https://www.twitter.com/menaspeakers" aria-label="Twitter" target="_blank"
                   className={"hover:-translate-y-1.5 hover:duration-200"}>
                  <svg className={'w-8 h-8'} xmlns="http://www.w3.org/2000/svg" fill="#fff" stroke="#fff"
                       viewBox="0 0 1920 1920">
                    <path fillRule="evenodd"
                          d="M1643.825 518.606c-14.457 11.294-22.588 28.8-21.685 47.096.565 16.377 1.017 32.753 1.017 49.355 0 530.372-373.497 1079.153-998.513 1079.153-122.203 0-242.598-24.282-355.765-71.153 136.433-22.588 266.428-82.447 374.965-173.816 17.957-15.247 24.62-39.868 16.828-62.005-7.793-22.136-28.574-37.157-52.179-37.722-105.374-2.146-200.81-62.682-256.376-157.214 38.06-1.13 79.059-7.116 109.779-16.038 24.847-7.228 41.562-30.381 40.771-56.132-.903-25.863-19.2-47.774-44.499-53.308-112.15-24.282-194.71-116.781-222.607-243.84 32.076 6.438 62.344 8.47 79.06 8.922 24.62 2.711 47.322-14.456 55.453-38.06 8.02-23.492-.226-49.582-20.442-64.151-78.042-56.245-161.619-161.167-161.619-286.42 0-30.832 3.84-61.326 11.181-90.804 195.163 217.186 461.478 348.31 743.83 363.558 18.975 1.016 34.674-6.438 46.08-19.765 11.408-13.327 15.926-31.398 12.312-48.565-5.648-25.637-8.471-52.178-8.471-79.058 0-188.951 141.063-342.664 314.428-342.664 87.19 0 168.283 37.835 228.141 106.73 13.327 15.36 34.334 22.475 54.212 18.183 28.687-6.099 56.922-13.779 84.706-23.153-16.49 16.715-34.673 31.624-54.438 44.386-22.25 14.343-31.51 42.014-22.475 66.861s34.56 39.868 60.31 36.593c14.683-1.92 29.252-4.179 43.709-7.002-18.297 17.731-37.497 34.447-57.713 50.033m261.685-199.68c-16.716-18.636-43.596-23.83-66.41-13.214-4.066 1.92-8.132 3.84-12.31 5.76 17.054-30.269 30.946-62.683 40.997-96.678 6.777-22.588-1.242-46.984-20.103-61.214-18.974-14.118-44.5-15.247-64.49-2.485-58.277 37.384-120.96 64.828-186.466 82.108-78.268-76.8-181.948-120.17-289.355-120.17-235.595 0-427.37 204.424-427.37 455.606 0 9.487.227 18.974.791 28.348C626 564.008 390.517 424.977 226.64 208.469c-11.52-15.247-30.155-23.04-49.242-22.136-19.2 1.468-36.367 12.536-45.516 29.477-37.157 68.894-56.809 147.614-56.809 227.464 0 86.626 28.687 165.007 70.25 230.739-19.426 9.035-32.98 28.574-32.98 51.388v5.195c0 139.821 49.808 261.91 133.497 344.47-9.035 2.937-17.28 8.246-23.943 15.36a56.566 56.566 0 0 0-12.537 54.326c40.772 136.997 137.788 242.145 258.41 289.807-122.88 69.571-268.688 97.129-404.443 80.753-26.541-3.953-50.485 11.858-59.633 36.028-9.261 24.282-.677 51.84 20.781 66.522 179.69 123.784 387.276 189.29 600.17 189.29 695.717 0 1111.454-606.156 1111.454-1192.095 0-8.583-.113-17.054-.339-25.524 68.555-57.149 127.51-125.365 175.737-203.069 13.214-21.345 10.842-48.903-5.986-67.538"/>
                  </svg>

                </a>

                <a href="https://www.youtube.com/@menaspeakers4868" aria-label="Youtube" target="_blank"
                   className={"hover:-translate-y-1.5 hover:duration-200"}>
                  <svg className={'w-8 h-8'} xmlns="http://www.w3.org/2000/svg" fill="#fff" stroke="#fff"
                       preserveAspectRatio="xMidYMid" viewBox="0 -4 32 32">
                    <path
                      d="M30.722 20.579c-.585 1.315-2.094 2.506-3.511 2.769-.145.027-3.608.652-11.201.652h-.02c-7.592 0-11.058-.625-11.202-.651-1.417-.264-2.927-1.455-3.513-2.771C1.223 20.461.001 17.647.001 12c0-5.647 1.222-8.462 1.274-8.579C1.861 2.105 3.371.915 4.788.652 4.932.625 8.398 0 15.99 0c7.613 0 11.076.625 11.22.651 1.418.264 2.927 1.454 3.513 2.769C30.775 3.538 32 6.353 32 12s-1.225 8.461-1.278 8.579ZM28.893 4.23c-.312-.701-1.29-1.471-2.048-1.612C26.813 2.612 23.386 2 16.01 2c-7.395 0-10.825.612-10.858.618-.758.141-1.735.911-2.048 1.616-.01.021-1.102 2.595-1.102 7.766 0 5.17 1.092 7.744 1.104 7.77.311.701 1.288 1.471 2.047 1.612.032.006 3.462.618 10.837.618h.02c7.376 0 10.803-.612 10.836-.618.758-.141 1.735-.911 2.048-1.616.01-.022 1.104-2.596 1.104-7.766s-1.094-7.745-1.105-7.77ZM13.541 17.846a.994.994 0 0 1-1.016.029 1 1 0 0 1-.517-.875V7a.999.999 0 0 1 1.526-.851l8.019 4.956a.999.999 0 0 1 .007 1.696l-8.019 5.045Zm.468-9.052v6.395l5.128-3.226-5.128-3.169Z"/>
                  </svg>
                </a>


              </div>
            </div>
            <div className={'w-full'}>

              <div className={'py-2 mt-8'}>
                <h3 className="font-semibold text-white">
                  Subscribe to our newsletter
                </h3>
              </div>
             <InlineNewsLetterForm />
            </div>
          </div>


        </div>
        <div className="max-w-7xl mx-auto p-6 text-gray-300">
          <p>© Copyright MENA Speakers All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
