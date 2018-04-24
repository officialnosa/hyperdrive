import React, { Component } from 'react'
import { ComicList } from '../components/comic/ComicList'
import api from 'marvel-comics-api'
import { dummyComics } from './cs'

export class ComicScreen extends Component {
  state = { items: [] }
  componentDidMount() {
    // const context = this
    // api(
    //   'comics',
    //   {
    //     publicKey: 'e81600c2a7db0e3ed6bb3bc6edce9267',
    //     privateKey: '57411f2aad2d575deea6586d56ff9f671ce8c359',
    //     timeout: 10000,
    //     query: {
    //       limit: 20
    //     }
    //   },
    //   function(err, body) {
    //     if (err) throw err
    //     context.setState({ items: body.data.results })
    //     // total # of items
    //     console.log(body.data.total)
    //     // array of characters
    //     console.log(body.data.results)
    //   }
    // )
  }
  render() {
    return (
      <div>
        <ComicList items={dummyComics} />
      </div>
    )
  }
}

export default ComicScreen
