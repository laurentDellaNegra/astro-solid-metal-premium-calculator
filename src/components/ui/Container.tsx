import type { Component, JSXElement } from 'solid-js'

const Container: Component<{ children: JSXElement }> = (props) => {
  return <div class="p-4 md:p-9 lg:p-24 xl:p-32">{props.children}</div>
}

export default Container
