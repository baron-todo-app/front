import React from 'react'
import { Input } from '../../atoms/Input'
import { Button } from '../../atoms/Button'
import { Control, Field, Help } from 'rbx'
import {
  withFormik,
  Field as FromikField,
  InjectedFormikProps,
  ErrorMessage
} from 'formik'
import { FreeWord, Query } from '../../../share/graphql.type'
import { ListProps } from '../List'
import { Link } from 'react-router-dom'
import { dto } from '../../../share/config'
import { paths } from '../../../router'
import { sleep } from '../../../lib/util'
import { isUnprocessableEntityException } from '../../../lib/util'

interface FormValues extends FreeWord {}

interface FormProps {
  initValue: FormValues
  handleSubmit: (p: FormValues) => Promise<Pick<Query, 'getTasks'>>
  setList: (p: ListProps['list']) => void
  setIsLoading: (p: boolean) => void
  setIsError: (p: boolean) => void
  setFreeWord: (p: FreeWord) => void
}

export type SearchProps = FormProps

const _Search: React.FC<InjectedFormikProps<FormProps, FormValues>> = props => (
  <>
    <form onSubmit={props.handleSubmit}>
      <Field kind="group">
        <Control expanded>
          <FromikField
            name={'txt'}
            component={Input}
            placeholder={'検索ワード'}
            size={'large'}
            maxLength={dto.task.input.body.length}
          />
          <Help color="danger">
            <ErrorMessage name="txt" />
          </Help>
        </Control>

        <Control>
          <FromikField
            component={Button}
            color={'primary'}
            size={'large'}
            bTxt={'検索'}
            type={'submit'}
          />
        </Control>

        <Control>
          <Link to={paths.task.add}>
            <FromikField
              component={Button}
              color={'info'}
              size={'large'}
              bTxt={'追加'}
              type={'button'}
            />
          </Link>
        </Control>
      </Field>
    </form>
  </>
)

export const Search = withFormik<FormProps, FormValues>({
  mapPropsToValues: (p: FormProps) => ({ ...p.initValue }),
  handleSubmit: async (formValue, p) => {
    p.props.setIsLoading(true)
    p.props.setFreeWord(formValue)
    try {
      await sleep()
      const v = await p.props.handleSubmit(formValue)
      p.props.setList(v.getTasks)
    } catch (e) {
      if (isUnprocessableEntityException(e)) {
        // 手抜き...
        p.setErrors({ txt: '検索ワードが不適切です' })
        return
      }
      p.props.setIsError(true)
    } finally {
      p.setSubmitting(false)
      p.props.setIsLoading(false)
    }
  }
})(_Search)
