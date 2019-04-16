import React from 'react'
import { AddForm } from '../../organisms/AddForm'
import { resources } from '../../../lib/resources'

export const TaskAdd: React.FC = () => {
  const initValue = {
    title: '',
    body: ''
  }

  return (
    <>
      <AddForm initValue={initValue} handleSubmit={resources.addTask} />
    </>
  )
}
