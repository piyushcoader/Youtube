/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

var videos = [
{
  name: "Kid Cudi - Just What I Am ft King Chip",
  image: "i.ytimg.com/vi/hGbP_kTM4CA/maxresdefault.jpg",
  youtuber: "KidCudiVEVO",
  views: "33M",
  time:'3 years ago'
},
{
  name: "Gabrielle Bernstein on How to Fear Into Faith with Lewis Howes",
  image: "i.ytimg.com/vi/l_XADHUIzsM/maxresdefault.jpg",
  youtuber: "Lewis Howes",
  views: "16k",
  time:'6 days ago'
},
{
  name: "*FREE* Childish Gambino - [ Pink Toes sample ] Type Beat 2016",
  image: "i.ytimg.com/vi/0Wa2krPqB7E/hqdefault.jpg",
  youtuber: "Nor'Ledges",
  avatar: "https://yt3.ggpht.com/-COeslpjHnLA/AAAAAAAAAAI/AAAAAAAAAAA/dKBBhyjxnI0/s68-c-k-no-mo-rj-c0xffffff/photo.jpg",
  views: "43k",
  time:'4 months ago'
},
{
  name: "*FREE* Childish Gambino x Chance The Rapper x Logic(Type Beat) 2016",
  image: "i.ytimg.com/vi/55reONWI1Is/maxresdefault.jpg",
  youtuber: "Nor'Ledges",
  avatar: "https://yt3.ggpht.com/-COeslpjHnLA/AAAAAAAAAAI/AAAAAAAAAAA/dKBBhyjxnI0/s68-c-k-no-mo-rj-c0xffffff/photo.jpg",
  views: "3k",
  time:'4 months ago'
},
{
  name: "I May Have Cried After Making This Video...",
  image: "i.ytimg.com/vi/y2IdJBZOejI/maxresdefault.jpg",
  youtuber: "Philip Defranco",
  avatar: "https://yt3.ggpht.com/-nPmtKfa70lE/AAAAAAAAAAI/AAAAAAAAAAA/E66oeUI2kFw/s68-c-k-no-mo-rj-c0xffffff/photo.jpg",
  views: "3k",
  time:'4 months ago'
},{
  name: "Up & Up",
  image: "i.ytimg.com/vi/BPNTC7uZYrI/maxresdefault.jpg",
  youtuber: "Coldplay Official",
  avatar: "https://yt3.ggpht.com/-5E9R-kUK4H0/AAAAAAAAAAI/AAAAAAAAAAA/8RWanSWSVOI/s68-c-k-no-mo-rj-c0xffffff/photo.jpg",
  views: "90M",
  time:'5 months ago'
},
{
  name: "Google and NASA's Quantum Artificial Intelligence Lab",
  image: "i.ytimg.com/vi/CMdHDHEuOUE/maxresdefault.jpg",
  youtuber: "Google",
  avatar: "https://yt3.ggpht.com/-v0soe-ievYE/AAAAAAAAAAI/AAAAAAAAAAA/OixOH_h84Po/s68-c-k-no-mo-rj-c0xffffff/photo.jpg",
  views: "3M",
  time:'3 years ago'
},{
  name: "G-Eazy x Childish Gambino - Wildfire (Mix)",
  image: "i.ytimg.com/vi/txzWmc07LlU/maxresdefault.jpg",
  youtuber: "Promoting Sounds",
  avatar: "https://yt3.ggpht.com/-6njQqd-zE6U/AAAAAAAAAAI/AAAAAAAAAAA/dfX0y_hkmbI/s68-c-k-no-mo-rj-c0xffffff/photo.jpg",
  views: "30k",
  time:'2 weeks Ago'
},{
  name: "KYLE - KING WAVY (ft. G-Eazy)",
  image: "i.ytimg.com/vi/gCsWtQkiD74/maxresdefault.jpg",
  youtuber: "Promoting Sounds",
  avatar: "https://yt3.ggpht.com/-6njQqd-zE6U/AAAAAAAAAAI/AAAAAAAAAAA/dfX0y_hkmbI/s68-c-k-no-mo-rj-c0xffffff/photo.jpg",
  views: "30k",
  time:'1 year ago'
},{
  name: "EXPLORING HAUNTED PARIS CATACOMBS (GONE WRONG)",
  image: "i.ytimg.com/vi/mkvEqtAihB4/maxresdefault.jpg",
  youtuber: "Night Scape",
  avatar: "https://yt3.ggpht.com/-k18J0JfLjus/AAAAAAAAAAI/AAAAAAAAAAA/uZ3ab97WfWg/s68-c-k-no-mo-rj-c0xffffff/photo.jpg",
  views: "110k",
  time:'2 months ago'
},{
  name: "Showcase: Dragon Ballz Game [Open Source Code]",
  image: "i.ytimg.com/vi/NUwueUPJs7c/maxresdefault.jpg",
  youtuber: "Night Scape",
  avatar: "https://yt3.ggpht.com/-QCc9TPlhySA/AAAAAAAAAAI/AAAAAAAAAAA/p43btU4kWT4/s68-c-k-no-mo-rj-c0xffffff/photo.jpg",
  views: "738",
  time:'3 days ago'
},{
  name: "HE DRANK THE MOONSHINE",
  image: "i.ytimg.com/vi/Rdd9DlA1sJQ/sddefault.jpg",
  youtuber: "Casey Neistat",
  avatar: "https://yt3.ggpht.com/-x2NNN2y49G0/AAAAAAAAAAI/AAAAAAAAAAA/RhwVaxMvqW8/s68-c-k-no-mo-rj-c0xffffff/photo.jpg",
  views: "1M",
  time:'5 months ago'
},

]
export default class Youtube extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

