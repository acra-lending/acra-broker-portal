import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  return (
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
       <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
  <div className="mb-2 sm:mb-0">
    <a href="/home" className="text-2xl no-underline text-grey-darkest hover:text-blue-dark">Acra Lending</a>
  </div>
  <div>
    <a href="/one" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">Sign Out</a>
  </div>
</nav>

            </div>
  )
}