import type { ButtonHTMLAttributes } from 'react'

interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: 'primary' | 'secondary' | 'disabled'
  label: string
}

function BaseButton ({ theme = 'primary', label, className, ...props }: BaseButtonProps): JSX.Element {
  const classes = {
    primary: 'bg-black text-white',
    secondary: 'border-2 border-black',
    disabled: 'bg-gray-300'
  }

  return (
    <button className={`h-10 rounded ${className} ${classes[theme]}`} {...props}>
      {label}
    </button>
  )
}

export default BaseButton
