// https://ja.reactjs.org/docs/context.html

import React, { useContext } from 'react'

interface RootContext {
  vvv: string
}

const RootContext = React.createContext<RootContext>({ vvv: '' })

const selector = () => {
  return RootContext
}

export const ContextAPI: React.FC = () => (
  <>
    <RootContext.Provider value={{ vvv: 'xyz' }}>
      <ChildA />
      <ChildB />
    </RootContext.Provider>
    <ChildX />
  </>
)

const ChildA: React.FC = () => {
  const { vvv } = useContext(RootContext)
  return (
    <>
      <p>ChildA: {vvv}</p>
      <ChildAa />
    </>
  )
}

const ChildAa: React.FC = () => {
  // RootContext をどこからもってくるか？
  // 抽象的でないと再利用不可
  // 親 の 親 の コンポーネント (関数名) が取得不能
  const { vvv } = useContext(selector())

  return (
    <>
      <p>ChildAaだよ: {vvv}</p>
    </>
  )
}

const ChildB: React.FC = () => {
  const { vvv } = useContext(RootContext)
  return (
    <>
      <p>ChildB: {vvv}</p>
    </>
  )
}

const ChildX: React.FC = () => {
  const { vvv } = useContext(RootContext)
  return (
    <>
      <p>ChildX: {vvv}</p>
    </>
  )
}
