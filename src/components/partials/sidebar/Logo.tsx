import React from 'react'
import Link from 'next/link'
import useDarkMode from '@/hooks/useDarkMode'
import useSidebar from '@/hooks/useSidebar'
import useSemiDark from '@/hooks/useSemiDark'
import useSkin from '@/hooks/useSkin'

const SidebarLogo = ({ menuHover }: any) => {
  const [isDark] = useDarkMode()
  const [collapsed, setMenuCollapsed] = useSidebar()
  // semi dark
  const [isSemiDark] = useSemiDark()
  // skin
  const [skin] = useSkin()
  return (
    <div
      className={` logo-segment z-[9] flex items-center justify-between bg-white px-4 py-6  dark:bg-slate-800 
      ${menuHover ? 'logo-hovered' : ''}
      ${skin === 'bordered' ? ' border-b border-r-0 border-slate-200 dark:border-slate-700' : ' border-none'}
      
      `}
    >
      <Link href='/analytics'>
        <div className='flex items-center space-x-4'>
          <div className='logo-icon'>
            {!isDark && !isSemiDark ? (
              <img src='/assets/images/logo/logo-c.svg' alt='' />
            ) : (
              <img src='/assets/images/logo/logo-c-white.svg' alt='' />
            )}
          </div>

          {(!collapsed || menuHover) && (
            <div>
              <h1 className='text-xl font-semibold text-slate-900 dark:text-slate-100'>DashCode</h1>
            </div>
          )}
        </div>
      </Link>

      {(!collapsed || menuHover) && (
        <div
          onClick={() => setMenuCollapsed(!collapsed)}
          className={`h-4 w-4 rounded-full border-[1.5px] border-slate-900 transition-all duration-150 dark:border-slate-700
          ${
            collapsed
              ? ''
              : 'bg-slate-900 ring-2 ring-inset ring-black-900 ring-offset-4 dark:bg-slate-400 dark:ring-slate-400 dark:ring-offset-slate-700'
          }
          `}
        ></div>
      )}
    </div>
  )
}

export default SidebarLogo
