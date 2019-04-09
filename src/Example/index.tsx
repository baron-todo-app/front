import React, { useState, useCallback } from 'react'
import styled from 'styled-components'

export interface ExampleProps {
  /** 表示するテキスト */
  text: string
  /**
   * true: テキスト表示 false: テキスト非表示
   * @default false
   */
  flag?: boolean

  /** ボタンを押した時のイベントハンドラ */
  action(): void
}

interface Props {
  width?: number
}

const StyledButton = styled.button<Props>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  width: ${props => (props.width ? props.width : 300)}px;
`

export const Example = (props: ExampleProps) => {
  const { text, flag, action } = props
  const [count, countChg] = useState(0)
  const countUp = useCallback(() => countChg(prev => prev + 1), [])
  const countDown = useCallback(() => countChg(prev => prev - 1), [])

  return (
    <div>
      {flag && <p>{text}</p>}
      <button onClick={action}>ボタン</button>
      <p>count:{count}</p>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>

      <StyledButton width={200} onClick={() => 'foo'}>
        ok
      </StyledButton>
    </div>
  )
}
