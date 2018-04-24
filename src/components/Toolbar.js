import React, { Component } from 'react'
import styled from 'styled-components'
import { Menu, User } from 'react-feather'
import { Link } from 'react-router-dom'

const Div = styled.div`
  height: 60px;
  background-color: #000;
  // background-color: #f58634;
  color: #fff;
  flex-direction: row;
  display: flex;
  flex: 1;
  font-family: 'Roboto', sans-serif;
  justify-content: center;
  line-height: 60px;
  padding: 0 23px;
`

export class Toolbar extends Component {
  render() {
    return (
      <Div>
        <div style={{ width: '40px' }} onClick={this.props.onMenuClick}>
          <Menu style={{ verticalAlign: 'middle' }} color="#fff" size={25} />
        </div>
        <div
          style={{
            width: '100%',
            // alignItems: 'center',
            // textAlign: 'center',
            fontFamily: 'Black Han Sans'
          }}
        >
          <Link to="/">
            <img src={require('../images/thdlogo3.png')} className="logo pa2" />
          </Link>
        </div>
        <div
          style={{ width: '20%', alignItems: 'flex-end', textAlign: 'right' }}
        >
          <User style={{ verticalAlign: 'middle' }} color="#fff" size={25} />
        </div>
      </Div>
    )
  }
}
