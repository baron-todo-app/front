import {
  getTasksQ,
  getTaskQ,
  addTaskQ,
  deleteTaskQ,
  updateTaskQ
} from '../../share/gqlRepository/task'
import {
  FreeWord,
  Task,
  GetTask,
  AddTask,
  DeleteTask,
  UpdateTask,
  Query
} from '../../share/graphql.type'
import { print } from 'graphql/language/printer'
import { GraphQLClient } from 'graphql-request'

// todo env
const graphQLClient = new GraphQLClient('http://localhost:5000/graphql', {})

interface IResources {
  fetchTasks: (p: FreeWord) => Promise<Pick<Query, 'getTasks'>>
}

const resources: IResources = {
  fetchTasks: p => graphQLClient.request(print(getTasksQ(p)))
}

export { resources }
