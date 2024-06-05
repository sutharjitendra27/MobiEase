'use client'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleDarkMode } from '@/store/layoutReducer'

const useDarkMode = () => {
  const dispatch = useDispatch()
  const isDark = useSelector((state: any) => state.layout.darkMode)

  const setDarkMode = (mode: any) => {
    dispatch(handleDarkMode(mode))
    localStorage.setItem('darkMode', JSON.stringify(mode))
  }

  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode')
    if (storedDarkMode !== null) {
      dispatch(handleDarkMode(JSON.parse(storedDarkMode)))
    }
  }, [])

  return [isDark, setDarkMode]
}

export default useDarkMode
