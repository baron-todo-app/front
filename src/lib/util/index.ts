import _ from 'lodash'
import { apiMap, ApiMap } from '../../config/apiMap'

// eslint-disable-next-line
function lensErrors(e: any): any {
  // nestjsとうまく連家させれば、もっとよくなる
  return _.head(e.response.errors)
}

// eslint-disable-next-line
function lensResStatus(e: any) {
  // nestjsとうまく連家させれば、もっとよくなる
  return lensErrors(e).extensions.exception.status
}

// eslint-disable-next-line
function lensResMessage(e: any) {
  // nestjsとうまく連家させれば、もっとよくなる
  return lensErrors(e).message.message
}

/**
 * ローディングを見せるために 若干遅延させる
 */
export function sleep() {
  if (process.env.NODE_ENV === 'test') {
    // テスト時は 不要
    return
  }
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, 300)
  })
}

/**
 *
 * @param e
 */
// eslint-disable-next-line
export function makeErrorMsg(e: any) {
  type MsgObj = { [k in keyof ApiMap]?: string }

  let msgObj: MsgObj = {}

  _.forEach(lensResMessage(e), v => {
    msgObj[v.property as keyof ApiMap] = _.chain(v.constraints)
      .map(msg => apiMap[v.property as keyof ApiMap] + msg)
      .join()
      .value()
  })
  return msgObj
}

/**
 *
 * @param e
 */
// eslint-disable-next-line
export function isUnprocessableEntityException(e: any) {
  if (process.env.NODE_ENV === 'test') {
    // テスト時は 不要
    return
  }
  // nestjsとうまく連家させれば、もっとよくなる
  return lensResStatus(e) === 422
}

/**
 *
 * @param e
 */
// eslint-disable-next-line
export function isNotFoundException(e: any) {
  // nestjsとうまく連家させれば、もっとよくなる
  return lensResStatus(e) === 404
}
