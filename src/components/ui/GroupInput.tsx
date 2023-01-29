import { Component, JSXElement } from 'solid-js'

const GroupInput: Component<{ children: JSXElement; className?: string }> = (props) => {
  return <div class={`group ${props.className}`}>{props.children}</div>
}

export default GroupInput
