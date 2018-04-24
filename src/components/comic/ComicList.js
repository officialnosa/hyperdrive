import React, { Component } from 'react'
import { ComicListItem } from './ComicListItem'
import ReactList from 'react-list'
import { Title } from '../Title'

export class ComicList extends Component {
  renderItem = (index, key) => {
    const { items } = this.props
    return (
      <ComicListItem
        key={key}
        index={index}
        className={'square-item' + (index % 2 ? '' : ' even')}
        item={items[index]}
      />
    )
  }
  render() {
    return (
      <div style={{ margin: 'auto', width: 'auto' }}>
        {/* {this.props.items.map(e => <ComicListItem key={e.id} item={e} />)} */}
        {/* <ReactList
          // axis="x"
          itemRenderer={this.renderItem}
          length={this.props.items.length}
          type="uniform"
        /> */}
        <Title style={{ marginLeft: 35 }}>Comics</Title>
        <div style={{ display: 'table' }}>
          {this.props.items.map((e, i) => this.renderItem(i, e.id))}
        </div>
      </div>
    )
  }
}
