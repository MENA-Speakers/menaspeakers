import React, { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "@inertiajs/react";
import Footer from "@/Components/Footer";
import { Toaster } from "sonner";
import { Home, Phone, User } from "lucide-react";

const navigation = [
  { name: "Home", dropdown: false, route: "index" },
  { name: "Speakers", dropdown: false, route: "speakers.index" },
  { name: "Gallery", dropdown: false, route: "gallery.index" },
  { name: "Blog", dropdown: false, route: "blogs.index" },
  {
    name: "Spotlight",
    dropdown: true,
    route: null,
    children: [
      {
        name: "Sports",
        route: null,
        link: "https://sports.mena-speakers.com?utm_source=mena-speakers.com&utm_medium=referral&utm_campaign=mena-speakers.com",
      },
      {
        name: "Wellness",
        route: null,
        link: "https://wellness.mena-speakers.com?utm_source=mena-speakers.com&utm_medium=referral&utm_campaign=mena-speakers.com",
      },
      {
        name: "Coaching",
        route: null,
        link: "https://coaching.mena-speakers.com?utm_source=mena-speakers.com&utm_medium=referral&utm_campaign=mena-speakers.com",
      },
    ],
  },
];

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white relative">
      <header
        className={`absolute inset-x-0 top-0 z-50 ${
          !route().current("index") && "bg-black "
        }`}
      >
        <div className="max-w-7xl justify-between items-center px-6 flex  mx-auto">
          <Link href="/" className=" p-1.5" aria-label={"MENA Speakers Logo"}>
            <span className="sr-only">MENA Speakers</span>
            <img
              className="h-12 w-auto"
              src="/images/Mena-logo-white.png"
              alt="mena speakers logo"
              width={"142"}
              height={"48"}
            />
          </Link>
          <nav
            className="flex items-center justify-between flex-1  pl-6 p-3"
            aria-label="Global"
          >
            {/* empty div */}
            <div className="flex"></div>
            <div className="flex  lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-start rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6 text-white" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-8">
              {navigation.map((item) =>
                !item.dropdown ? (
                  <Link
                    key={item.name}
                    href={route(item?.route)}
                    className="text-sm font-semibold leading-6 text-white"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button className="text-sm font-semibold leading-6 text-white">
                        {item.name}
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
                          {item.children.map((child, index) => (
                            <Menu.Item key={index}>
                              <a
                                href={
                                  child.route ? route(child.route) : child.link
                                }
                                className="group flex w-full hover:bg-mena-300 hover:text-white items-center rounded-md px-2 py-2 text-sm"
                                target={child.link ? "_blank" : ""}
                              >
                                {child.name}
                              </a>
                            </Menu.Item>
                          ))}
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                )
              )}
            </div>
          </nav>
          <div className=" hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              href={route("pages.contact")}
              className={
                "text-sm font-semibold bg-mena-brand py-3 px-6 rounded-xl text-white"
              }
            >
              Contact Us
            </Link>
          </div>
          <Dialog
            as="div"
            className="lg:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
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
                    {navigation.map((item) =>
                      !item.dropdown ? (
                        <Link
                          key={item.name}
                          href={route(item?.route)}
                          className="text-sm font-semibold leading-6"
                        >
                          {item.name}
                        </Link>
                      ) : (
                        <div className={"px-2"}>
                          {item?.children.map((child, index) => (
                            <a
                              href={
                                child.route ? route(child.route) : child.link
                              }
                              className="group flex w-full hover:bg-mena-300 hover:text-white items-center rounded-md px-2 py-2 text-sm"
                              target={child.link ? "_blank" : ""}
                            >
                              {child.name}
                            </a>
                          ))}
                        </div>
                      )
                    )}
                  </div>
                  <div className=" hidden lg:flex lg:flex-1 lg:justify-end">
                    <Link
                      href={route("pages.contact")}
                      aria-label={"Contact us"}
                      className="bg-gradient-to-r from-pink-500 to-rose-500 text-sm font-semibold py-2.5 px-4 py-2 px-4 text-white"
                    >
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
      <div className={`${!route().current("index") && "pt-16"}`}>
        {children}
      </div>

      {/* Footer */}
      <Footer />
      <Toaster position={"top-center"} />

      {/*MOBILE MENU*/}
      <div
        className={
          "fixed hidden bottom-0 inset-x-0 z-50 py-2 px-6 bg-mena-brand justify-between items-center"
        }
      >
        <Link href={"/"} className={"p-1.5"}>
          <span className="sr-only">MENA Speakers</span>
          <Home size={26} className={"text-white stroke-1"} />
        </Link>
        <Link href={route("speakers.index")} className={"p-1.5"}>
          <span className="sr-only">Speakers</span>
          <User size={26} className={"text-white stroke-1"} />
        </Link>
        <Link href={route("pages.contact")} className={"p-1.5"}>
          <span className="sr-only">Contact MENA Speakers</span>
          <Phone size={26} className={"text-white stroke-1"} />
        </Link>
        <div className="flex items-center">
          {/*<Link href={route('pages.contact')} aria-label={'Contact us'}>*/}
          {/*  <Phone size={26} className={'text-white stroke-1'}/>*/}
          {/*   <span aria-hidden="true">&rarr;</span>*/}
          {/*</Link>*/}
        </div>
      </div>
    </div>
  );
}
