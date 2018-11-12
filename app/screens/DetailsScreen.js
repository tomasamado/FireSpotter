import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-elements'
import AnimatedBar from "react-native-animated-bar";



var SpotifyWebApi = require('spotify-web-api-node');
var spotifyApi = new SpotifyWebApi({
    clientId: '0c97682e61534996b733c2570805da2c',
    clientSecret: 'ef3edeba7b174259b46609d44625863e',
    redirectUri: 'http://localhost:8888/callback'
});
spotifyApi.setAccessToken('BQBo3EIDnhGxYSEiMhXG1YKoI4TlenyAqzfptf-ViNjiZ8Ai0z6MR0TJ-8U2C-pXqFf0V6wk6uWRrJBlpbhResMRyAEZOnyVuzg1D2YYjVmU458zUokOR4f-YfVfutc46-0KkbE1BKl9vncmrimCQlhBlA');



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

    render() {
        const { navigation } = this.props;
        const item = navigation.getParam('item', {});
        this.getFeatures(item.id);

        return (
            <ScrollView styles={styles.container}>
                <Image 
                    style={{ width: 270, height: 270, justifyContent: 'center', alignContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 10}}
                    source={{ uri: item.cover }}
                />
                <Card title={item.name}>
                    <Text>Album: {item.album}</Text>
                    <Text>Artist: {item.artist}</Text>
                    <Text>Year: {item.year}</Text>

                    <Text>Danceability:</Text>
                    <AnimatedBar

                    progress={this.state.progress}
                    height={20}
                    borderColor="#DDD"
                    barColor="#d13114"
                    borderRadius={5}
                    borderWidth={5}
                    duration={2000}

                />
                <Text>Energy:</Text>
                <AnimatedBar

                    progress={this.state.progress2}
                    height={20}
                    borderColor="#DDD"
                    barColor="#d14914"
                    borderRadius={5}
                    borderWidth={5}
                    duration={2000}

                />
                <Text>Acousticness:</Text>
                <AnimatedBar

                    progress={this.state.progress3}
                    height={20}
                    borderColor="#DDD"
                    barColor="#d16214"
                    borderRadius={5}
                    borderWidth={5}
                    duration={2000}

                />
                <Text>Instrumentalness:</Text>
                <AnimatedBar

                    progress={this.state.progress4}
                    height={20}
                    borderColor="#DDD"
                    barColor="#d18514"
                    borderRadius={5}
                    borderWidth={5}
                    duration={2000}

                />
                <Text>Happiness:</Text>
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
                <Button color='black'
                    title="Search another song"
                    onPress={() => {
                        this.props.navigation.replace('Search');
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