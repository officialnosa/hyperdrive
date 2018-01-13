import React, { Component } from "react"
import { Switch, BrowserRouter, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AppBar from "material-ui/AppBar"
import MenuItem from "material-ui/MenuItem"
import Drawer from "material-ui/Drawer"
import FontIcon from "material-ui/FontIcon"
import FlatButton from "material-ui/FlatButton"
class App extends Component {
  state = {}
  handleClose = _ => this.setState({ open: false })
  render() {
    return (
      <div>
        <AppBar
          title={
            <img src={require("./images/logo.png")} className="logo pa2" />
          }
          onLeftIconButtonClick={_ => this.setState({ open: true })}
          iconElementRight={<FlatButton label="Login" />}
        />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </BrowserRouter>
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={open => this.setState({ open })}
        >
          <MenuItem onClick={this.handleClose}>
            <FontIcon
              className="muidocs-icon-action-home"
              color="#fff"
              style={{}}
            />Close
          </MenuItem>
          <MenuItem className="">News Nexus</MenuItem>
          <MenuItem className="">Featured</MenuItem>
          <MenuItem className="">Hyper TV</MenuItem>
          <MenuItem className="">Spotlight</MenuItem>
          <MenuItem className="">Community</MenuItem>
          <MenuItem className="">Explore</MenuItem>
          <MenuItem className="">Promos</MenuItem>
          <MenuItem className="">THD Central</MenuItem>
        </Drawer>
      </div>
    )
  }
}

export default App
