import React from 'react'
import { TaskUpsert as _TaskAdd } from '../../ecosystems/TaskUpsert'
import { RouteComponentProps } from 'react-router'

type TaskAddProps = RouteComponentProps

export const TaskAdd: React.FC<TaskAddProps> = props => (
  <_TaskAdd history={props.history} bTxt={'追加'} />
)
