import React from 'react'
import { List, ListProps } from '.'
import { mount } from 'enzyme'
import { Table, Button } from 'rbx'

describe('List', () => {
  it('存在確認', () => {
    expect(List).toBeDefined()
  })

  it('データ無し 中身が表示されていない事を確認', () => {
    const props = ({
      list: []
      // eslint-disable-next-line
    } as any as ListProps)

    const wrapper = mount(<List {...props} />)
    expect(wrapper.find(Table).length).toBe(0)
  })

  it('データ有り', () => {
    // eslint-disable-next-line
    const props = {
      list: [
        {
          id: 1,
          title: 'foo',
          body: 'bar'
        }
      ],
      onClick: jest.fn,
      setDoneID: jest.fn,
      isLoading: false
    } as ListProps

    const spySetDoneID = jest.spyOn(props, 'setDoneID')
    const spyOnClick = jest.spyOn(props, 'onClick')

    const wrapper = mount(<List {...props} />)
    expect(wrapper.find(Table).length).toBe(1)

    // チェックボタンのクリック
    wrapper.find(Button).simulate('click')
    expect(spySetDoneID).toHaveBeenCalled()

    // 行のクリック
    wrapper
      .find(Table.Row)
      .get(1)
      .props.onClick()
    expect(spyOnClick).toHaveBeenCalled()
  })
})
