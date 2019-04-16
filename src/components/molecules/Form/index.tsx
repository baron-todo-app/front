import React from 'react'
import {
  Control,
  Field,
  Label,
  Help,
  Textarea,
  Input,
  Button,
  Container,
  Column
} from 'rbx'
import { withFormik, Field as FromikField, InjectedFormikProps } from 'formik'
import { Mutation } from '../../../share/graphql.type'
import { AddTask } from '../../../share/graphql.type'

interface FormValues extends AddTask {}

export interface FormProps {
  initValue: FormValues
  handleSubmit: (p: FormValues) => Promise<Pick<Mutation, 'addTask'>>
}

const _Form: React.FC<InjectedFormikProps<FormProps, FormValues>> = props => (
  <>
    <Container>
      <Column.Group centered>
        <Column size={10}>
          <form onSubmit={props.handleSubmit}>
            <Field>
              <Label>
                <Label>Subject</Label>
              </Label>
              <Field.Body>
                <Field>
                  <Control>
                    <FromikField
                      name={'title'}
                      component={Input}
                      placeholder={'タイトル'}
                    />
                  </Control>
                  <Help color="danger">This field is required</Help>
                </Field>
              </Field.Body>
            </Field>

            <Field>
              <Label>
                <Label>Question</Label>
              </Label>
              <Field.Body>
                <Field>
                  <Control>
                    <Textarea placeholder="Explain how we can help you" />
                  </Control>
                </Field>
              </Field.Body>
            </Field>

            <Field>
              <Label />
              <Field.Body>
                <Field>
                  <Control>
                    <Button color="primary">Send message</Button>
                  </Control>
                </Field>
              </Field.Body>
            </Field>
          </form>
        </Column>
      </Column.Group>
    </Container>
  </>
)

export const Form = withFormik<FormProps, FormValues>({
  mapPropsToValues: (p: FormProps) => ({ ...p.initValue }),
  handleSubmit: async () => {
    // console.log('ok')
  }
})(_Form)
