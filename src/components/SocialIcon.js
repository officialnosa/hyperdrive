import React, { Component } from 'react'
import styled, { css } from 'styled-components'

const Div = styled.div`
  padding: 0 10px;
  float: right;
  //   margin-left: 20px;
  border-radius: 32px;
  margin-left: 11px;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : '#50f')};
`

export class SocialIcon extends Component {
  render() {
    const Component = this.props.icon
    return (
      <Div {...this.props}>
        {this.props.icon ? (
          <Component color="#fff" size="19" {...this.props} />
        ) : null}
      </Div>
    )
  }
}

export default SocialIcon
