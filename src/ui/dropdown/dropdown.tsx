import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { cn } from '../../utils/cn'
import "./style.css"

const currency = [
  {
    id: 0,
    title: 'All Networks',
    image:
      'public/images/ethereum.png',
  },
  {
    id: 1,
    title: 'Ethereum',
    image:
      'public/images/ethereum.png',
  },
  {
    id: 2,
    title: 'Arbitrum',
    image:
      'public/images/arbitrum.png',
  },
  {
    id: 3,
    title: 'Aurora',
    image:
      'public/images/aurora.png',
  },
  {
    id: 4,
    title: 'Avalanche',
    image:
      'public/images/avalanche.png',
  },
  {
    id: 5,
    title: 'BSC',
    image:
      'public/images/BSC.png',
  },
]

export default function Example() {
  const [selected, setSelected] = useState(currency[0])

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="relative">
            <Listbox.Button className="relative w-full cursor-default rounded-md bg-my-gray py-1.5 pl-3 pr-10 text-left text-gray-900 focus:outline-none focus:ring-2 text-[18px] max-xl:text-base focus:ring-indigo-500 max-md:text-xs">
              <span className="flex items-center">
                <img src={selected.image} alt="" className="h-5 w-5 max-md:h-4 max-md:w-4 flex-shrink-0 rounded-md" />
                <span className="ml-3 block truncate">{selected.title}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <img className={`h-3 w-3 transition-all ease-out ${open?'rotate-180':''}`} src="public/images/arrowdropdown.svg" alt="" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 min-w-[200px] w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-[18px] max-xl:text-base max-md:text-xs">
                {currency.map((money) => (
                  <Listbox.Option
                    key={money.id}
                    className={({ active }) =>
                      cn(
                        active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={money}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <img src={money.image} alt="" className="h-5 w-5 max-md:h-4 max-md:w-4 flex-shrink-0 rounded-md" />
                          <span
                            className={cn(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                          >
                            {money.title}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={cn(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            {/* <CheckIcon className="h-5 w-5" aria-hidden="true" /> */}
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}