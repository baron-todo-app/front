import React from 'react'
import { Search, SearchProps } from '.'
import { mount } from 'enzyme'
import { HashRouter as Router } from 'react-router-dom'

describe('Search', () => {
  const props = ({
    initValue: { txt: '' },
    handleSubmit: jest.fn,
    setList: jest.fn,
    setIsLoading: jest.fn,
    setIsError: jest.fn,
    setFreeWord: jest.fn
    // eslint-disable-next-line
  } as any as SearchProps)

  it('存在確認', () => {
    expect(Search).toBeDefined()
  })

  it('handleSubmit 内の処理が実行されたか 正常', () => {
    const p = { ...props }

    const spySetList = jest.spyOn(p, 'setList')
    const spySetIsLoading = jest.spyOn(p, 'setIsLoading')
    const spySetIsError = jest.spyOn(p, 'setIsError')
    const spySetFreeWord = jest.spyOn(p, 'setFreeWord')
    const spyHandleSubmit = jest.spyOn(p, 'handleSubmit')

    const wrapper = mount(
      <Router>
        <Search {...p} />
      </Router>
    )
    const form = wrapper.find('form').first()
    form.simulate('submit')

    process.nextTick(() => {
      expect(spySetIsLoading).toHaveBeenCalled()
      expect(spySetFreeWord).toHaveBeenCalled()
      expect(spyHandleSubmit).toHaveBeenCalled()

      // 取得結果がセットされている事が確認
      expect(spySetList).toHaveBeenCalled()
    })

    spySetList.mockRestore()
    spySetIsLoading.mockRestore()
    spySetIsError.mockRestore()
    spySetFreeWord.mockRestore()
  })

  it('handleSubmit 内の処理が実行されたか 異常', () => {
    const p = {
      ...props,
      handleSubmit: () => {
        throw new Error()
      }
    }

    const spySetList = jest.spyOn(p, 'setList')
    const spySetIsLoading = jest.spyOn(p, 'setIsLoading')
    const spySetIsError = jest.spyOn(p, 'setIsError')
    const spySetFreeWord = jest.spyOn(p, 'setFreeWord')

    const wrapper = mount(
      <Router>
        <Search {...p} />
      </Router>
    )
    const form = wrapper.find('form').first()
    form.simulate('submit')

    process.nextTick(() => {
      expect(spySetIsLoading).toHaveBeenCalled()
      expect(spySetFreeWord).toHaveBeenCalled()
      // エラーが正常にハンドリング事が確認
      expect(spySetIsError).toHaveBeenCalled()
    })

    spySetList.mockRestore()
    spySetIsLoading.mockRestore()
    spySetIsError.mockRestore()
    spySetFreeWord.mockRestore()
  })
})
