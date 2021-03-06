/* @flow */

export default function warn (msg: string, err: ?Error) {
  if (window.console) {
    console.warn('[vue-i18n] ' + msg)
    if (err) {
      console.warn(err.stack)
    }
  }
}
