import React from 'react'
import 'rbx/index.css'
import {withRouter, RouteComponentProps} from 'react-router'
import {routes as Routes} from './router'
import {ErrorBoundary} from './ErrorBoundary'

type Props = RouteComponentProps


class InnerComponent extends React.Component<Props> {
  public render() {
    return (
      <>
        <ErrorBoundary>
          <Routes/>
        </ErrorBoundary>
      </>
    )
  }
}

export const App = withRouter(InnerComponent)
