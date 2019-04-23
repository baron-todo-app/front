import React from 'react'
import { TaskUpsert as _TaskEdit } from '../../ecosystems/TaskUpsert'
import { RouteComponentProps } from 'react-router'

type TaskEditProps = RouteComponentProps<{ id: string }>

export const TaskEdit: React.FC<TaskEditProps> = props => (
  <_TaskEdit history={props.history} id={props.match.params.id} bTxt={'更新'} />
)
