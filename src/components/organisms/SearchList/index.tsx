import React from 'react'
import { Search, ISearch } from '../../molecules/Search'
import { List, IList } from '../../atoms/List'
import { Container } from 'rbx'

type ISearchList = IList & ISearch

export const SearchList: React.FC<ISearchList> = ({ list }) => (
  <>
    <Container>
      <Search />
      <List list={list} />
    </Container>
  </>
)
