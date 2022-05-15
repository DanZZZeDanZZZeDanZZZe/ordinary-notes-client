import { CheckIcon } from "@heroicons/react/outline"
import React, { useEffect, useRef, useState } from "react"

const tasks = ["покушать", "сделать уроки", "потанцевать", "выпить пива"]

const CheckBox = () => {
  const [focus, setFocus] = useState(false)
  const [checked, setChecked] = useState(false)

  return (
    <label className="flex items-center mb-4">
      <input
        type="checkbox"
        value=""
        className="sr-only"
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={(e) => setChecked(e.target.checked)}
        checked={checked}
      />
      <div
        aria-hidden="true"
        className={`
          ${focus ? "border-black" : "border-indigo-400"}
          not-sr-only w-6 h-6 text-indigo-400 rounded-full border-2
        `}
      >
        {checked ? <CheckIcon /> : ""}
      </div>
      <span className="ml-2 text-md font-medium text-gray-800 ">
        Default checkbox
      </span>
    </label>
  )
}

const Tasks: React.FC = (props) => {
  return (
    <main className="absolute top-12 w-screen px-80">
      <div className="pt-10 pl-60 text-left">
        <h1 className="text-4xl font-bold text-indigo-400">ALL</h1>
        <div className="flex justify-between text-lg py-2 border-b-[1px]">
          <div className="text-gray-400">7 выполенены</div>
          <button className="font-bold text-indigo-400">Показать</button>
        </div>
        <ul className="py-8">
          <li>
            <CheckBox />
          </li>
        </ul>
      </div>
    </main>
  )
}

export default Tasks
