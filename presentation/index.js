// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
//  primary: "#ff4081"
  primary: "#74a6ff"

});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              <Link href="https://wiki.hybris.com/x/T7-vEg" target="window">
                Facts about Innovation Days
              </Link>
            </Heading>
            <List>
              <ListItem>Each team member gets 1 working day per 2 sprints</ListItem>
              <Appear><ListItem>Use of the time is not mandatory</ListItem></Appear>
              <Appear><ListItem>The time is not transferable</ListItem></Appear>
              <Appear><ListItem>Team members can get together and form larger groups that work on one idea.</ListItem></Appear>
              <Appear><ListItem>There is no obligation to present any reports, prep work or results of the “innovation time” to the team or manager</ListItem></Appear>
              <Appear><ListItem>Tracking time spent on “Innovation Time” is the responsibility of the teams.</ListItem></Appear>
              <Appear><ListItem>Time spent in D-Shop also counts as innovative time.</ListItem></Appear>
            </List>
          </Slide>
          <Slide>
            <Heading size={1} lineHeight={1} textColor="black">
              Still needs to be implemented.
            </Heading>
            <List>
              <ListItem>However, every 6 months all P&T members will vote for best ideas that are the results of "innovation days" </ListItem>
              <ListItem>Authors of the top 25% will get additional 5 days to be spent on "innovation" in next 6 months. </ListItem>
              <ListItem>So publishing results, showing off and working on great ideas may be beneficial.</ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading size={1} lineHeight={1} textColor="black">
              Exploration of new technologies - how you use it
            </Heading>
            <List>
              <ListItem>HTML, CSS</ListItem>
              <ListItem>elixir/Phoenix</ListItem>
              <ListItem>docker elk</ListItem>
              <ListItem>Proxy in Go</ListItem>
              <ListItem>Spark Twitter streaming</ListItem>
              <ListItem>3d Modelling Basics</ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading size={1} lineHeight={1} textColor="black">
              Presentations and trainings preparation - how you use it
            </Heading>
            <List>
              <ListItem>Bar Camp</ListItem>
              <ListItem>Lunch Talk</ListItem>
              <ListItem>IoT Experiments (Workshop)</ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading size={1} lineHeight={1} textColor="black">
              Self - learning sessions - how you use it
            </Heading>
            <List>
              <ListItem>api-management</ListItem>
              <ListItem>yaas builders</ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading size={1} lineHeight={1} textColor="black">
              Other examples how you use it
            </Heading>
            <List>
              <ListItem>D-shop: BullsEye</ListItem>
              <ListItem>YaaS topics but from others scope: data migration </ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading size={1} lineHeight={1} textColor="black">
              END
            </Heading>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
