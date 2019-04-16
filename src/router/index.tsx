import { renderRoutes } from 'react-router-config'
import { Task } from '../components/environments/Task'
import { TaskAdd } from '../components/environments/TaskAdd'

export const routes: React.ComponentType = () =>
  renderRoutes([
    {
      component: Task,
      exact: true,
      path: '/'
    },
    {
      component: TaskAdd,
      exact: true,
      path: '/add'
    }
  ])
