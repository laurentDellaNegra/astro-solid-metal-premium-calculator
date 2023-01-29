import { Component, JSX } from 'solid-js'

const Label: Component<JSX.LabelHTMLAttributes<HTMLLabelElement> & { className?: string }> = (
  props
) => {
  const { className, ...rest } = props
  return <label class={`group-focus-within:text-gold ${props.className}`} {...rest} />
}

export default Label
