'use client'

import React from 'react'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import TextInput from '@/components/ui/TextInput'

// yup schema
const schema = yup
  .object({
    email: yup.string().email('Invalid email').required('Email is Required'),
    password: yup.string().required('Password is Required'),
  })
  .required()

const ForgotPass = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = () => {
    //console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-4 '>
      <TextInput name='email' label='email' type='email' register={register} error={errors.email} />

      <button className='btn btn-dark block w-full text-center'>Send recovery email</button>
    </form>
  )
}

export default ForgotPass
