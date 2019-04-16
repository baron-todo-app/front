import React from 'react'
import { Input as _Input } from 'rbx'
import { InputProps as _InputProps } from 'rbx/elements/form/input'
import { FieldProps } from 'formik'

interface Props {
  field: FieldProps['field']
  placeholder: string
}

type InputProps = _InputProps & Props

export const Input: React.FC<InputProps> = ({ field, ...props }) => (
  <>
    <_Input size={props.size} placeholder={props.placeholder} {...field} />
  </>
)
