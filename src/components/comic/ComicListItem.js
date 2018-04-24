import React, { Component } from 'react'
import styled from 'styled-components'
import Dotdotdot from 'react-dotdotdot'

const images = [
  require('../../images/comics/1.jpg'),
  require('../../images/comics/2.png'),
  require('../../images/comics/3.jpg'),
  require('../../images/comics/4.jpg'),
  require('../../images/comics/5.jpg'),
  require('../../images/comics/6.jpg'),
  require('../../images/comics/7.jpg'),
  require('../../images/comics/8.jpg'),
  require('../../images/comics/9.jpg')
]

const Box = styled.div`
  height: 200px;
  width: 150px;
  color: #fff;
  border: 1px solid #fff3;
  background-color: #fff2;
  // margin: 20px;
  border-radius: 4px;
  // padding: 15px;
`

const Img = styled.img`
  height: 200px;
  width: 150px;
  color: #fff;
  // margin: 20px;
  border: none;
  border-radius: 4px;
  // padding: 15px;
`

const Div = styled.div`
  height: 250px;
  width: 150px;
  color: #fff;
  margin: 20px;
  float: left;
  padding: 15px;
  font-family: 'Lato';
`

export class ComicListItem extends Component {
  render() {
    return (
      <Div>
        <Box>
          <Img src={images[this.props.index % 9]} style={{}} />
        </Box>
        {/* <span>{this.props.item.title}</span> */}
        <Dotdotdot clamp={1}>
          <p>{this.props.item.title}</p>
        </Dotdotdot>
      </Div>
    )
  }
}
