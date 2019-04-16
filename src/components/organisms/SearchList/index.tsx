import React from 'react'
import { Search, SearchProps } from '../../molecules/Search'
import { List, ListProps } from '../../atoms/List'
import { Container } from 'rbx'

type SearchListProps = ListProps & SearchProps

export const SearchList: React.FC<SearchListProps> = ({
  list,
  initValue,
  handleSubmit,
  setList,
  setIsLoading
}) => (
  <>
    <Container>
      <Search
        initValue={initValue}
        handleSubmit={handleSubmit}
        setList={setList}
        setIsLoading={setIsLoading}
      />
      <List list={list} />
    </Container>
  </>
)
