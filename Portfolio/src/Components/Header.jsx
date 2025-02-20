'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const clicked = () => {
    setMobileMenuOpen(false);
  }

  return (
    <header className="sticky top-0 backdrop-blur-lg z-50">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1 text-white">
          <a href="#" className="p-1.5 animate-fadeIn opacity-100 hover:opacity-50 transition-all duration-500">
            <span className="">Portfolio</span>
            
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">

          <a href="#home" className="text-sm/6 font-semibold text-gray-200 hover:text-blue-300">
            Home
          </a>
          <a href="#about" className="text-sm/6 font-semibold text-gray-200 hover:text-blue-300">
            About
          </a>
          <a href="#skills" className="text-sm/6 font-semibold text-gray-200 hover:text-blue-300">
            Skills
          </a>
          <a href="#projects" className="text-sm/6 font-semibold text-gray-200 hover:text-blue-300">
            Projects
          </a>
          <a href="#contact" className="text-sm/6 font-semibold text-gray-200 hover:text-blue-300">
            Contact
          </a>
        </PopoverGroup>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden font-mono">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#273759] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">My Portfolio</span>
              
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-200"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-100/10">
              <div className="space-y-2 py-6">
                <a
                  href="#home"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-200 hover:bg-[#202d48]"
                  onClick={clicked}
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-200 hover:bg-[#202d48]"
                  onClick={clicked}
                >
                  About
                </a>
                <a
                  href="#skills"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-200 hover:bg-[#202d48]"
                  onClick={clicked}
                >
                  Skills
                </a>
                <a
                  href="#projects"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-200 hover:bg-[#202d48]"
                  onClick={clicked}
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-200 hover:bg-[#202d48]"
                  onClick={clicked}
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
