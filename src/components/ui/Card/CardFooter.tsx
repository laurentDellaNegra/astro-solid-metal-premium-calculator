import { Component, JSXElement } from 'solid-js'

const CardFooter: Component<{ children: JSXElement; className?: string }> = (props) => {
  return (
    <div class={`border-border -m-[2px] rounded-b border-2 p-5 ${props.className}`}>
      {props.children}
    </div>
  )
}

export default CardFooter
