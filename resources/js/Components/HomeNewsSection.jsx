import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

function HomeNewsSection({news}) {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-gray-900 font-semibold text-4xl">
          Our News
        </h3>

        <div className="mt-12 relative  w-full lg:w-[80%] mx-auto">
          <div className="z-20 w-full flex justify-end ">
            <div className=" lg:w-[70%]">
              <div className="relative">
                <img className={'w-full h-full object-cover'} src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2012&q=80" alt=""/>
                <div className="absolute inset-0 bg-mena-300/70">
                  <div className=" w-full h-full flex items-center justify-center">
                    <button onClick={() => setPlayVideo(true)} className={'ml-32 z-10'}>
                      <svg className={'w-16 h-16'} xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" fill="#ededed" stroke="#ededed" viewBox="0 0 1800 1800"><g fill="#fff"><path d="m1407.629 872.813-714.547-412.54a31.387 31.387 0 0 0-47.078 27.182v631.583c0 17.33 14.051 31.385 31.385 31.385s31.385-14.055 31.385-31.385V541.814l620.392 358.18-555.918 320.967c-15.014 8.669-20.154 27.864-11.489 42.874 5.815 10.07 16.363 15.692 27.213 15.692a31.308 31.308 0 0 0 15.662-4.203l602.995-348.148a31.39 31.39 0 0 0 0-54.363z"/><path d="M899.993 5.324c-493.322 0-894.67 401.352-894.67 894.679 0 493.322 401.348 894.674 894.67 894.674 493.331 0 894.683-401.352 894.683-894.674 0-493.327-401.352-894.679-894.683-894.679zm0 1726.582c-458.71 0-831.899-373.188-831.899-831.903S441.283 68.095 899.993 68.095c458.719 0 831.912 373.193 831.912 831.908s-373.193 831.903-831.912 831.903z"/></g></svg>
                    </button>
                  </div>

                </div>
              </div>
            </div>
            <div className=" absolute inset-0 ">
              <div className="w-full lg:w-1/2 shadow-2xl ">
                <div className={'bg-blue-50 p-8 lg:p-24 mt-2'}>
                  <h3 className="text-3xl leading-relaxed">Academic Search Engine</h3>
                  <div className={'mt-6'}>
                    <p className="">The correct Marketing timing to release the product plays a vital role in success of the company.</p>
                    <p className="">Validating the results to attract additional resource  </p>
                  </div>
                </div>
                <div>
                  <div className={'bg-gray-50 p-6'}>

                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      <Transition.Root show={playVideo} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setPlayVideo}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden text-left transition-all  sm:w-full sm:max-w-5xl">
                  <div className={'hidden lg:block'}>
                    <iframe width="884" height="497" src="https://www.youtube.com/embed/4tUz05_WSvc"
                            title="Masterclass | Public Speaking | MENA Speakers | Saana Azzam" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                  </div>
                  <div className={'lg:hidden'}>
                    <iframe width="400" height="300" src="https://www.youtube.com/embed/4tUz05_WSvc"
                            title="Masterclass | Public Speaking | MENA Speakers | Saana Azzam" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                  </div>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </section>
  );
}

export default HomeNewsSection;
