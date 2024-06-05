import React from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'
import { MenuItem } from '@headlessui/react'
import Dropdown from '@/components/ui/Dropdown'
import Icon from '@/components/ui/Icon'

const ProfileLabel = () => {
  return (
    <div className='flex items-center'>
      <div className='flex-1 ltr:mr-[10px] rtl:ml-[10px]'>
        <div className='h-7 w-7 rounded-full lg:h-8 lg:w-8'>
          <img src='/assets/images/users/user.png' alt='' className='block h-full w-full rounded-full object-cover' />
        </div>
      </div>
      <div className='hidden flex-none items-center overflow-hidden text-ellipsis whitespace-nowrap text-sm font-normal text-slate-600 dark:text-white lg:flex'>
        <span className='block w-[85px] overflow-hidden text-ellipsis whitespace-nowrap'>Albert Flores</span>
        <span className='inline-block text-base ltr:ml-[10px] rtl:mr-[10px]'>
          <Icon icon='heroicons-outline:chevron-down'></Icon>
        </span>
      </div>
    </div>
  )
}

const Profile = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const ProfileMenu = [
    {
      label: 'Profile',
      icon: 'heroicons-outline:user',

      action: () => {
        router.push('/profile')
      },
    },
    {
      label: 'Chat',
      icon: 'heroicons-outline:chat',
      action: () => {
        router.push('/chat')
      },
    },
    {
      label: 'Email',
      icon: 'heroicons-outline:mail',
      action: () => {
        router.push('email')
      },
    },
    {
      label: 'Todo',
      icon: 'heroicons-outline:clipboard-check',
      action: () => {
        router.push('/todo')
      },
    },
    {
      label: 'Settings',
      icon: 'heroicons-outline:cog',
      action: () => {
        router.push('/settings')
      },
    },
    {
      label: 'Price',
      icon: 'heroicons-outline:credit-card',
      action: () => {
        router.push('/pricing')
      },
    },
    {
      label: 'Faq',
      icon: 'heroicons-outline:information-circle',
      action: () => {
        router.push('/faq')
      },
    },
    {
      label: 'Logout',
      icon: 'heroicons-outline:login',
      action: () => {
        console.log('log out')
      },
    },
  ]

  return (
    <Dropdown label={ProfileLabel()} classMenuItems='w-[180px] top-[58px]'>
      {ProfileMenu.map((item: any, index: number) => (
        <MenuItem key={index}>
          {({ active }) => (
            <div
              onClick={() => item.action()}
              className={`${
                active
                  ? 'bg-slate-100 text-slate-900 dark:bg-slate-600 dark:bg-opacity-50 dark:text-slate-300'
                  : 'text-slate-600 dark:text-slate-300'
              } block     ${item.hasDivider ? 'border-t border-slate-100 dark:border-slate-700' : ''}`}
            >
              <div className={`block cursor-pointer px-4 py-2`}>
                <div className='flex items-center'>
                  <span className='block text-xl ltr:mr-3 rtl:ml-3'>
                    <Icon icon={item.icon} />
                  </span>
                  <span className='block text-sm'>{item.label}</span>
                </div>
              </div>
            </div>
          )}
        </MenuItem>
      ))}
    </Dropdown>
  )
}

export default Profile
