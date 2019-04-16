import React from 'react'
import { Input } from '../../atoms/Input'
import { Button } from '../../atoms/Button'
import { Control, Field, Column } from 'rbx'
import { withFormik, Field as FromikField, InjectedFormikProps } from 'formik'
import { FreeWord, Query } from '../../../share/graphql.type'
import { ListProps } from '../../atoms/List'
import { Link } from 'react-router-dom'
import { dto } from '../../../share/config'

interface FormValues extends FreeWord {}

interface FormProps {
  initValue: FormValues
  handleSubmit: (p: FormValues) => Promise<Pick<Query, 'getTasks'>>
  setList: (p: ListProps['list']) => void
  setIsLoading: (p: boolean) => void
  setIsError: (p: boolean) => void
}

export type SearchProps = FormProps

const _Search: React.FC<InjectedFormikProps<FormProps, FormValues>> = props => (
  <>
    <Column.Group centered>
      <Column size={6}>
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
              <Link to="/add">
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
      </Column>
    </Column.Group>
  </>
)

export const Search = withFormik<FormProps, FormValues>({
  mapPropsToValues: (p: FormProps) => ({ ...p.initValue }),
  handleSubmit: async (formValue, p) => {
    p.props.setIsLoading(true)
    try {
      const v = await p.props.handleSubmit(formValue)
      p.props.setList(v.getTasks)
    } catch (e) {
      p.props.setIsError(true)
    } finally {
      p.setSubmitting(false)
      p.props.setIsLoading(false)
    }
  }
})(_Search)
