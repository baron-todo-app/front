import React from 'react'
import { Textarea as _Textarea } from 'rbx'
import { TextareaProps as _TextareaProps } from 'rbx/elements/form/textarea'
import { FieldProps } from 'formik'

interface Props {
  field: FieldProps['field']
  placeholder: string
  maxLength: number
  // eslint-disable-next-line
  color: Pick<_TextareaProps, 'color'> | any // color で警告が出るので any
}

type TextareaProps = Props

export const Textarea: React.FC<TextareaProps> = ({
  field,
  placeholder,
  maxLength,
  color
}) => (
  <>
    <_Textarea
      placeholder={placeholder}
      maxLength={maxLength}
      color={color}
      {...field}
    />
  </>
)
