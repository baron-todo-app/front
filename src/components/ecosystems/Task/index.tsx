import React from 'react'
import { Section } from 'rbx'
import { SearchList } from '../../organisms/SearchList'
import { resources } from '../../../lib/resources'

export const Task: React.FC = () => {
  const initValue = {
    txt: ''
  }

  const [list, setList] = React.useState()
  const [isLoading, setIsLoading] = React.useState(false)

  React.useEffect(() => {
    ;(async () => {
      const r = await resources.fetchTasks({ txt: initValue.txt })
      setList(r.getTasks)
    })()
  }, [])

  return (
    <>
      {isLoading && <>取得中...</>}
      {/*todo オーバーレイロード*/}

      <Section>
        <SearchList
          list={list}
          initValue={initValue}
          handleSubmit={resources.fetchTasks}
          setList={setList}
          setIsLoading={setIsLoading}
        />
      </Section>
    </>
  )
}
