import { renderRoutes } from 'react-router-config'
import { Task } from '../components/environments/Task'

export const routes: React.ComponentType = () =>
  renderRoutes([
    {
      component: Task,
      exact: true,
      path: '/'
    },
    {
      component: Task,
      exact: true,
      path: '/:id'
    }
  ])
