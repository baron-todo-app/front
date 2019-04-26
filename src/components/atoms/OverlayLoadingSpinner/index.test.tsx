import React from 'react'
import { OverlayLoadingSpinner, Props } from '.'
import { mount } from 'enzyme'
import MDSpinner from 'react-md-spinner'

describe('OverlayLoadingSpinner', () => {
  it('存在確認', () => {
    expect(OverlayLoadingSpinner).toBeDefined()
  })

  it('表示', () => {
    // eslint-disable-next-line
    const props = {
      isLoading: true
    } as Props

    const wrapper = mount(<OverlayLoadingSpinner {...props} />)
    expect(wrapper.find(MDSpinner).length).toBe(1)
  })

  it('非表示', () => {
    // eslint-disable-next-line
    const props = {
      isLoading: false
    } as Props

    const wrapper = mount(<OverlayLoadingSpinner {...props} />)
    expect(wrapper.find(MDSpinner).length).toBe(0)
  })
})
