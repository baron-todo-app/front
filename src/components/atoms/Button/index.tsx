import React from 'react'
import { Button as _Button } from 'rbx'
import { ButtonProps as _ButtonProps } from 'rbx/elements/button/button'
import { FieldProps } from 'formik'

interface Props {
  bTxt: string
  type: 'submit' | 'button'
}

type ButtonProps = _ButtonProps & Props & FieldProps

export const Button: React.FC<ButtonProps> = props => (
  <>
    <_Button
      color={props.color}
      size={props.size}
      type={props.type}
      state={props.form.isSubmitting ? 'loading' : undefined}
      disabled={props.form.isSubmitting}
    >
      {props.bTxt}
    </_Button>
  </>
)
