import { Component, JSXElement } from 'solid-js'

const H1: Component<{ children: JSXElement }> = (props) => {
  return (
    <h1 class="mb-5 flex items-center justify-center text-lg text-input-value">{props.children}</h1>
  )
}

export default H1
