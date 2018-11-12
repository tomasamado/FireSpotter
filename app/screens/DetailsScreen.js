import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-elements'
import AnimatedBar from "react-native-animated-bar";
import GradientButton from 'react-native-gradient-buttons';
import SoundPlayer from 'react-native-sound-player'


var SpotifyWebApi = require('spotify-web-api-node');
var spotifyApi = new SpotifyWebApi({
    clientId: '0c97682e61534996b733c2570805da2c',
    clientSecret: 'ef3edeba7b174259b46609d44625863e',
    redirectUri: 'http://localhost:8888/callback'
});
spotifyApi.setAccessToken('BQBo3EIDnhGxYSEiMhXG1YKoI4TlenyAqzfptf-ViNjiZ8Ai0z6MR0TJ-8U2C-pXqFf0V6wk6uWRrJBlpbhResMRyAEZOnyVuzg1D2YYjVmU458zUokOR4f-YfVfutc46-0KkbE1BKl9vncmrimCQlhBlA');

const size = {
    width: '100%',
    height: 300,
  };

export class DetailsScreen extends React.Component {

    static navigationOptions = {
        title: 'Details',
    };

    state = {
        progress: 0,
        progress2: 0,
        progress3: 0,
        progress4: 0,
        progress5: 0,

    };
    

    getFeatures(id) {
        spotifyApi.getAudioFeaturesForTrack(id)
            .then((features) => {
                var audioFeatures = {
                    danceability: features.body.danceability,
                    energy: features.body.energy,
                    acousticness: features.body.acousticness,
                    instrumentalness: features.body.instrumentalness,
                    valence: features.body.valence,
                }

                console.log(features.body.danceability);
                console.log(features.body.energy);

                const interval = setInterval(() => {
                    if (this.state.progress > 0) return clearInterval(interval);
                    this.setState(state => {
                        return {
                            progress: state.progress + audioFeatures.danceability,
                            progress2: state.progress2 + audioFeatures.energy,
                            progress3: state.progress3 + audioFeatures.acousticness,
                            progress4: state.progress4 + audioFeatures.instrumentalness,
                            progress5: state.progress5 + audioFeatures.valence
                        };
                    });
                }, 1000);

            }, (err) => {
                console.log('Something went wrong!', err);
            });
    }

    componentDidMount() {

    }
    playTrack(){
        try {
            SoundPlayer.playUrl('https://p.scdn.co/mp3-preview/1ac11038ad989837bb651f988a10aa997b0a1047?cid=774b29d4f13844c495f206cafdad9c86')
          } catch (e) {
            console.log(`cannot play the sound file`, e)
          }
    }
    render() {
        const { navigation } = this.props;
        const item = navigation.getParam('item', {});
        this.getFeatures(item.id);

        return (
            <ScrollView styles={styles.container}>
                <Image 
                    onPress={() => this.playTrack()}
                    style={{ width: 270, height: 270, justifyContent: 'center', alignContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 10}}
                    source={{ uri: item.cover }}
                />
                <Card title={item.name}>
                    <Text>Album: {item.album}</Text>
                    <Text>Artist: {item.artist}</Text>
                    <Text>Year: {item.year}</Text>

                    <Text style={{fontStyle: 'italic'}}  >Danceability:</Text>
                    <AnimatedBar

                    progress={this.state.progress}
                    height={20}
                    borderColor="#DDD"
                    barColor="#d13114"
                    borderRadius={5}
                    borderWidth={5}
                    duration={2000}

                />
                <Text style={{fontStyle: 'italic'}}>Energy:</Text>
                <AnimatedBar

                    progress={this.state.progress2}
                    height={20}
                    borderColor="#DDD"
                    barColor="#d14914"
                    borderRadius={5}
                    borderWidth={5}
                    duration={2000}

                />
                <Text style={{fontStyle: 'italic'}}>Acousticness:</Text>
                <AnimatedBar

                    progress={this.state.progress3}
                    height={20}
                    borderColor="#DDD"
                    barColor="#d16214"
                    borderRadius={5}
                    borderWidth={5}
                    duration={2000}

                />
                <Text style={{fontStyle: 'italic'}}>Instrumentalness:</Text>
                <AnimatedBar

                    progress={this.state.progress4}
                    height={20}
                    borderColor="#DDD"
                    barColor="#d18514"
                    borderRadius={5}
                    borderWidth={5}
                    duration={2000}

                />
                <Text style={{fontStyle: 'italic'}}>Happiness:</Text>
                <AnimatedBar

                    progress={this.state.progress5}
                    height={20}
                    borderColor="#DDD"
                    barColor="#d1ab14"
                    borderRadius={5}
                    borderWidth={5}
                    duration={2000}

                    />
                </Card>
                <GradientButton
                    style={{ marginVertical: 8 }}
                    text="Search another song"
                    textStyle={{  fontStyle: 'italic', fontSize: 20 }}
                    gradientBegin="#D82918"
                    gradientEnd="#FFA94F"
                    gradientDirection="diagonal"
                    height={40}
                    width={345}
                    radius={0}
                    impact
                    impactStyle='Light'
                    onPressAction={() => {
                        this.playTrack();
                    }}
                />
                
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
export default styles