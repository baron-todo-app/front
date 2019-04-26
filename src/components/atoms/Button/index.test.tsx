import React from 'react'
import { Button, ButtonProps } from '.'
import { mount } from 'enzyme'

describe('Button', () => {
  it('存在確認', () => {
    expect(Button).toBeDefined()
  })

  it('ボタンテキスト', () => {
    // eslint-disable-next-line
    const props = {
      color: 'primary',
      size: 'large',
      type: 'button',
      form: { isSubmitting: false },
      bTxt: 'bTxt'
    } as ButtonProps

    const wrapper = mount(<Button {...props} />)
    expect(wrapper.text()).toBe(props.bTxt)
  })
})
