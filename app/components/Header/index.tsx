"use client";

import { useState } from "react";
import { UserIcon, Bars3Icon } from "@heroicons/react/24/outline";
import MobileMenu from "./MobileMenu";

const navigation = [
  { title: 'Home', link: '/' },
  { title: 'About Us', link: '/' },
  { title: 'Contact Us', link: '/' },
  { title: 'Collection', link: '/' }
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <MobileMenu open={open} setOpen={setOpen} navigation={navigation} />
      <header className="">
        <nav aria-label="Main Navigation" className="max-w-7xl mx-auto px-4">
          <div className="border-b border-gray-200">
            <div className="flex h-16 justify-between items-center">
              <button
                type="button"
                onClick={() => setOpen(!open)}
                className="relative md:hidden p-2 text-gray-400"
              >
                <span className="sr-only">Open Menu</span>
                {/* Background for better click area */}
                <span className="absolute -inset-0.5" />
                <Bars3Icon className="size-6" />
              </button>
              {/* Logo */}
              <div>
                <a href="/">
                  <span className="sr-only">OpenCartX</span>
                  OpenCartX
                </a>
              </div>
              {/* Navigation Links */}
              <div className="hidden md:flex space-x-8 h-full">
                {navigation.map((nav) => (
                  <a
                    key={nav.title}
                    href={nav.link}
                    className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    {nav.title}
                  </a>
                ))}
              </div>
              {/* Account */}
              <div>
                <a href="/" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Account</span>
                  <UserIcon className="size-6" />
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
