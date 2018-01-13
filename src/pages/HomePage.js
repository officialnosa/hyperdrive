import React from "react"
import Slider from "../components/slider"
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardText,
  CardTitle,
  FlatButton
} from "material-ui"

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
        <div>
          <div>News Nexus</div>
          <div>
            <div>
              <span>Breakin'</span>
              <div />
              <div>Games</div>
            </div>
          </div>
        </div>

        <div>
          <Card>
            <CardHeader
              title="URL Avatar"
              subtitle="Subtitle"
              avatar="images/jsa-128.jpg"
            />
            <CardMedia
              overlay={
                <CardTitle title="Overlay title" subtitle="Overlay subtitle" />
              }
            >
              <img src="images/nature-600-337.jpg" alt="" />
            </CardMedia>
            <CardTitle title="Card title" subtitle="Card subtitle" />
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec
              vulputate interdum sollicitudin. Nunc lacinia auctor quam sed
              pellentesque. Aliquam dui mauris, mattis quis lacus id,
              pellentesque lobortis odio.
            </CardText>
            <CardActions>
              <FlatButton label="Action1" />
              <FlatButton label="Action2" />
            </CardActions>
          </Card>
        </div>
      </div>
    )
  }
}
