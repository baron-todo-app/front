import React from 'react'
import { Input, InputProps } from '.'
import { mount } from 'enzyme'

describe('Button', () => {
  it('存在確認', () => {
    expect(Input).toBeDefined()
  })

  it('placeholder', () => {
    // eslint-disable-next-line
    const props = {
      size: 'large',
      placeholder: '~placeholder~',
      maxLength: 10,
      color: 'info'
    } as InputProps

    const wrapper = mount(<Input {...props} />)
    expect(wrapper.prop('placeholder')).toBe(props.placeholder)
  })
})
