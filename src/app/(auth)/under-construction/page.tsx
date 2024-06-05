'use client'
import Link from 'next/link'
import useDarkMode from '@/hooks/useDarkMode'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'

const UnderConstructionPage = () => {
  const [isDark] = useDarkMode()
  return (
    <div className='min-h-screen'>
      <div className='absolute left-0 top-0 w-full'>
        <div className='container flex flex-wrap items-center justify-between py-6'>
          <div>
            <Link href='/'>
              <img src={isDark ? '/assets/images/logo/logo-white.svg' : '/assets/images/logo/logo.svg'} alt='' />
            </Link>
          </div>
          <div>
            <Button text='Contact us' className=' btn-outline-dark btn-sm' />
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='flex min-h-screen flex-col flex-wrap items-center justify-center text-center'>
          <img src='/assets/images/svg/img-2.svg' alt='' />
          <h4 className='mb-2 text-3xl font-medium text-slate-900 dark:text-white'>We are under maintenance.</h4>
          <p className='text-base font-normal text-slate-500 dark:text-slate-300'>
            We’re making the system more awesome. <br />
            We’ll be back shortly.
          </p>
        </div>
      </div>
      <div className='fixed bottom-0 w-full'>
        <div className='container'>
          <div className='flex-wrap items-center justify-between space-y-4 py-6 md:flex'>
            <div>
              <ul className='flex justify-center space-x-3 md:justify-start'>
                <li>
                  <a href='#' className='social-link'>
                    <Icon icon='icomoon-free:facebook' />
                  </a>
                </li>
                <li>
                  <a href='#' className='social-link'>
                    <Icon icon='icomoon-free:twitter' />
                  </a>
                </li>
                <li>
                  <a href='#' className='social-link'>
                    <Icon icon='icomoon-free:linkedin2' />
                  </a>
                </li>
                <li>
                  <a href='#' className='social-link'>
                    <Icon icon='icomoon-free:google' />
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul className='flex justify-center space-x-3 md:justify-start'>
                <li>
                  <a href='#' className='text-sm text-slate-500 transition duration-150 hover:text-slate-900 dark:text-slate-400'>
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a href='#' className='text-sm text-slate-500 transition duration-150 hover:text-slate-900 dark:text-slate-400'>
                    Faq
                  </a>
                </li>
                <li>
                  <a href='#' className='text-sm text-slate-500 transition duration-150 hover:text-slate-900 dark:text-slate-400'>
                    Email us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UnderConstructionPage
