import React, { ReactNode } from 'react'
import useSkin from '@/hooks/useSkin'

interface CardProps {
  children: ReactNode
  title?: ReactNode
  subtitle?: ReactNode
  headerslot?: ReactNode
  className?: string
  bodyClass?: string
  noborder?: boolean
  titleClass?: string
}

const Card: React.FC<CardProps> = ({
  children,
  title,
  subtitle,
  headerslot,
  className = 'custom-class bg-white',
  bodyClass = 'p-6',
  noborder = false,
  titleClass = 'custom-class',
}) => {
  const [skin] = useSkin()

  return (
    <div
      className={`
        card rounded-md dark:bg-slate-800 ${
          skin === 'bordered' ? 'border border-slate-200 dark:border-slate-700' : 'shadow-base'
        } ${className}
      `}
    >
      {(title || subtitle) && (
        <header className={`card-header ${noborder ? 'no-border' : ''}`}>
          <div>
            {title && <div className={`card-title ${titleClass}`}>{title}</div>}
            {subtitle && <div className='card-subtitle'>{subtitle}</div>}
          </div>
          {headerslot && <div className='card-header-slot'>{headerslot}</div>}
        </header>
      )}
      <main className={`card-body ${bodyClass}`}>{children}</main>
    </div>
  )
}

export default Card
