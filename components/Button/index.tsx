import React from 'react'

interface Props {
    onClick?: () => void
    className?: string
    type?: 'button' | 'submit' | 'reset'
    disabled?: boolean
    loading?: boolean
    variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning'
    size?: 'sm' | 'md' | 'lg'
    block?: boolean
    icon?: React.ReactNode
    iconPosition?: 'left' | 'right'
    iconOnly?: boolean
    title?: string
}

const Button = ({className, icon, iconPosition = "left", loading,onClick, disabled, title, variant }: Props) => {
  return (
    <button className={`hover:shadow-sm  py-2 px-4 rounded flex items-center justify-center gap-x-2 ${className} ${
        variant === 'secondary' ? 'bg-white text-primary border border-gray-30 hover:bg-gray-100' :
        variant === 'danger' ? 'bg-red-600 text-white' :
        variant === 'success' ? 'bg-green-600 text-white' :
        variant === 'warning' ? 'bg-yellow-600 text-white' : 'bg-primary text-white hover:bg-hover'

    }`}>
        {icon && iconPosition === 'left' && icon}
        {loading ? 'Loading...' : title}
        {icon && iconPosition === 'right' && icon}
        
    </button>
  )
}

export default Button