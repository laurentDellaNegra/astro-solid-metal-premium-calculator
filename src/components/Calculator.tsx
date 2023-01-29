import { createResource, For, Match, Switch } from "solid-js";

const fetchFakeData = async () =>
  (await fetch("https://dummyjson.com/products")).json();

export default function Calculator() {
  const [data] = createResource(fetchFakeData);
  return (
    <Switch>
      <Match when={data.loading}>
        <p>Loading...</p>
      </Match>
      <Match when={data.error}>
        <p>Error: {data.error.message}</p>
      </Match>
      <Match when={data.state === "ready"}>
        <For each={data().products}>
          {(product) => <pre>{JSON.stringify(product, null, 2)}</pre>}
        </For>
      </Match>
    </Switch>
  );
}
