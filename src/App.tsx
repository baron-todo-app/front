import React from 'react'
import { withRouter, RouteComponentProps } from 'react-router'
import { routes as Routes } from './router'
import { ErrorBoundary } from './ErrorBoundary'
import 'rbx/index.css'

type Props = RouteComponentProps

class InnerComponent extends React.Component<Props> {
  public render() {
    return (
      <>
        <ErrorBoundary>
          <Routes />
        </ErrorBoundary>
      </>
    )
  }
}

export const App = withRouter(InnerComponent)
