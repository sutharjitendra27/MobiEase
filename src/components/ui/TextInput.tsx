import React, { useState, ChangeEvent, FocusEvent } from 'react'
import Icon from '@/components/ui/Icon'
import Cleave from 'cleave.js/react'
import 'cleave.js/dist/addons/cleave-phone.us'

interface TextinputProps {
  type: string
  label?: string
  placeholder?: string
  classLabel?: string
  className?: string
  classGroup?: string
  register?: any
  name?: string
  readonly?: boolean
  value?: string
  error?: any
  icon?: string
  disabled?: boolean
  id?: string
  horizontal?: boolean
  validate?: string
  isMask?: boolean
  msgTooltip?: boolean
  description?: string
  hasicon?: boolean
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  options?: any
  onFocus?: (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  defaultValue?: string
  [key: string]: any // Allow additional props
}

const TextInput: React.FC<TextinputProps> = ({
  type,
  label,
  placeholder = 'Add placeholder',
  classLabel = 'form-label',
  className = '',
  classGroup = '',
  register,
  name,
  readonly,
  value,
  error,
  icon,
  disabled,
  id,
  horizontal,
  validate,
  isMask,
  msgTooltip,
  description,
  hasicon,
  onChange,
  options,
  onFocus,
  defaultValue,
  ...rest
}) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <div
      className={`formGroup ${error ? 'has-error' : ''} ${horizontal ? 'flex' : ''} ${validate ? 'is-valid' : ''} ${classGroup}`}
    >
      {label && (
        <label
          htmlFor={id}
          className={`block capitalize ${classLabel} ${horizontal ? 'flex-0 mr-6 w-[60px] break-words md:w-[100px]' : ''}`}
        >
          {label}
        </label>
      )}
      <div className={`relative ${horizontal ? 'flex-1' : ''}`}>
        {name && !isMask && (
          <input
            type={type === 'password' && open ? 'text' : type}
            {...(register ? register(name) : {})}
            {...rest}
            className={`${error ? ' has-error' : ''} form-control py-2 ${className}`}
            placeholder={placeholder}
            readOnly={readonly}
            defaultValue={defaultValue}
            disabled={disabled}
            id={id}
            onChange={onChange}
          />
        )}
        {!name && !isMask && (
          <input
            type={type === 'password' && open ? 'text' : type}
            className={`form-control py-2 ${className}`}
            placeholder={placeholder}
            readOnly={readonly}
            disabled={disabled}
            defaultValue={defaultValue}
            onChange={onChange}
            id={id}
          />
        )}
        {name && isMask && (
          <Cleave
            {...(register ? register(name) : {})}
            {...rest}
            placeholder={placeholder}
            options={options}
            className={`${error ? ' has-error' : ''} form-control py-2 ${className}`}
            onFocus={onFocus}
            id={id}
            readOnly={readonly}
            disabled={disabled}
            onChange={onChange}
          />
        )}
        {!name && isMask && (
          <Cleave
            placeholder={placeholder}
            options={options}
            className={`${error ? ' has-error' : ''} form-control py-2 ${className}`}
            onFocus={onFocus}
            id={id}
            readOnly={readonly}
            disabled={disabled}
            onChange={onChange}
          />
        )}
        {/* icon */}
        <div className='absolute top-1/2 flex -translate-y-1/2 space-x-1 text-xl ltr:right-[14px] rtl:left-[14px] rtl:space-x-reverse'>
          {hasicon && (
            <span className='cursor-pointer text-secondary-500' onClick={handleOpen}>
              {open && type === 'password' && <Icon icon='heroicons-outline:eye' />}
              {!open && type === 'password' && <Icon icon='heroicons-outline:eye-off' />}
            </span>
          )}

          {error && (
            <span className='text-danger-500'>
              <Icon icon='heroicons-outline:information-circle' />
            </span>
          )}
          {validate && (
            <span className='text-success-500'>
              <Icon icon='bi:check-lg' />
            </span>
          )}
        </div>
      </div>
      {/* error and success message */}
      {error && (
        <div
          className={`mt-2 ${
            msgTooltip ? 'inline-block rounded bg-danger-500 px-2 py-1 text-[10px] text-white' : 'block text-sm text-danger-500'
          }`}
        >
          {error.message}
        </div>
      )}
      {/* validated and success message */}
      {validate && (
        <div
          className={`mt-2 ${
            msgTooltip ? 'inline-block rounded bg-success-500 px-2 py-1 text-[10px] text-white' : 'block text-sm text-success-500'
          }`}
        >
          {validate}
        </div>
      )}
      {/* only description */}
      {description && <span className='input-description'>{description}</span>}
    </div>
  )
}

export default TextInput
