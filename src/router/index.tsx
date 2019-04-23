import { renderRoutes } from 'react-router-config'
import { Task } from '../components/environments/Task'
import { TaskAdd } from '../components/environments/TaskAdd'
import { TaskEdit } from '../components/environments/TaskEdit'

export const paths = {
  top: '/',
  task: {
    add: '/add'
  }
}

export const routes: React.ComponentType = () =>
  renderRoutes([
    {
      component: Task,
      exact: true,
      path: paths.top
    },
    {
      component: TaskAdd,
      exact: true,
      path: paths.task.add
    },
    {
      component: TaskEdit,
      exact: true,
      path: '/:id'
    }
  ])
