import React, { Component, Fragment } from 'react'
import { Switch, BrowserRouter, Route, Link } from 'react-router-dom'
import HomePage from './pages/HomePage'

import AppBar from 'material-ui/AppBar'
import MenuItem from 'material-ui/MenuItem'
import Drawer from 'material-ui/Drawer'
import FontIcon from 'material-ui/FontIcon'
import FlatButton from 'material-ui/FlatButton'
import { Toolbar } from './components/Toolbar'
import { ComicScreen } from './pages/comics'
import { NavBar } from './components/NavBar'
class App extends Component {
  state = {}
  handleClose = _ => this.setState({ open: false })
  render() {
    return (
      <div>
        <BrowserRouter>
          <Fragment>
            <Toolbar onMenuClick={_ => this.setState({ open: true })} />
            <NavBar />
            {/* <AppBar
              title={
                <img src={require('./images/logo.png')} className="logo pa2" />
              }
              onLeftIconButtonClick={_ => this.setState({ open: true })}
              // iconElementRight={
              //   <div>
              //     <div className="fl roboto pa2">News</div>
              //     <div className="fl roboto pa2">Books</div>
              //     <div className="fl roboto pa2">Videos</div>
              //     <div className="fl roboto pa2">Games</div>
              //     <div className="fl roboto pa2">Collectibles</div>
              //     <FlatButton label="Login" />
              //   </div>
              // }
            /> */}

            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/comics" component={ComicScreen} />
            </Switch>
            <Drawer
              docked={false}
              width={200}
              open={this.state.open}
              onRequestChange={open => this.setState({ open })}
            >
              <Link to="/">
                <img
                  src={require('./images/thdlogo2.png')}
                  className="logo pa2"
                />
              </Link>
              {/* <MenuItem onClick={this.handleClose}>
                <FontIcon
                  className="muidocs-icon-action-home"
                  color="#fff"
                  style={{}}
                />Close
              </MenuItem> */}
              {/* <Link to="/news">
                <MenuItem className="">News Nexus</MenuItem>
              </Link> */}
              <Link to="/books">
                <MenuItem onClick={this.handleClose} className="">
                  Books
                </MenuItem>
              </Link>
              <Link to="/comics">
                <MenuItem onClick={this.handleClose} className="">
                  Comics
                </MenuItem>
              </Link>
              <MenuItem onClick={this.handleClose} className="">
                Featured
              </MenuItem>
              {/* <MenuItem onClick={this.handleClose} className="">
                Hyper TV
              </MenuItem>
              <MenuItem onClick={this.handleClose} className="">
                Spotlight
              </MenuItem>
              <MenuItem onClick={this.handleClose} className="">
                Community
              </MenuItem>
              <MenuItem onClick={this.handleClose} className="">
                Explore
              </MenuItem>
              <MenuItem onClick={this.handleClose} className="">
                Promos
              </MenuItem>
              <MenuItem onClick={this.handleClose} className="">
                THD Central
              </MenuItem> */}
            </Drawer>
            <footer className="page-footer js-page-footer">
              <div className="content-wrap">
                <nav className="footer-nav js-footer-nav">
                  <ul>
                    <li>
                      <a href="/about/">About</a>
                    </li>
                    <li>
                      <a href="http://news.letterboxd.com/">News</a>
                    </li>
                    {/* <li>
                      <a href="/pro/">Pro</a>
                    </li>
                    <li>
                      <a href="/apps/">Apps</a>
                    </li>
                    <li>
                      <a href="/year-in-review/">Year in Review</a>
                    </li>
                    <li>
                      <a href="/gift-guide/">Gift Guide</a>
                    </li> */}
                    <li>
                      <a href="/welcome/">Help</a>
                    </li>
                    <li>
                      <a
                        href="#"
                        id="uservoice-link"
                        title="Provide feedback to Letterboxd"
                      >
                        Feedback
                      </a>
                    </li>
                    <li>
                      <a href="/legal/terms-of-use/">Terms</a>
                    </li>
                    {/* <li>
                      <a href="/api-coming-soon/">API</a>
                    </li> */}
                    <li>
                      <a href="/contact/">Contact</a>
                    </li>
                  </ul>
                </nav>

                <section className="social">
                  <span className="twitter">
                    <a
                      href="https://twitter.com/thehdyperrive"
                      className="tooltip"
                      data-original-title="Letterboxd on Twitter"
                    >
                      Twitter
                    </a>
                  </span>
                  <span className="facebook">
                    <i className="slash" />
                    <a
                      href="https://www.facebook.com/thehdyperrive"
                      className="tooltip"
                      data-original-title="Letterboxd on Facebook"
                    >
                      Facebook
                    </a>
                  </span>
                  <span className="instagram">
                    <i className="slash" />
                    <a
                      href="https://www.instagram.com/thehdyperrive"
                      className="tooltip"
                      data-original-title="Letterboxd on Instagram"
                    >
                      Instagram
                    </a>
                  </span>
                </section>
                <p className="copyright">&copy; The Hyper Drive</p>
              </div>
            </footer>
          </Fragment>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
