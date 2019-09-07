import React, { useEffect, useState, useCallback } from 'react'

const logEffect = (n: number) => {
  // 第2引数が 更新されると発火
  // eslint-disable-next-line no-console
  useEffect(() => console.log(`useEffect>>${n}`), [n])
}

export const Effect: React.FC = () => {
  const [n, setN] = useState(0)
  const handle = (p: number) => useCallback(() => setN(n + p), [n])

  logEffect(n)
  return <button onClick={handle(10)}>Effect</button>
}
