import React from 'react'
import { resources } from '../lib/resources'
import { sleep } from '../lib/util'
import { FreeWord, Task } from '../share/graphql.type'

type SetIsError = (p: boolean) => void
type SetInit = (p: boolean) => void
type SetIsLoading = (p: boolean) => void

export function useError(isError: boolean) {
  React.useEffect(() => {
    if (isError) {
      throw new Error('エラー')
    }
  }, [isError])
}

export function useOverviewInit(
  init: boolean,
  setInit: SetIsError,
  setList: (p: Task[] | []) => void,
  setIsError: SetIsError,
  setIsLoading: SetIsLoading,
  freeWord: FreeWord
) {
  React.useEffect(() => {
    if (init === false) {
      return
    }

    setInit(false)
    setIsLoading(true)
    ;(async () => {
      try {
        await sleep()
        // eslint-disable-next-line
        const r = await resources.fetchTasks(freeWord)

        // eslint-disable-next-line
        setList(r.getTasks)
      } catch (e) {
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    })()
  }, [init])
}

export function useTaskDone(
  doneID: string,
  setInit: SetInit,
  setIsError: SetIsError,
  setIsLoading: SetIsLoading
) {
  React.useEffect(() => {
    if (doneID === '') {
      return
    }

    setIsLoading(true)
    ;(async () => {
      try {
        await sleep()
        await resources.deleteTask({ id: Number(doneID) })
      } catch (e) {
        setIsError(true)
      } finally {
        setInit(true)
        // このタイミングでローディング継続は、不要だが後の処理に流れる際のチラツキを無くす為
        setIsLoading(true)
      }
    })()
  }, [doneID])
}

export function useFetchData<T>(
  id: string,
  init: boolean,
  setInit: SetInit,
  setInitValue: (p: T) => void,
  setIsError: SetIsError,
  setIsLoading: SetIsLoading
) {
  React.useEffect(() => {
    if (id === '') {
      return
    }

    setInit(false)
    setIsLoading(true)
    ;(async () => {
      try {
        await sleep()
        const r = await resources.fetchTask({ id: Number(id) })
        // eslint-disable-next-line
        setInitValue(r.getTask as any as T)
      } catch (e) {
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    })()
  }, [])
}
