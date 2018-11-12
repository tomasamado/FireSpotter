import React from 'react';
import { View, Text, Image, StyleSheet, AppRegistry } from 'react-native';
import { Card, Button } from 'react-native-elements'
import AnimatedBar from "react-native-animated-bar";



var SpotifyWebApi = require('spotify-web-api-node');
var spotifyApi = new SpotifyWebApi({
    clientId: '0c97682e61534996b733c2570805da2c',
    clientSecret: 'ef3edeba7b174259b46609d44625863e',
    redirectUri: 'http://localhost:8888/callback'
});
spotifyApi.setAccessToken('BQCbKPC_rZoJVbprnFjSAOrqbgF5Xlt16gv0obhw5zQO8UKLWLQUhxtNLyk-9xe_PP2nm4Apq2oSyZ8GEk_YvWv1_lQEuo4M_CZm59yvRjRGaE4LB9eV0evAjMq6cCmDjr657LlQ-pji9cwuys67pQ6skw');



export class DetailsScreen extends React.Component {

    static navigationOptions = {
        title: 'Details',
    };

    state = {
        progress: 0,
        progress2:0,
        progress3:0,
        progress4:0,
        progress5:0,
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
                            progress3: state.progress2 + audioFeatures.acousticness,
                            progress4: state.progress2 + audioFeatures.instrumentalness,
                            progress5: state.progress2 + audioFeatures.valence
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
            <View styles={styles.container}>
                <Image
                    style={{ width: 280, height: 280, justifyContent: 'center', alignContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 10 }}
                    source={{ uri: item.cover }}
                />
                <Card title="">

                    <Text >{item.name} </Text>
                    <Text>Album: {item.album}</Text>
                    <Text>Artist: {item.artist}</Text>
                    <Text>Year: {item.year}</Text>
                </Card>
                <Button
                    title="Go Back"
                    onPress={() => {
                        this.props.navigation.replace('Search');
                    }}
                />
                <AnimatedBar

                    progress={this.state.progress}
                    height={20}
                    borderColor="#DDD"
                    barColor="tomato"
                    borderRadius={5}
                    borderWidth={5}
                    duration={2000}

                />
                <AnimatedBar

                    progress={this.state.progress2}
                    height={20}
                    borderColor="#DDD"
                    barColor="tomato"
                    borderRadius={5}
                    borderWidth={5}
                    duration={2000}

                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    image: {
        width: 200,
        height: 200,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
export default styles