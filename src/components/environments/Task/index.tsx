import React from 'react'
import { TasksOverview } from '../../ecosystems/TasksOverview'
import { RouteComponentProps } from 'react-router'

type TaskProps = RouteComponentProps

export const Task: React.FC<TaskProps> = props => (
  <TasksOverview history={props.history} />
)
