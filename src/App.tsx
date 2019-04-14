import React from 'react'
import { withRouter, RouteComponentProps } from 'react-router'
import { routes as Routes } from './router'
import 'rbx/index.css'

type Props = RouteComponentProps

class InnerComponent extends React.Component<Props> {
  public render() {
    return (
      <>
        <Routes />
      </>
    )
  }
}

export const App = withRouter(InnerComponent)
