import {
  CalendarIcon,
  ClipboardListIcon,
  ClockIcon,
  InboxIcon,
  PlusCircleIcon,
} from "@heroicons/react/outline"
import React from "react"

type Props = {
  title: string
  icon: JSX.Element
  extraClassNames?: string
}

const lists = [
  ["ALL", 1],
  ["Заметки", 2],
  ["Заметки 2", 3],
]

const GroupItem: React.FC<Props> = ({ title, icon, extraClassNames = "" }) => (
  <button
    type="button"
    className={`
      grid grid-cols-2 gap-2 justify-items-start p-3
      bg-gray-200 rounded-xl text-gray-500 font-bold
      hover:bg-gray-300 focus:bg-gray-300
      ${extraClassNames}
    `}
  >
    <span className="text-slate-50 bg-violet-400 p-[0.30rem] rounded-full">
      {icon}
    </span>
    <span className="justify-self-end text-2xl font-bold">1</span>
    <h3 className="col-span-2">{title}</h3>
  </button>
)

const Sidebar: React.FC = (props) => {
  return (
    <nav className="fixed top-12 flex flex-col h-full w-80 pt-4 pb-12 px-3 bg-gray-100">
      <div className="box-border w-full grid gap-3 grid-cols-2 grid-rows-2">
        <GroupItem title="Сегодня" icon={<ClockIcon className="w-6" />} />
        <GroupItem title="Запланировано" icon={<CalendarIcon className="w-6" />} />
        <GroupItem
          title="Все"
          icon={<InboxIcon className="w-6" />}
          extraClassNames="col-span-2"
        />
      </div>
      <h3 className="mt-6 mb-2 px-3 text-left text-gray-400 font-bold">
        Мои списки
      </h3>
      <ul className="px-3 text-left text-gray-600 font-bold">
        {lists.map(([name, count]) => (
          <li className="">
            <button
              type="button"
              className="flex flex-row items-center w-full my-2 text-lg"
            >
              <span className="text-slate-50 bg-indigo-400 p-[0.30rem] rounded-full mr-3">
                <ClipboardListIcon className="w-6" />
              </span>
              {name}
              <span className="ml-auto text-gray-400">{count}</span>
            </button>
          </li>
        ))}
      </ul>
      <button className="flex flex-row text-gray-400 font-bold mt-auto mb-3">
        <PlusCircleIcon className="w-6 mr-3" />
        Новый список
      </button>
    </nav>
  )
}

export default Sidebar
