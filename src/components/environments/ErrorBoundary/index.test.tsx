/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react'
import { ErrorBoundary } from '.'
import { mount, shallow } from 'enzyme'

describe('ErrorBoundary', () => {
  const txt = 'my component'
  const IC: React.FC = () => <>{txt}</>

  it('存在確認', () => {
    expect(ErrorBoundary).toBeDefined()
  })

  it('正常時にコンポーネントが正しく表示されているか？ & エラー用テキストが表示されていないか？', () => {
    const wrapper = mount(
      <ErrorBoundary>
        <IC />
      </ErrorBoundary>
    )
    expect(wrapper.text()).toBe(txt)
  })

  it('hasError時のエラー', () => {
    const wrapper = shallow(
      <ErrorBoundary>
        <IC />
      </ErrorBoundary>
    )
    wrapper.setState({ hasError: true })
    expect(wrapper.find('h1').text()).toBe('エラー...')
  })
})
