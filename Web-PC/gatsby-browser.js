/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/display-name */
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
// import store from "./src/store"
// import { Provider } from "react-redux"
// import React from "react"
// import "global.css"
// import typography from "utils/typography"

// import App from "./src/context/App"

// export const wrapRootElement = ({ element }) => {
//   return (
//     <Provider store={store}>
//       <App>{element}</App>
//     </Provider>
//   )
// }
import gatsbyWrapTest from "./gatsbyWrapTest"
import { getIsApp, getJson } from "utils"
import { navigate } from "gatsby"

export const wrapRootElement = gatsbyWrapTest
export const onRouteUpdate = ({ location, prevLocation }) => {
  if (location.pathname !== "/" && location.pathname !== "/login") {
    if (
      (!getJson("access_token") || !getIsApp()) &&
      !excepts.some(path => location.pathname.includes(path))
    ) {
      window.location.href = `${location.origin}/login`
    }
  }
}
const excepts = [
  "member/signUp",
  "term",
  "member/profile",
  "member/find",
  "member/success/login",
  "member/success/signUp",
  "pro",
  "peachPage",
  "landing",
  "login",
  "pcViewer",
]
