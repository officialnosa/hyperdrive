import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { SocialIcon } from './SocialIcon'
import { Facebook, Twitter, Youtube } from 'react-feather'
import { Text } from './Text'

const Div = styled.div`
  padding: 10px 20px;
  //   background-color: #000;
  display: table;
  width: 100%;
  height: 40px;
  line-height: 40px;
  color: #fff;
`

export class NavBar extends Component {
  render() {
    return (
      <Div>
        <SocialIcon
          //   bgColor="#f90f01"
          color="#f90f01"
          // bgColor="#f58634"
          bgColor="#fff2"
          style={{ verticalAlign: 'middle' }}
          icon={Youtube}
        />
        <SocialIcon
          //   bgColor="#1da1f2"
          color="#1da1f2"
          // bgColor="#af622a"
          bgColor="#fff2"
          style={{ verticalAlign: 'middle' }}
          icon={Twitter}
        />
        <SocialIcon
          //   bgColor="#4166b2"
          color="#4166b2"
          // bgColor="#6f3e1a"
          bgColor="#fff2"
          style={{ verticalAlign: 'middle' }}
          icon={Facebook}
        />
        <div>
          <Link to="/">
            <Text> Home</Text>
          </Link>
          <Link to="/comics">
            <Text> Comics</Text>
          </Link>
        </div>
      </Div>
    )
  }
}
