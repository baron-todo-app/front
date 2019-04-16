import React from 'react'
import { withRouter, RouteComponentProps } from 'react-router'
import { routes as Routes } from './router'
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

// todo 処理実装
class ErrorBoundary extends React.Component {
  constructor(props: any) {
    super(props)
    this.state = { hasError: false }
  }

  /********* これが新しく追加 ************/
  componentDidCatch(error: any, info: any) {
    // Display fallback UI
    this.setState({ hasError: true })
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info);
  }

  render() {
    if ((this.state as any).hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>
    }
    return this.props.children
  }
}
