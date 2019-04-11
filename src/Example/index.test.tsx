import * as React from 'react'
import { Example, StyledButton } from '.'
import {shallow} from 'enzyme'

describe('Example', () => {
  it('存在確認', () => {
    expect(Example).toBeDefined()
  })

  it('存在確認2', () => {
    const wrapper = shallow(<Example text={''} action={() => ''} />);
    expect(wrapper.find(StyledButton).length).toBe(1);
  })
})
