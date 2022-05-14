/* This example requires Tailwind CSS v2.0+ */
import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";

const navigation = [
  {
    name: "Home",
    href: "/",
    heading: "Home",
    current: false,
  },
  {
    name: "Past Projects",
    href: "/PastProjects",
    heading: "Past Projects",
    current: false,
  },
  {
    name: "About Us",
    href: "/AboutUs",
    heading: "About Us",
    current: false,
  },
  {
    name: "Updates",
    href: "/Updates",
    heading: "Updates",
    current: false,
  },
  
];

let navigationObjectKey = 0;

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function resetNavigation() {
  for (const key in navigation) {
    navigation[key].current = false;
  }
}

export default function Header({ tab, code }) {
  resetNavigation();
  for (const key in navigation) {
    if (navigation[key].name === tab) {
      navigation[key].current = true;
      navigationObjectKey = key;
      break;
    }
  }
  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-white">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 ml-24">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Link href="/" className="cursor-pointer">
                        <Image
                          src="https://lh3.googleusercontent.com/pw/AM-JKLVw9lw63jPNMUAzRQsWbAhYP5_OprYt-iIP7cLvvQ45mCTii6-WB-Q26vHMzMMpb7rjo25KxSJLm_O8cXvS8G8SDQYDf9UD74ppxNegrgyD2D6KAkdmV0bJU98rqjlDb_x79vgPB6crSOKYjvqFmMOR=s1000-no?authuser=0"
                          width={52}
                          height={52}
                        />
                      </Link>
                    </div>
                    <div className="md:block flex justify-center">
                      <div className="ml-10 flex flex-row space-x-4">
                        <div className="justify-self-center">
                          {navigation.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className={classNames(
                                item.current
                                  ? "bg-gray-900 ml-5 text-white"
                                  : "text-black hover:bg-gray-700 hover:text-white ml-5",
                                "px-3 py-2 rounded-md text-sm font-medium ml-5"
                              )}
                              aria-current={item.current ? "page" : undefined}
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block px-3 py-2 rounded-md text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <header className="bg-white shadow">
          <div className="border-b"></div>
        </header>
        <main>
          {/* <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0"></div>
          </div> */}
        </main>
      </div>
    </>
  );
}