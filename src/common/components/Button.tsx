'use client'
import React from 'react'

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

export default function Button({ children, className, onClick, disabled, type, variant }: Props) {
  if (variant === 'outlined') {
    return (
      <button
        className={`bg-transparent border-2 border-primary-200 rounded-full font-medium px-8 py-4 hover:shadow-[6px_6px_0_1px_rgba(243,212,148,1)] transition-shadow duration-200  ${className}`}
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
      className="bg-primary-200 px-8 py-4 rounded-full font-medium hover:shadow-[6px_6px_0_1px_rgba(32,32,32,1)] transition-shadow duration-200 ease-in-out"
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  )
}
