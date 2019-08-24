// import React from 'react'
// import {Counter} from './components/hooks_demo/Counter'
// import {Effect} from './components/hooks_demo/Effect'
// import {Ref} from './components/hooks_demo/Ref'

// export const App: React.FC = () =>(
//   <>
//     <Counter/>
//     <hr/>
//     <Effect/>
//     <hr/>
//     <Ref/>

//   </>
// )

// // -------------------------------------------------------------------------------------------------

import React from 'react'
import 'rbx/index.css'
import { withRouter, RouteComponentProps } from 'react-router'
import { routes as Routes } from './router'
import { ErrorBoundary } from './components/environments/ErrorBoundary'

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
