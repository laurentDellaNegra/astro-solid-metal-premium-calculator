import type { Component } from 'solid-js'
import { For, Match, Switch, createResource } from 'solid-js'
import { Card, CardContent, CardFooter } from './ui/Card'
import Container from './ui/Container'

const fetchFakeData = async () => (await fetch('https://dummyjson.com/products')).json()

const Calculator: Component = () => {
  const [data] = createResource(fetchFakeData)
  return (
    <Container>
      <Card className="m-auto max-w-md">
        <CardContent>Content</CardContent>
        <CardFooter>Footer</CardFooter>
      </Card>
      {/* <Switch>
        <Match when={data.loading}>
          <p>Loading...</p>
        </Match>
        <Match when={data.error}>
          <p>Error: {data.error.message}</p>
        </Match>
        <Match when={data.state === 'ready'}>
          <For each={data().products}>
            {(product) => <pre>{JSON.stringify(product, null, 2)}</pre>}
          </For>
        </Match>
      </Switch> */}
    </Container>
  )
}
export default Calculator
