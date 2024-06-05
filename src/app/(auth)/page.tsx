'use client'

import React from 'react'
import Link from 'next/link'

import LoginForm from '@/components/partials/auth/login-form'
import useDarkMode from '@/hooks/useDarkMode'

const Login = () => {
  const [isDark] = useDarkMode()

  return (
    <>
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
              <img src='/assets/images/auth/login_logo.svg' alt='' className='h-full w-full object-contain' />
            </div>
          </div>
          <div className='right-column relative'>
            <div className='inner-content flex h-full flex-col bg-white dark:bg-slate-800'>
              <div className='auth-box flex h-full flex-col justify-center'>
                <div className='mobile-logo mb-6 block text-center lg:hidden'>
                  <Link href='/'>
                    <img
                      src={isDark ? '/assets/images/logo/logo-white.svg' : '/assets/images/logo/logo.svg'}
                      alt=''
                      className='mx-auto'
                    />
                  </Link>
                </div>
                <div className='mb-4 text-center 2xl:mb-10'>
                  <h4 className='font-medium'>Sign in</h4>
                  <div className='text-base text-slate-500'>Sign in to your account to start using MobiEase</div>
                </div>
                <LoginForm />
              </div>
              <div className='auth-footer text-center'>Copyright 2024, MobiEase All Rights Reserved.</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
