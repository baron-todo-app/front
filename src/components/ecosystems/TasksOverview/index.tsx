import React from 'react'
import { SearchList } from '../../organisms/SearchList'
import { resources } from '../../../lib/resources'
import { Container, Section } from 'rbx'
import { RouteComponentProps } from 'react-router'
import { useOverviewInit, useError, useTaskDone } from '../../../hooks'
import { OverlayLoadingSpinner } from '../../atoms/OverlayLoadingSpinner'

interface TasksOverviewProps {
  history: RouteComponentProps['history']
}

export const TasksOverview: React.FC<TasksOverviewProps> = ({ history }) => {
  const [init, setInit] = React.useState(true)
  const [list, setList] = React.useState()
  const [freeWord, setFreeWord] = React.useState(
    resources.tasksOverview.initValue
  )
  const [isLoading, setIsLoading] = React.useState(false)
  const [isError, setIsError] = React.useState(false)
  const [doneID, setDoneID] = React.useState('')

  useError(isError)
  useOverviewInit(init, setInit, setList, setIsError, setIsLoading, freeWord)
  useTaskDone(doneID, setInit, setIsError, setIsLoading)

  return (
    <>
      <OverlayLoadingSpinner isLoading={isLoading} />
      <Section>
        <Container>
          <SearchList
            list={list}
            initValue={resources.tasksOverview.initValue}
            handleSubmit={resources.fetchTasks}
            setList={setList}
            setIsLoading={setIsLoading}
            setIsError={setIsError}
            onClick={history.push}
            setDoneID={setDoneID}
            isLoading={isLoading}
            setFreeWord={setFreeWord}
          />
        </Container>
      </Section>
    </>
  )
}
