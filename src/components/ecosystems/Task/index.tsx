import React from 'react'
import { Section } from 'rbx'
import { SearchList } from '../../organisms/SearchList'
import { resources } from '../../../lib/resources'


export const Task: React.FC = () => {
  const [list, setList] = React.useState()

  React.useEffect(() => {
    (async () => {
      const r = await resources.fetchTasks({ txt: '' })
      setList(r.getTasks)
    })()
  }, [])

  return (
    <>
      <Section>
        <SearchList list={list} />
      </Section>
    </>
  )
}
