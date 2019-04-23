import React from 'react'
import { Form, FormProps } from '../../molecules/Form'
import { Card, Column } from 'rbx'

export type UpsertFormProps = FormProps

export const UpsertForm: React.FC<UpsertFormProps> = ({
  initValue,
  handleSubmit,
  setIsError,
  history,
  bTxt,
  validationSchema
}) => (
  <>
    <Column.Group centered>
      <Column size={6}>
        <Card style={{ padding: 20 }}>
          <Form
            initValue={initValue}
            handleSubmit={handleSubmit}
            setIsError={setIsError}
            history={history}
            bTxt={bTxt}
            validationSchema={validationSchema}
          />
        </Card>
      </Column>
    </Column.Group>
  </>
)
