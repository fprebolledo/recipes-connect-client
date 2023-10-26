import type { InputHTMLAttributes } from 'react'

interface BaseInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
}

function BaseInput ({ label, name, className, ...props }: BaseInputProps): JSX.Element {
  return (
    <div className='flex flex-col'>
      <label htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        className={`h-10 p-2 rounded border-2 border-gray-300 my-1 ${className}`}
        {...props}
      />
    </div>
  )
}

export default BaseInput
