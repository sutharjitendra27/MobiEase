'use client'

import React from 'react'
import Link from 'next/link'
import Lock from '@/components/partials/auth/lock'
import useDarkMode from '@/hooks/useDarkMode'

const LockScreen = () => {
  const [isDark] = useDarkMode()

  return (
    <div className='loginwrapper'>
      <div className='lg-inner-column'>
        <div className='left-column relative z-[1]'>
          <div className='max-w-[520px] pl-20 pt-20 ltr:pl-20 rtl:pr-20'>
            <Link href='/'>
              <img
                src={isDark ? '/assets/images/logo/logo-white.svg' : '/assets/images/logo/logo.svg'}
                alt=''
                className='mb-10'
              />
            </Link>

            <h4>
              Welcome to <span className='font-bold text-slate-800 dark:text-slate-400'>MobiEase</span>
            </h4>
          </div>
          <div className='absolute bottom-[-130px] left-0 z-[-1] h-full w-full 2xl:bottom-[-160px]'>
            <img src='/assets/images/auth/lock-screen.svg' alt='' className='h-full w-full object-contain' />
          </div>
        </div>
        <div className='right-column relative'>
          <div className='inner-content flex h-full flex-col bg-white dark:bg-slate-800'>
            <div className='auth-box2 flex h-full flex-col justify-center'>
              <div className='mobile-logo mb-6 block text-center lg:hidden'>
                <Link href='/'>
                  <img src='/assets/images/logo/logo.svg' alt='' className='mx-auto' />
                </Link>
              </div>
              <div className='mb-10 text-center'>
                <h4 className='mb-4 font-medium'>Lock Screen</h4>
                <div className='text-base text-slate-500 dark:text-slate-400'>Enter your password to unlock the screen!</div>
              </div>
              <div className='author-bio mb-8 text-center'>
                <div className='mx-auto h-14 w-14 rounded-full'>
                  <img src='/assets/images/users/user-big.png' alt='' className='block h-full w-full object-cover' />
                </div>
                <div className='mt-4 text-base font-medium text-slate-900 dark:text-white'>Kathryn Murphy</div>
              </div>
              <Lock />

              <div className='mx-auto mt-12 text-sm font-normal uppercase text-slate-500 dark:text-slate-400 md:max-w-[345px]'>
                Not you ? return to{' '}
                <Link href='/' className='font-medium text-slate-900 hover:underline dark:text-white'>
                  Sign In
                </Link>
              </div>
            </div>
            <div className='auth-footer text-center'>Copyright 2024, MobiEase All Rights Reserved.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LockScreen
