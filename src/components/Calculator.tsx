import { Component, createSignal } from 'solid-js'
import { For, Match, Switch, createResource } from 'solid-js'
import H1 from './ui/H1'
import { Card, CardContent, CardFooter } from './ui/Card'
import Container from './ui/Container'
import GroupInput from './ui/GroupInput'
import Label from './ui/Label'
import Loader from './ui/Loader'
import Input from './ui/Input'
import { currencies } from '../utils/Currencies'

const fetchFakeData = async () => (await fetch('https://dummyjson.com/products')).json()

const Calculator: Component = () => {
  const [data] = createResource(fetchFakeData)
  const [currency, setCurrency] = createSignal('EUR')
  const [weight, setWeight] = createSignal(31.1)
  const [quality, setQuality] = createSignal(100)
  const [price, setPrice] = createSignal(0)
  const { symbol, queryParam } = currencies.get(currency())!

  // const market = marketData?.oneGram || 0
  const market = 57.0364
  const realWeight = () => (weight() * quality()) / 100
  const premium = () => ((price() - realWeight() * market) / (realWeight() * market)) * 100
  const displayPremium = () =>
    !!quality() && !!premium && premium() > -100 ? `${premium().toFixed(2)}%` : ''

  // const market = 57.0364
  // const symbol = '$'
  // const isFetching = true
  // const displayPremium = '3720.94%'
  // const weight = 31.1
  // const realWeight = 30
  // const quality = 99
  // const price = 999
  // const currency = 'CHF'

  return (
    <Container>
      <Card className="m-auto max-w-md">
        <CardContent>
          <H1>
            <img src="/gold.svg" alt="Gold" class="h-16 w-auto" />
          </H1>
          <div class="flex flex-col gap-4">
            {/* Currency */}
            <select onChange={(e) => setCurrency(e.currentTarget.value)} value={currency()}>
              <option value="EUR">EUR</option>
              <option value="CHF">CHF</option>
              <option value="USD">USD</option>
            </select>

            {/* Market price */}
            <GroupInput className="flex flex-wrap gap-1">
              <div class="flex flex-1 items-center justify-end">
                <Label className="mr-2">Market price :</Label>
              </div>
              <div class="flex flex-1 items-center justify-start">
                {market ? `${market.toFixed(4)} ${symbol}` : '--'}
                {true ? <Loader className="ml-2 h-5 w-5 text-gold" /> : null}
              </div>
            </GroupInput>

            {/* Weight */}
            <GroupInput className="flex gap-1">
              <div class="flex flex-1 items-center justify-end">
                <Label for="weight" className="mr-2">
                  Total weight :
                </Label>
              </div>
              <div class="flex flex-1 items-center justify-start">
                <Input
                  id="weight"
                  name="Weight"
                  type="number"
                  placeholder="31.1"
                  className="max-w-[128px]"
                  value={weight() || ''}
                  onInput={(e) => setWeight(Number(e.currentTarget.value))}
                  min={0}
                />
                <span class="group-focus-within:text-gold">g</span>
              </div>
            </GroupInput>

            {/* Purity */}
            <GroupInput className="flex gap-1">
              <div class="flex flex-1 items-center justify-end">
                <Label for="quality" className="mr-2">
                  Purity :
                </Label>
              </div>
              <div class="flex flex-1 items-center justify-start">
                <Input
                  id="quality"
                  name="Quality"
                  type="number"
                  placeholder="100"
                  className="max-w-[80px]"
                  value={quality() || ''}
                  onInput={(e) => setQuality(Number(e.currentTarget.value))}
                  min={0}
                  max={100}
                />
                <span class="group-focus-within:text-gold">%</span>
              </div>
            </GroupInput>

            {/* Real weight */}
            <GroupInput className="flex gap-1">
              <div class="flex flex-1 items-center justify-end">
                <Label className="mr-2">Real weight :</Label>
              </div>
              <div class="flex flex-1 items-center justify-start">
                <div>{realWeight}g</div>
              </div>
            </GroupInput>

            {/* Price */}
            <GroupInput className="flex gap-1">
              <div class="flex flex-1 items-center justify-end">
                <Label for="price" className="mr-2">
                  Price :
                </Label>
              </div>
              <div class="flex flex-1 items-center justify-start">
                <Input
                  id="price"
                  name="Price"
                  type="number"
                  placeholder="180"
                  className="max-w-[128px]"
                  value={price() || ''}
                  onInput={(e) => setPrice(Number(e.currentTarget.value))}
                  min={0}
                />
                <span class="group-focus-within:text-gold">{symbol}</span>
              </div>
            </GroupInput>
          </div>
        </CardContent>
        <CardFooter className="text-center text-xl">
          Premium : <span class="text-gold">{displayPremium || '--'}</span>
        </CardFooter>
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
