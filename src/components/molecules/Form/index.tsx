import React from 'react'
import { Control, Field, Label, Help } from 'rbx'
import {
  withFormik,
  Field as FromikField,
  InjectedFormikProps,
  ErrorMessage
} from 'formik'
import { Mutation, AddTask, UpdateTask } from '../../../share/graphql.type'
import { Button } from '../../atoms/Button'
import { Input } from '../../atoms/Input'
import { Textarea } from '../../atoms/Textarea'
import { dto } from '../../../share/config'
import { paths } from '../../../router'
import { RouteComponentProps } from 'react-router'
import _ from 'lodash'
import { sleep } from '../../../lib/util'
import * as Yup from 'yup'
import { makeErrorMsg, isUnprocessableEntityException } from '../../../lib/util'

type FormValues = AddTask | UpdateTask

export interface FormProps {
  initValue: FormValues
  handleSubmit: (
    p: FormValues
  ) =>
    | Promise<Pick<Mutation, 'addTask'>>
    | Promise<Pick<Mutation, 'updateTask'>>
  setIsError: (p: boolean) => void
  history: RouteComponentProps['history']
  bTxt: string
  // eslint-disable-next-line
  validationSchema: Yup.ObjectSchemaDefinition<any>
}

const _Form: React.FC<InjectedFormikProps<FormProps, FormValues>> = props => (
  <>
    <form onSubmit={props.handleSubmit}>
      <Field>
        <Label>
          <Label>タイトル</Label>
        </Label>
        <Field.Body>
          <Field>
            <Control>
              <FromikField
                name={'title'}
                component={Input}
                placeholder={'タスクのタイトル'}
                maxLength={dto.task.input.title.length}
                color={_.has(props.errors, 'title') ? 'danger' : undefined}
              />
            </Control>
            <Help color="danger">
              <ErrorMessage name="title" />
            </Help>
          </Field>
        </Field.Body>
      </Field>

      <Field>
        <Label>
          <Label>詳細</Label>
        </Label>
        <Field.Body>
          <Field>
            <Control>
              <FromikField
                name={'body'}
                component={Textarea}
                placeholder={'タスクの詳細など...'}
                maxLength={dto.task.input.body.length}
                color={_.has(props.errors, 'body') ? 'danger' : undefined}
              />
            </Control>
            <Help color="danger">
              <ErrorMessage name="body" />
            </Help>
          </Field>
        </Field.Body>
      </Field>

      <Field>
        <Label />
        <Field.Body>
          <Field>
            <Control pull={'right'}>
              <FromikField
                component={Button}
                color={'primary'}
                size={'large'}
                bTxt={props.bTxt}
                type={'submit'}
              />
            </Control>
          </Field>
        </Field.Body>
      </Field>
    </form>
  </>
)

export const Form = withFormik<FormProps, FormValues>({
  // このあたりは、送信後のバリデーションのタイミング考える必要が...
  // サーバからのエラーメッセージは setErrorsせずに別途表示したほうが良い
  // validateOnBlur: false,
  validateOnChange: false,

  enableReinitialize: true,
  // validationSchema: (p: FormProps) => Yup.object().shape(p.validationSchema),
  mapPropsToValues: (p: FormProps) => ({ ...p.initValue }),
  handleSubmit: async (formValue, p) => {
    try {
      await sleep()
      const v = { ...formValue }
      if (v.body) {
        // 改行対応... 別の方法があるが これで
        v.body = v.body.replace(/\r?\n/g, '\\n')
      }
      await p.props.handleSubmit(v)
      p.props.history.push(paths.top)
    } catch (e) {
      if (isUnprocessableEntityException(e)) {
        p.setErrors(makeErrorMsg(e))
        return
      }
      p.props.setIsError(true)
    } finally {
      p.setSubmitting(false)
    }
  }
})(_Form)
