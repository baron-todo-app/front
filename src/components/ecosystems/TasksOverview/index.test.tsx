import React from 'react'
import { TasksOverview, TasksOverviewProps } from '.'
import { mount } from 'enzyme'
import { HashRouter as Router } from 'react-router-dom'
import { Section } from 'rbx'

describe('TasksOverview', () => {
  it('存在確認', () => {
    expect(TasksOverview).toBeDefined()
  })

  it('デザイン確認', () => {
    const props = ({
      history: {
        push: () => {}
      }
      // eslint-disable-next-line
    } as any as TasksOverviewProps)

    const wrapper = mount(
      <Router>
        <TasksOverview {...props} />
      </Router>
    )
    expect(wrapper.find(Section).length).toBe(1)
  })
})
