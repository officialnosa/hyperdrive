import React from 'react'
import Slider from '../components/slider'
import { GridList, GridTile, IconButton, Subheader } from 'material-ui'
import StarBorder from 'material-ui/svg-icons/toggle/star-border'
import { Box } from 'rebass'
import { ComicList } from '../components/comic/ComicList'
import { dummyComics } from './cs'
const styles = {
  root: {
    // display: 'flex',
    // flexWrap: 'wrap',
    margin: 'auto',
    color: '#fff',
    // display: 'table',
    // justifyContent: 'space-around',
    width: 1000
  },
  gridList: {
    maxWidth: 1000,
    display: 'table'
    // height: 450,
    // overflowY: "auto"
  }
}

const tilesData = [
  {
    img:
      'https://images.unsplash.com/photo-1486421728445-c460298b20b6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e3ce20ed379dc88b1092745ce38b6357&auto=format&fit=crop&w=750&q=80',
    title: 'Breakfast',
    author: 'jill111'
  },
  {
    img:
      'https://images.unsplash.com/photo-1505489435671-80a165c60816?auto=format&fit=crop&w=353&q=80',
    title: 'Tasty burger',
    author: 'pashminu'
  },
  {
    img:
      'https://images.unsplash.com/photo-1505489435671-80a165c60816?auto=format&fit=crop&w=353&q=80',
    title: 'Camera',
    author: 'Danson67'
  },
  {
    img:
      'https://images.unsplash.com/photo-1505489435671-80a165c60816?auto=format&fit=crop&w=353&q=80',
    title: 'Morning',
    author: 'fancycrave1'
  },
  {
    img:
      'https://images.unsplash.com/photo-1505489435671-80a165c60816?auto=format&fit=crop&w=353&q=80',
    title: 'Hats',
    author: 'Hans'
  },
  {
    img:
      'https://images.unsplash.com/photo-1505489435671-80a165c60816?auto=format&fit=crop&w=353&q=80',
    title: 'Honey',
    author: 'fancycravel'
  },
  {
    img:
      'https://images.unsplash.com/photo-1505489435671-80a165c60816?auto=format&fit=crop&w=353&q=80',
    title: 'Vegetables',
    author: 'jill111'
  },
  {
    img:
      'https://images.unsplash.com/photo-1505489435671-80a165c60816?auto=format&fit=crop&w=353&q=80',
    title: 'Water plant',
    author: 'BkrmadtyaKarki'
  }
]

export default class HomePage extends React.Component {
  render() {
    return (
      <div id="header" className="shadow-1">
        <div style={{ height: 400, margin: 20 }}>
          <Slider
            images={[
              {
                // image:
                // 'https://images.unsplash.com/photo-1486421728445-c460298b20b6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e3ce20ed379dc88b1092745ce38b6357&auto=format&fit=crop&w=750&q=80'
                image: require('../images/comics/1.jpg')
              },
              {
                // image:
                // 'https://images.unsplash.com/photo-1501569420805-e4dd535ec970?auto=format&fit=crop&w=750&q=80'
                image: require('../images/comics/9.jpg')
              },
              {
                // image:
                // 'https://images.unsplash.com/photo-1505925456693-124134d66749?auto=format&fit=crop&w=750&q=80'

                image: require('../images/comics/7.jpg')
              }
            ]}
          />
        </div>

        {/* <div style={styles.root}>
          <GridList cols={3} cellHeight={180} style={styles.gridList}>
            <Subheader>News Nexus</Subheader>
            {tilesData.map(tile => (
              // <Box p={2} width={[1, 1 / 2, 1 / 4]}>
              <GridTile
                key={tile.img}
                title={tile.title}
                subtitle={
                  <span>
                    by <b>{tile.author}</b>
                  </span>
                }
                actionIcon={
                  <IconButton>
                    <StarBorder color="white" />
                  </IconButton>
                }
              >
                <img src={tile.img} />
              </GridTile>
              // </Box>
            ))}
          </GridList>
        </div> */}
        {/* <ComicList items={[{ id: 1, name: 'Test', image: '' }]} /> */}
        <ComicList items={dummyComics} />
      </div>
    )
  }
}
