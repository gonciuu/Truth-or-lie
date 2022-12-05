'use client'
import React from 'react'

import { twMerge } from 'tailwind-merge'

type Props = {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset' | undefined
  variant?: 'primary' | 'outlined'
  size?: 'sm' | 'md' | 'lg'
}

//https://docs.truthordarebot.xyz/api-docs

export default function Button({
  children,
  className,
  onClick,
  disabled,
  type,
  variant,
  size,
}: Props) {
  const padding = 'px-8 py-4'

  const getPadding = () => {
    switch (size) {
      case 'sm':
        return 'px-2 py-1'
      case 'md':
        return 'px-4 py-2'
      case 'lg':
        return 'px-6 py-3'
      default:
        return padding
    }
  }

  if (variant === 'outlined') {
    return (
      <button
        className={twMerge(
          'bg-transparent border-2 border-primary-200 font-medium hover:shadow-[6px_6px_0_1px_rgba(243,212,148,1)] transition-shadow duration-200',
          getPadding(),
          className
        )}
        onClick={onClick}
        disabled={disabled}
        type={type}
      >
        {children}
      </button>
    )
  }

  return (
    <button
      className={twMerge(
        'bg-primary-200  border-2 border-primary-200 font-medium hover:shadow-[6px_6px_0_1px_rgba(32,32,32,1)] transition-shadow duration-200 ease-in-out',
        getPadding(),
        className
      )}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  )
}
