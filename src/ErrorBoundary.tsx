import React from 'react'

export class ErrorBoundary extends React.Component {
  state = { hasError: false }

  // eslint-disable-next-line
  componentDidCatch(error: any, info: any) {
    this.setState({ hasError: true })
  }

  render() {
    if (this.state.hasError) {
      return <h1>エラー...</h1>
    }
    return this.props.children
  }
}
