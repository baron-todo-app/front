import React from 'react'
import { UpsertForm, UpsertFormProps } from '../../organisms/UpsertForm'
import { resources } from '../../../lib/resources'
import { Container, Section } from 'rbx'
import { useError, useFetchData } from '../../../hooks'
import { UpdateTask } from '../../../share/graphql.type'
import { OverlayLoadingSpinner } from '../../atoms/OverlayLoadingSpinner'
import { validationSchema } from '../../../lib/validationSchema'

type TaskUpsertProps = Pick<UpsertFormProps, 'history'> &
  Pick<UpsertFormProps, 'bTxt'> & { id?: string }

export const TaskUpsert: React.FC<TaskUpsertProps> = ({
  history,
  id = '',
  bTxt
}) => {
  // eslint-disable-next-line
  const handleSubmit: any =
    id === '' ? resources.addTask : resources.updateTask

  const [init, setInit] = React.useState(true)
  const [initValue, setInitValue] = React.useState(
    resources.taskUpsert.initValue
  )
  const [isError, setIsError] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)

  useError(isError)
  useFetchData<UpdateTask>(
    id,
    init,
    setInit,
    setInitValue,
    setIsError,
    setIsLoading
  )

  return (
    <>
      <OverlayLoadingSpinner isLoading={isLoading} />
      <Section>
        <Container>
          <UpsertForm
            initValue={initValue}
            handleSubmit={handleSubmit}
            setIsError={setIsError}
            history={history}
            bTxt={bTxt}
            validationSchema={validationSchema}
          />
        </Container>
      </Section>
    </>
  )
}
