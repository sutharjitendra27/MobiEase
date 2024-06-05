import React, { useState, ChangeEvent } from 'react'
import TextInput from '@/components/ui/TextInput'

interface GlobalFilterProps {
  filter: string
  setFilter: (value: string | undefined) => void
}

const GlobalFilter: React.FC<GlobalFilterProps> = ({ filter, setFilter }) => {
  const [value, setValue] = useState<string>(filter)

  const onChange = (e: any) => {
    const newValue = e.target.value
    setValue(newValue)
    setFilter(newValue || undefined)
  }

  return (
    <div>
      <TextInput value={value || ''} onChange={onChange} placeholder='search...' type='' />
    </div>
  )
}

export default GlobalFilter
