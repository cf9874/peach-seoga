import store from "./src/store"
import { Provider } from "react-redux"
import React from "react"
// import typography from "utils/typography"
import "global.css"
import App from "./src/context/App"
// import { Helmet } from "react-helmet"
export default ({ element }) => {
  return (
    <Provider store={store}>
      <App>{element}</App>
    </Provider>
  )
}
