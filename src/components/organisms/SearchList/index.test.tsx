import React from 'react'
import { SearchList, SearchListProps } from '.'
import { Column } from 'rbx'
import { mount } from 'enzyme'
import { HashRouter as Router } from 'react-router-dom'

describe('SearchList', () => {
  it('存在確認', () => {
    expect(SearchList).toBeDefined()
  })

  it('デザイン確認', () => {
    const props = ({
      // eslint-disable-next-line
    } as any as SearchListProps)

    const wrapper = mount(
      <Router>
        <SearchList {...props} />
      </Router>
    )
    expect(wrapper.find(Column.Group).length).toBe(2)
    expect(wrapper.find(Column).length).toBe(2)
  })
})
