'use client'

import React from 'react'
import Link from 'next/link'
import ForgotPass from '@/components/partials/auth/forgot-pass'
import useDarkMode from '@/hooks/useDarkMode'

const ForgotPassword = () => {
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
          <div className='absolute bottom-[-130px] left-0 z-[-1] h-full w-full'>
            <img src='/assets/images/auth/forgot_pass.svg' alt='' className='h-full w-full object-contain' />
          </div>
        </div>
        <div className='right-column relative'>
          <div className='inner-content flex h-full flex-col bg-white dark:bg-slate-800'>
            <div className='auth-box2 flex h-full flex-col justify-center'>
              <div className='mobile-logo mb-6 block text-center lg:hidden'>
                <Link href='/'>
                  <img
                    src={isDark ? '/assets/images/logo/logo-white.svg' : '/assets/images/logo/logo.svg'}
                    alt=''
                    className='mx-auto'
                  />
                </Link>
              </div>
              <div className='mb-5 text-center 2xl:mb-10'>
                <h4 className='mb-4 font-medium'>Forgot Your Password?</h4>
                <div className='text-base text-slate-500 dark:text-slate-400'>Reset Password with Dashcode.</div>
              </div>
              <div className='mb-4 mt-10 rounded bg-slate-100 px-2 py-3 text-center text-base font-normal text-slate-500 dark:bg-slate-600 dark:text-slate-400'>
                Enter your Email and instructions will be sent to you!
              </div>

              <ForgotPass />
              <div className='mx-auto mt-8 text-sm font-normal uppercase text-slate-500 dark:text-slate-400 md:max-w-[345px] 2xl:mt-12'>
                Forget It,{' '}
                <Link href='/' className='font-medium text-slate-900 hover:underline dark:text-white'>
                  Send me Back
                </Link>{' '}
                to The Sign In
              </div>
            </div>
            <div className='auth-footer text-center'>Copyright 2024, MobiEase All Rights Reserved.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
