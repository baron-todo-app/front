import React from 'react'
import { Input as _Input } from 'rbx'
import { InputProps } from 'rbx/elements/form/input'

interface _IInput {
  placeholder: string
}

type IInput = InputProps & _IInput

export const Input: React.FC<IInput> = props => (
  <>
    <_Input {...props} />
  </>
)
