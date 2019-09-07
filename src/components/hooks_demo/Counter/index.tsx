import React, { useState, useCallback, useMemo } from 'react'

const useCounter = (v: number) => {
  // <string> みたいな のはエラー
  // const [count, setCount] = useState<string>(v)

  const [count, setCount] = useState(v)
  const double = useMemo(() => count * 2, [count])

  // 第2引数に変更がなければ 実行されない
  // ----------------------------------------------
  // eslint-disable-next-line no-console
  useMemo(() => console.log('useMemoA'), [count])
  // eslint-disable-next-line no-console
  useMemo(() => console.log('useMemoB'), [])
  // ----------------------------------------------

  const handleAddCount = useCallback(() => setCount(count + 1), [count])
  const handleResetCount = useCallback(() => setCount(0), [count])
  const handleOverrideCount = (v: number) =>
    useCallback(() => setCount(v), [count])

  return {
    count,
    double,
    handleAddCount,
    handleResetCount,
    handleOverrideCount
  }
}

export const Counter: React.FC = () => {
  const {
    count,
    double,
    handleAddCount,
    handleResetCount,
    handleOverrideCount
  } = useCounter(0)

  return (
    <>
      <p>{count}</p>
      <p>{double}</p>
      <button onClick={handleAddCount}>+</button>
      <button onClick={handleResetCount}>~</button>
      <button onClick={handleOverrideCount(10)}>10</button>
    </>
  )
}
