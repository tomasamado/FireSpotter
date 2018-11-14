import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Linking, TouchableOpacity } from 'react-native';
import { Card, Button } from 'react-native-elements'
import AnimatedBar from "react-native-animated-bar";
import GradientButton from 'react-native-gradient-buttons';

var SpotifyWebApi = require('react-native-spotify-web-api');
var spotifyApi = new SpotifyWebApi({
    clientId: '0c97682e61534996b733c2570805da2c',
    clientSecret: 'ef3edeba7b174259b46609d44625863e'
});

spotifyApi.clientCredentialsGrant().then(
    function (data) {
        spotifyApi.setAccessToken(data.body['access_token']);
    },
    function (err) {
        console.log('Something went wrong when retrieving an access token', err);
    }
);

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
                    valence: features.body.valence
                }


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
                    style={{ width: 270, height: 270, justifyContent: 'center', alignContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 10 }}
                    source={{ uri: item.cover }}
                    
                />
                <GradientButton style={{borderRadius: 0, marginLeft: 30, alignContent: 'center', alignItems: 'center', marginRight: 0, marginBottom: 0, marginTop: 20}}
                        text="Play On Spotify"
                        textStyle={{ fontStyle: 'italic', fontSize: 16 }}
                        gradientBegin="#D82918"
                        gradientEnd="#FFA94F"
                        gradientDirection="diagonal"
                        height={40}
                        width={300}
                        radius={0}
                        onPressAction={() => Linking.openURL('https://open.spotify.com/track/'+item.id)}
                    />
                <Card title={item.name} containerStyle={{ }}>
                    <Text 
                    style={{  marginTop: 10 }} >Album: {item.album}</Text>
                    <Text style={{  marginTop: 10 }}>Artist: {item.artist}</Text>
                    <Text style={{  marginTop: 10 }}>Year: {item.year}</Text>

                    <Text style={{ fontStyle: 'italic', marginTop: 10 }}  >Danceability:</Text>
                    <AnimatedBar

                        progress={this.state.progress}
                        height={20}
                        borderColor="#DDD"
                        barColor="#d13114"
                        borderRadius={5}
                        borderWidth={5}
                        duration={2000}

                    />
                    <Text style={{ fontStyle: 'italic', marginTop: 10 }}>Energy:</Text>
                    <AnimatedBar

                        progress={this.state.progress2}
                        height={20}
                        borderColor="#DDD"
                        barColor="#d14914"
                        borderRadius={5}
                        borderWidth={5}
                        duration={2000}

                    />
                    <Text style={{ fontStyle: 'italic', marginTop: 10 }}>Acousticness:</Text>
                    <AnimatedBar

                        progress={this.state.progress3}
                        height={20}
                        borderColor="#DDD"
                        barColor="#d16214"
                        borderRadius={5}
                        borderWidth={5}
                        duration={2000}

                    />
                    <Text style={{ fontStyle: 'italic', marginTop: 10 }}>Instrumentalness:</Text>
                    <AnimatedBar

                        progress={this.state.progress4}
                        height={20}
                        borderColor="#DDD"
                        barColor="#d18514"
                        borderRadius={5}
                        borderWidth={5}
                        duration={2000}

                    />
                    <Text style={{ fontStyle: 'italic', marginTop: 10 }}>Happiness:</Text>
                    <AnimatedBar

                        progress={this.state.progress5}
                        height={20}
                        borderColor="#DDD"
                        barColor="#d1ab14"
                        borderRadius={5}
                        borderWidth={5}
                        duration={2000}

                    />
                    <GradientButton style={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, marginTop: 20}}
                        text="Search another song"
                        textStyle={{ fontStyle: 'italic', fontSize: 16 }}
                        gradientBegin="#D82918"
                        gradientEnd="#FFA94F"
                        gradientDirection="diagonal"
                        height={40}
                        width={300}
                        radius={0}
                        onPressAction={() => {
                            this.props.navigation.replace('Search');
                        }}
                    />
                </Card>

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