import { Component } from 'solid-js'
import { JSX } from 'solid-js/jsx-runtime'

const Input: Component<JSX.InputHTMLAttributes<HTMLInputElement> & { className: string }> = (
  props
) => {
  const { className = '', ...rest } = props
  return (
    <input
      class={`w-full border-0 border-b-2 bg-inherit focus:border-b-gold focus:text-gold focus:ring-0 ${className}`}
      {...rest}
    />
  )
}

export default Input
