import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

// todo
// /Volumes/workspace/tmp/my-app/src/share/gqlRepository/task/index.ts
// 相対パス

// todo
// readmeに下記追加
// https://qiita.com/maaz118/items/472fc45b9bd6c4442cd7
