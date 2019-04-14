import React from 'react'
import { Button as _Button } from 'rbx'
import { ButtonProps } from 'rbx/elements/button/button'

interface _IButton {
  // onClick: () => void
}

export type IButton = ButtonProps & _IButton

export const Button: React.FC<IButton> = props => (
  <>
    <_Button {...props}>{props.children}</_Button>
  </>
)
