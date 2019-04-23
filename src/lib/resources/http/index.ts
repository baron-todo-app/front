import {
  addTaskQ,
  getTasksQ,
  getTaskQ,
  deleteTaskQ,
  updateTaskQ
} from '../../../share/gqlRepository/task'
import {
  FreeWord,
  Query,
  AddTask,
  Mutation,
  GetTask,
  UpdateTask,
  DeleteTask
} from '../../../share/graphql.type'
import { print } from 'graphql/language/printer'
import { GraphQLClient } from 'graphql-request'

const graphQLClient = new GraphQLClient(
  `${process.env.REACT_APP_ENDPOINT}/graphql`,
  {}
)

interface Resources {
  fetchTasks: (p: FreeWord) => Promise<Pick<Query, 'getTasks'>>
  fetchTask: (p: GetTask) => Promise<Pick<Query, 'getTask'>>
  addTask: (p: AddTask) => Promise<Pick<Mutation, 'addTask'>>
  updateTask: (p: UpdateTask) => Promise<Pick<Mutation, 'updateTask'>>
  deleteTask: (p: DeleteTask) => Promise<Pick<Mutation, 'deleteTask'>>
}

const http: Resources = {
  fetchTasks: p => graphQLClient.request(print(getTasksQ(p))),
  fetchTask: p => graphQLClient.request(print(getTaskQ(p))),
  addTask: p => graphQLClient.request(print(addTaskQ(p))),
  updateTask: p => graphQLClient.request(print(updateTaskQ(p))),
  deleteTask: p => graphQLClient.request(print(deleteTaskQ(p)))
}

export { http }
