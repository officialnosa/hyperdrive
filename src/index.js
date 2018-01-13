import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"
import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import getMuiTheme from "material-ui/styles/getMuiTheme"

const muiTheme = getMuiTheme({
  //   ...darkBaseTheme,
  // palette: {
  //   textColor: cyan500,
  // },
  appBar: {
    // ...darkBaseTheme.appBar,
    textColor: "#000",
    color: "#fff",
    height: 60
  }
})

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById("root")
)
registerServiceWorker()
