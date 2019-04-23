import React from 'react'
import { Search, SearchProps } from '../../molecules/Search'
import { List, ListProps } from '../../molecules/List'
import { Column } from 'rbx'

export type SearchListProps = ListProps & SearchProps

export const SearchList: React.FC<SearchListProps> = ({
  list,
  initValue,
  handleSubmit,
  setList,
  setIsLoading,
  setIsError,
  onClick,
  setDoneID,
  isLoading,
  setFreeWord
}) => (
  <>
    <Column.Group centered>
      <Column size={6}>
        <Search
          initValue={initValue}
          handleSubmit={handleSubmit}
          setList={setList}
          setIsLoading={setIsLoading}
          setIsError={setIsError}
          setFreeWord={setFreeWord}
        />
      </Column>
    </Column.Group>
    <Column.Group centered>
      <Column size={8}>
        <List
          list={list}
          onClick={onClick}
          setDoneID={setDoneID}
          isLoading={isLoading}
        />
      </Column>
    </Column.Group>
  </>
)
