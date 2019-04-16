import React from 'react'
import { List as _List } from 'rbx'
import _ from 'lodash'
import { Query } from '../../../share/graphql.type'

interface Props {
  list: Pick<Query, 'getTasks'>['getTasks']
}

export type ListProps = Props

export const List: React.FC<Props> = ({ list }) => (
  <>
    <_List>
      {_.map(list, (v, i) => (
        <_List.Item key={i}>{v.title}</_List.Item>
      ))}
    </_List>
  </>
)
