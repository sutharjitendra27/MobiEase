import React, { Fragment, ReactNode } from 'react'
import Link from 'next/link'
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import Icon from '@/components/ui/Icon'

interface DropdownItem {
  label: string
  link?: string
  icon?: string
  hasDivider?: boolean
}

interface DropdownProps {
  label?: string | any
  wrapperClass?: string
  labelClass?: string
  children?: ReactNode
  classMenuItems?: string
  items?: DropdownItem[]
  classItem?: string
  className?: string
}

const Dropdown: React.FC<DropdownProps> = ({
  label = 'Dropdown',
  wrapperClass = 'inline-block',
  labelClass = 'label-class-custom',
  children,
  classMenuItems = 'mt-2 w-[220px]',
  items = [
    {
      label: 'Action',
      link: '#',
    },
    {
      label: 'Another action',
      link: '#',
    },
    {
      label: 'Something else here',
      link: '#',
    },
  ],
  classItem = 'px-4 py-2',
  className = '',
}) => {
  return (
    <div className={`relative ${wrapperClass}`}>
      <Menu as='div' className={`block w-full ${className}`}>
        <MenuButton className='block w-full'>
          <div className={labelClass}>{label}</div>
        </MenuButton>

        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <MenuItems
            className={`absolute z-[9999] origin-top-right rounded border border-slate-100
          bg-white shadow-dropdown dark:border-slate-700 dark:bg-slate-800 ltr:right-0 rtl:left-0
          ${classMenuItems}
          `}
          >
            <div>
              {children
                ? children
                : items?.map((item, index) => (
                    <MenuItem key={index}>
                      {({ active }) => (
                        <div
                          className={`${
                            active
                              ? 'bg-slate-100 text-slate-900 dark:bg-slate-600 dark:bg-opacity-50 dark:text-slate-300'
                              : 'text-slate-600 dark:text-slate-300'
                          } block ${item.hasDivider ? 'border-t border-slate-100 dark:border-slate-700' : ''}`}
                        >
                          {item.link ? (
                            <Link href={item.link} className={`block ${classItem}`}>
                              {item.icon ? (
                                <div className='flex items-center'>
                                  <span className='block text-xl ltr:mr-3 rtl:ml-3'>
                                    <Icon icon={item.icon} />
                                  </span>
                                  <span className='block text-sm'>{item.label}</span>
                                </div>
                              ) : (
                                <span className='block text-sm'>{item.label}</span>
                              )}
                            </Link>
                          ) : (
                            <div className={`block cursor-pointer ${classItem}`}>
                              {item.icon ? (
                                <div className='flex items-center'>
                                  <span className='block text-xl ltr:mr-3 rtl:ml-3'>
                                    <Icon icon={item.icon} />
                                  </span>
                                  <span className='block text-sm'>{item.label}</span>
                                </div>
                              ) : (
                                <span className='block text-sm'>{item.label}</span>
                              )}
                            </div>
                          )}
                        </div>
                      )}
                    </MenuItem>
                  ))}
            </div>
          </MenuItems>
        </Transition>
      </Menu>
    </div>
  )
}

export default Dropdown
