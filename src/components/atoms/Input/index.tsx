import React from 'react'
import { Input as _Input } from 'rbx'
import { InputProps as _InputProps } from 'rbx/elements/form/input'
import { FieldProps } from 'formik'

interface Props {
  field: FieldProps['field']
  placeholder: string
  maxLength: number
  color: Pick<_InputProps, 'color'>
}

export type InputProps = _InputProps & Props

export const Input: React.FC<InputProps> = ({
  field,
  size,
  maxLength,
  placeholder,
  color
}) => (
  <>
    <_Input
      size={size}
      placeholder={placeholder}
      maxLength={maxLength}
      color={color}
      {...field}
    />
  </>
)
