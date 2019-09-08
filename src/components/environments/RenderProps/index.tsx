// https://reactjs.org/docs/render-props.html

import React, { useState } from 'react'

const useCounter = (v: number) => {
  const [count, setCount] = useState(v)
  return {
    count,
    setCount
  }
}

export const RenderProps: React.FC = () => {
  const { count, setCount } = useCounter(10)

  const _render2 = () => <Child count={count} setCount={setCount} />

  return (
    <>
      <ComponentBox2 _render={_render2} label={'カウンターあり'} />
      <ComponentBox2 label={'カウンターなし'} />
    </>
  )
}

// ----------------------------------------------------

interface X {
  _render?: () => JSX.Element
  label: string
}
const ComponentBox2: React.FC<X> = props => (
  <>
    <p>{props.label}</p>
    {props._render == undefined ? null : props._render()}
  </>
)

// ----------------------------------------------------

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Child: React.FC<any> = props => (
  <>
    {props.count}
    <button onClick={() => props.setCount(20)}>20</button>
    <button onClick={() => props.setCount(10)}>10</button>
  </>
)
