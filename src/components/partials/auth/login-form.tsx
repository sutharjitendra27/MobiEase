'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import TextInput from '@/components/ui/TextInput'
import CheckBox from '@/components/ui/CheckBox'

const schema = yup
  .object({
    email: yup.string().email('Invalid email').required('Email is Required'),
    password: yup.string().required('Password is Required'),
  })
  .required()

const LoginForm = () => {
  const [checked, setChecked] = useState(false)
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    //
    mode: 'all',
  })

  const onSubmit = () => {
    console.log('Logged In')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-4 '>
      <TextInput
        name='email'
        label='email'
        defaultValue='mobiease@gmail.com'
        type='email'
        register={register}
        error={errors?.email}
      />
      <TextInput
        name='password'
        label='passwrod'
        type='password'
        defaultValue='mobiease'
        register={register}
        error={errors.password}
      />
      <div className='flex justify-between'>
        <CheckBox value={checked} onChange={() => setChecked(!checked)} label='Keep me signed in' />
        <Link href='/forgot-password' className='text-sm font-medium leading-6 text-slate-800 dark:text-slate-400'>
          Forgot Password?{' '}
        </Link>
      </div>

      <button className='btn btn-dark block w-full text-center'>Sign in</button>
    </form>
  )
}

export default LoginForm
