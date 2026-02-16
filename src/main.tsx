// tsgo (oxlint --type-check --type-aware): TS2488 false positive
// tsc: no error

interface State {
  value: boolean
}

declare const Subscribe: <TSelected = State>(props: {
  selector?: (state: State) => TSelected
  children: (state: TSelected) => void
}) => React.ReactNode

const result = (
  <Subscribe
    selector={(state) => {
      return [state.value]
    }}
  >
    {([value = false]) => {
      console.log(value)
    }}
  </Subscribe>
)

console.log(result)
