import { renderRoutes } from 'react-router-config'
import { Task } from '../components/environments/Task'
import { TaskAdd } from '../components/environments/TaskAdd'
import { TaskEdit } from '../components/environments/TaskEdit'
import { NotFound } from '../components/environments/NotFound'
import { RenderProps } from '../components/environments/RenderProps'
import { ContextAPI } from '../components/environments/ContextAPI'

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
      path: '/:id(\\d+)'
    },
    {
      component: RenderProps,
      exact: true,
      path: '/render_props'
    },
    {
      component: ContextAPI,
      exact: true,
      path: '/context_api'
    },
    {
      component: NotFound
    }
  ])
