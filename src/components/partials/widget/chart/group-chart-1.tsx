import React from 'react'
import Icon from '@/components/ui/Icon'

const statistics = [
  {
    title: 'Second Hand Phones',
    count: '10',
    bg: 'bg-info-500',
    text: 'text-info-500',
    percent: '25.67% ',
    icon: 'heroicons-outline:device-phone-mobile',
  },
  {
    title: 'Total Repairing ',
    count: '50',

    bg: 'bg-warning-500',
    text: 'text-warning-500',
    percent: '8.67%',
    icon: 'heroicons-outline:wrench-screwdriver',
  },
  {
    title: 'Pending Repairing',
    count: '25',
    bg: 'bg-primary-500',
    text: 'text-primary-500',
    percent: '1.67%  ',
    icon: 'heroicons-outline:clock',
  },
  {
    title: 'Pending Deliveries',
    count: '25',
    bg: 'bg-success-500',
    text: 'text-success-500',
    percent: '11.67%  ',
    icon: 'heroicons-outline:check-circle',
  },
]

const GroupChart1 = () => {
  return (
    <>
      {statistics.map((item, i) => (
        <div key={i} className={`${item.bg} rounded-md bg-opacity-[0.15] p-4 text-center dark:bg-opacity-50`}>
          <div
            className={`${item.text} mx-auto mb-4 flex h-10 w-10 flex-col items-center justify-center rounded-full bg-white text-2xl `}
          >
            <Icon icon={item.icon} />
          </div>
          <span className='mb-1 block text-sm font-medium text-slate-600 dark:text-white'>{item.title}</span>
          <span className='mb- block text-2xl font-medium text-slate-900 dark:text-white'>{item.count}</span>
        </div>
      ))}
    </>
  )
}

export default GroupChart1
