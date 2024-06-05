import React from 'react'
import useFooterType from '@/hooks/useFooterType'

const Footer = ({ className = 'custom-class' }) => {
  const [footerType] = useFooterType()
  const footerclassName = () => {
    switch (footerType) {
      case 'sticky':
        return 'sticky bottom-0 z-[999]'
      case 'static':
        return 'static'
      case 'hidden':
        return 'hidden'
    }
  }
  return (
    <footer className={className + ' ' + footerclassName()}>
      <div className='site-footer bg-white px-6 py-4 text-slate-500 dark:bg-slate-800 dark:text-slate-300'>
        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-5'>
          <div className='text-center text-sm ltr:md:text-start rtl:md:text-right'>
            COPYRIGHT &copy; 2024 MobiEase, All rights Reserved
          </div>
          <div className='text-center text-sm ltr:md:text-right rtl:md:text-end'>
            Hand-crafted & Made by{' '}
            <a href='#' target='_blank' className='font-semibold text-primary-500'>
              JS
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
