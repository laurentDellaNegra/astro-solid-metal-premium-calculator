import { Component, JSXElement } from 'solid-js'

const Content: Component<{ children: JSXElement; className?: string }> = (props) => {
  return <div class={`p-5 ${props.className}`}>{props.children}</div>
}

export default Content
