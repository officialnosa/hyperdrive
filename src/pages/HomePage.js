import React from "react"
import Slider from "../components/slider"
import { GridList, GridTile, IconButton, Subheader } from "material-ui"
import StarBorder from "material-ui/svg-icons/toggle/star-border"

const styles = {
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  gridList: {
    width: 500
    // height: 450,
    // overflowY: "auto"
  }
}

const tilesData = [
  {
    img:
      "https://images.unsplash.com/photo-1505489435671-80a165c60816?auto=format&fit=crop&w=100&q=80",
    title: "Breakfast",
    author: "jill111"
  },
  {
    img:
      "https://images.unsplash.com/photo-1505489435671-80a165c60816?auto=format&fit=crop&w=53&q=80",
    title: "Tasty burger",
    author: "pashminu"
  },
  {
    img:
      "https://images.unsplash.com/photo-1505489435671-80a165c60816?auto=format&fit=crop&w=53&q=80",
    title: "Camera",
    author: "Danson67"
  },
  {
    img:
      "https://images.unsplash.com/photo-1505489435671-80a165c60816?auto=format&fit=crop&w=53&q=80",
    title: "Morning",
    author: "fancycrave1"
  },
  {
    img:
      "https://images.unsplash.com/photo-1505489435671-80a165c60816?auto=format&fit=crop&w=53&q=80",
    title: "Hats",
    author: "Hans"
  },
  {
    img:
      "https://images.unsplash.com/photo-1505489435671-80a165c60816?auto=format&fit=crop&w=53&q=80",
    title: "Honey",
    author: "fancycravel"
  },
  {
    img:
      "https://images.unsplash.com/photo-1505489435671-80a165c60816?auto=format&fit=crop&w=53&q=80",
    title: "Vegetables",
    author: "jill111"
  },
  {
    img:
      "https://images.unsplash.com/photo-1505489435671-80a165c60816?auto=format&fit=crop&w=53&q=80",
    title: "Water plant",
    author: "BkrmadtyaKarki"
  }
]

export default class HomePage extends React.Component {
  render() {
    return (
      <div id="header" className="shadow-1">
        <div style={{ height: 300 }}>
          <Slider
            images={[
              {
                image:
                  "https://images.unsplash.com/photo-1505489435671-80a165c60816?auto=format&fit=crop&w=531&q=80"
              },
              {
                image:
                  "https://images.unsplash.com/photo-1501569420805-e4dd535ec970?auto=format&fit=crop&w=750&q=80"
              },
              {
                image:
                  "https://images.unsplash.com/photo-1505925456693-124134d66749?auto=format&fit=crop&w=750&q=80"
              }
            ]}
          />
        </div>

        <div style={styles.root}>
          <GridList cellHeight={180} style={styles.gridList}>
            <Subheader>News Nexus</Subheader>
            {tilesData.map(tile => (
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
            ))}
          </GridList>
        </div>
      </div>
    )
  }
}
