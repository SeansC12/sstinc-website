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
    name: "Gallery",
    href: "/Gallery",
    heading: "Gallery",
    current: false,
  },
  {
    name: "About Us",
    href: "/AboutUs",
    heading: "About Us",
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
        <Disclosure as="nav" className="bg-whi">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Link href="/" className="cursor-pointer">
                        <Image
                          src="https://lh3.googleusercontent.com/w8xFYKjELfKk1cjvkj17E_PJsgBsWm2909uc5Qna6mGJBB_axoB63YDO5NZRZTZYl-SEwqQ7Gu2UA9k6vDZ1NtV8MuHo6bZ4ddR50jpoe8HkhUbzyjfxQhEKPYbyV2HXesf7fvMV9t7fSwgdonWotoXlwElhfC2B9zQYC7a47O-sJ20xV4mlkGXEcogwL4FFMg-EaTtJPOiUKhEjNeXiO8Drn7foIuJkw02O4BZpIoOZELk9GMw1ojKAs_9_yJjseY_5yKZJ6Iu1Git55zyiK-asITny33YxMy6Kn5UVweyfPX_GQ2qdkaf7VRw2X6-OPPkFQM2sGg4V_dgr0KJAV-it6mHd6iIt15HZAucEs4EG3N2uX3ojw00fMr6AkvgawyzTlYDVo4hUmtygai9fuiE8A931xrJPFf-apQljqm3MnLh3Fud2SRlFFLxGsvA0njaAmhyJo1uJwfjpHtn9MOXZWgm_xmSL-QzTHdmUBAADJuMDW7mJmjSlgvLZSsc1O6K85GgtD7kqFkkcanufq7l5j7berDOd-V3lLuPsXa6hG4G1sto9pHxmTDy-Ahhjj2ghyFFDid7x48fcn7UsKIjWT7COphXoFpvyToJEi3-K3Eyq_gZDc1f3yQ_D0_APZT-ORpHvYEcdsPUePWyjf6gQg-UyfS3r4lx2nVggjwcdQLYaLQos2gTZT9QM-MBlM9BQhqqb7Lab6QxtL4wGh5yTIHJr5oZl2RwFaTaFTh6wfyuIhq0yU1uO5ybrfaywR5pCWHiKnjzqePPxaX_jnetMyPaN-TCN2yHjs6_coO7ZwF1HXHnt6zS-fNsTinbMeGFm-g=s1000-no"
                          width={52}
                          height={52}
                        />
                      </Link>
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-gray-900 text-white"
                                : "text-black hover:bg-gray-700 hover:text-white",
                              "px-3 py-2 rounded-md text-sm font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
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
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">
              {navigation[navigationObjectKey].heading}
            </h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {/* <div>{navigation[navigationObjectKey].description}</div> */}
            <div className="px-4 py-6 sm:px-0"></div>
          </div>
        </main>
      </div>
    </>
  );
}
