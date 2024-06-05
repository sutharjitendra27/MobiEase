import React, { useRef, useEffect, useState } from 'react'

import SimpleBar from 'simplebar-react'
import Link from 'next/link'
import Navmenu from './NavMenu'
import useSemiDark from '@/hooks/useSemiDark'
import useDarkMode from '@/hooks/useDarkMode'
import useMobileMenu from '@/hooks/useMobileMenu'
import Icon from '@/components/ui/Icon'
import { menuItems } from '@/constant/data'

const MobileMenu = ({ className = 'custom-class' }) => {
  const scrollableNodeRef: any = useRef()
  const [scroll, setScroll] = useState(false)

  const [isSemiDark] = useSemiDark()
  const [isDark] = useDarkMode()
  const [mobileMenu, setMobileMenu] = useMobileMenu()

  useEffect(() => {
    const handleScroll = () => {
      if (scrollableNodeRef.current.scrollTop > 0) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    }
    scrollableNodeRef.current.addEventListener('scroll', handleScroll)
  }, [scrollableNodeRef])

  return (
    <div className={`${className} fixed  top-0 h-full w-[248px] bg-white  shadow-lg   dark:bg-slate-800`}>
      <div className='logo-segment z-[9] flex h-[85px] items-center justify-between bg-white px-4  dark:bg-slate-800 '>
        <Link href='/'>
          <div className='flex items-center space-x-4'>
            <div className='logo-icon'>
              {!isDark && !isSemiDark ? (
                <img src='/assets/images/logo/logo-c.svg' alt='' />
              ) : (
                <img src='/assets/images/logo/logo-c-white.svg' alt='' />
              )}
            </div>
            <div>
              <h1 className='text-xl font-semibold text-slate-900 dark:text-slate-100'>DashCode</h1>
            </div>
          </div>
        </Link>
        <button
          type='button'
          onClick={() => setMobileMenu(!mobileMenu)}
          className='cursor-pointer text-2xl text-slate-900 dark:text-white'
        >
          <Icon icon='heroicons:x-mark' />
        </button>
      </div>

      <div
        className={`nav-shadow  pointer-events-none absolute top-[80px] z-[1] h-[60px] w-full transition-all duration-200 ${
          scroll ? ' opacity-100' : ' opacity-0'
        }`}
      ></div>
      <SimpleBar className='sidebar-menu h-[calc(100%-80px)] px-4' scrollableNodeProps={{ ref: scrollableNodeRef }}>
        <Navmenu menus={menuItems} />
      </SimpleBar>
    </div>
  )
}

export default MobileMenu
