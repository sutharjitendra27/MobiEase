'use client'

import React from 'react'
import Card from '@/components/ui/Card'
import GroupChart1 from '@/components/partials/widget/chart/group-chart-1'
import RevenueBarChart from '@/components/partials/widget/chart/revenue-bar-chart'
import SelectMonth from '@/components/partials/SelectMonth'
import OrderChart from '@/components/partials/widget/chart/order-chart'
import ProfitChart from '@/components/partials/widget/chart/profit-chart'
import EarningChart from '@/components/partials/widget/chart/earning-chart'
import TableOne from '@/components/partials/table/TableOne'

const Dashboard = () => {
  return (
    <div className='space-y-5'>
      <div className='mb-6 flex flex-wrap items-center justify-between'>
        <h4 className='inline-block text-xl font-medium capitalize text-slate-900 lg:text-2xl ltr:pr-4 rtl:pl-4'>Dashboard</h4>
      </div>
      <div className='col-span-12 space-y-5 lg:col-span-8'>
        <Card>
          <div className='grid grid-cols-2 place-content-center gap-5 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-5'>
            <div className='flex h-full items-center space-x-4 rtl:space-x-reverse'>
              <div className='flex-none'>
                <div className='h-20 w-20 rounded-full'>
                  <img src='/assets/images/users/main-user.png' alt='' className='h-full w-full' />
                </div>
              </div>
              <div className='flex-1'>
                <h4 className='mb-2 text-xl font-medium'>
                  <span className='block font-light'>Good evening,</span>
                  <span className='block'>Mr. Jitendra</span>
                </h4>
                <p className='text-xs dark:text-slate-300'>Welcome to MobiEase</p>
              </div>
            </div>
            <GroupChart1 />
          </div>
        </Card>
      </div>
      <div className='grid grid-cols-12 gap-5'>
        <div className='col-span-12 lg:col-span-7 2xl:col-span-8'>
          <Card>
            <div className='legend-ring'>
              <RevenueBarChart height={420} />
            </div>
          </Card>
        </div>
        <div className='col-span-12 lg:col-span-5 2xl:col-span-4'>
          <Card title='Statistic' headerslot={<SelectMonth />}>
            <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
              <OrderChart />
              <ProfitChart />
              <div className='md:col-span-2'>
                <EarningChart />
              </div>
            </div>
          </Card>
        </div>
      </div>
      <TableOne title='Latest Orders' />
    </div>
  )
}

export default Dashboard
