import React from 'react'
import { Form, FormProps } from '../../molecules/Form'

type AddFormProps = FormProps

export const AddForm: React.FC<AddFormProps> = ({
  initValue,
  handleSubmit
}) => (
  <>
    <Form initValue={initValue} handleSubmit={handleSubmit} />
  </>
)
