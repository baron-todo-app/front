import {addTaskQ, getTasksQ} from '../../share/gqlRepository/task'
import { FreeWord, Query, AddTask, Mutation } from '../../share/graphql.type'
import { print } from 'graphql/language/printer'
import { GraphQLClient } from 'graphql-request'

// todo env
const graphQLClient = new GraphQLClient('http://localhost:5000/graphql', {})

interface Resources {
  fetchTasks: (p: FreeWord) => Promise<Pick<Query, 'getTasks'>>
  addTask: (p: AddTask) => Promise<Pick<Mutation, 'addTask'>>
}

const resources: Resources = {
  fetchTasks: p => graphQLClient.request(print(getTasksQ(p))),
  addTask: p => graphQLClient.request(print(addTaskQ(p)))
}

export { resources }
