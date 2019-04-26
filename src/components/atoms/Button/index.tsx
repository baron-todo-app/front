import React from 'react'
import { Button as _Button } from 'rbx'
import { ButtonProps as _ButtonProps } from 'rbx/elements/button/button'
import { FieldProps } from 'formik'

interface Props {
  bTxt: string
  type: 'submit' | 'button'
}

export type ButtonProps = _ButtonProps & Props & FieldProps

export const Button: React.FC<ButtonProps> = ({
  color,
  size,
  type,
  form,
  bTxt
}) => (
  <>
    <_Button
      color={color}
      size={size}
      type={type}
      state={form.isSubmitting ? 'loading' : undefined}
      disabled={form.isSubmitting}
    >
      {bTxt}
    </_Button>
  </>
)
