import { AddTask, FreeWord } from '../../../share/graphql.type'

interface Value {
  tasksOverview: {
    initValue: FreeWord
  }
  taskUpsert: {
    initValue: AddTask
  }
}

export const value: Value = {
  tasksOverview: {
    initValue: { txt: '' }
  },
  taskUpsert: {
    initValue: { title: '', body: '' }
  }
}
