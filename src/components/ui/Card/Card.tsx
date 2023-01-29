import { JSXElement, Component } from 'solid-js'

const Card: Component<{
  children: JSXElement
  className?: string
}> = (props) => {
  return (
    <div
      class={`bg-component-background border-border rounded border-2 border-b-8 ${props.className}`}
    >
      {props.children}
    </div>
  )
}

export default Card
