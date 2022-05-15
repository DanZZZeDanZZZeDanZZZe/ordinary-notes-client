import React from "react"
import { HomeIcon, MenuIcon, PlusIcon, SearchIcon } from "@heroicons/react/outline"

const SearchInput = () => (
  <form className="w-96">
    <label htmlFor="default-search" className="sr-only">
      Search
    </label>
    <div className="relative">
      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
        <SearchIcon className="w-6 text-gray-400" />
      </div>
      <input
        type="search"
        id="default-search"
        className="block py-2 pr-4 pl-10 w-full text-sm text-gray-900 bg-slate-50 rounded-xl focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
        placeholder="Search Mockups, Logos..."
        required
      />
    </div>
  </form>
)

const Header: React.FC = (props) => {
  return (
    <header
      className="
        fixed top-0 w-screen px-2 h-12 
        flex flex-row justify-start items-center
        bg-amber-400 text-slate-50 shadow-sm
      "
    >
      <button
        type="button"
        className="rounded hover:bg-opacity-50 p-1 m-1 hover:bg-slate-50"
      >
        <MenuIcon className="w-6" />
      </button>

      <button
        type="button"
        className="rounded hover:bg-opacity-50 p-1 m-1 hover:bg-slate-50"
      >
        <HomeIcon className="w-6" />
      </button>

      <SearchInput />

      <button
        type="button"
        className="rounded hover:bg-opacity-50 p-1 m-1 hover:bg-slate-50 ml-auto"
      >
        <PlusIcon className="w-6" />
      </button>
    </header>
  )
}

export default Header
