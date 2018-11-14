import React from 'react';
import { View, Button, List, FlatList, Text, AppRegistry, ScrollView, StatusBar } from 'react-native';
import { SearchBar } from 'react-native-elements'
import { SongComponent } from '../components/SongComponent/SongComponent';
import { StyleSheet } from 'react-native';
import GradientButton from 'react-native-gradient-buttons';

var SpotifyWebApi = require('react-native-spotify-web-api');
var spotifyApi = new SpotifyWebApi({
    clientId: '0c97682e61534996b733c2570805da2c',
    clientSecret: 'ef3edeba7b174259b46609d44625863e'
});

spotifyApi.clientCredentialsGrant().then(
    function (data) {
        console.log('The access token expires in ' + data.body['expires_in']);
        console.log('The access token is ' + data.body['access_token']);

        // Save the access token so that it's used in future calls
        spotifyApi.setAccessToken(data.body['access_token']);
    },
    function (err) {
        console.log('Something went wrong when retrieving an access token', err);
    }
);

export class SearchScreen extends React.Component {
    list = [];

    constructor(props) {
        super(props);
        this.state = {
            song: { name: 'Not Checked' }
        }
    }
    static navigationOptions = {
        title: 'Songs',
        header: null,

    };

    getTracks(searchInput) {
        spotifyApi.searchTracks(searchInput).then((data) => {
            var song = [];
            for (var i = 0; i < 10; i++) {
                song.push({
                    name: data.body.tracks.items[i].name,
                    artist: data.body.tracks.items[i].artists[0].name,
                    album: data.body.tracks.items[i].album.name,
                    year: data.body.tracks.items[i].album.release_date.substring(0, 4),
                    cover: data.body.tracks.items[i].album.images[1].url,
                    id: data.body.tracks.items[i].id
                });
            }
            this.setState({
                song: song
            });
        }, (err) => {
            console.log('Something went wrong!', err);
        });
    }

    render() {
        
        return (
            <ScrollView style={styles.container}>
            <StatusBar hidden />
                <SearchBar
                    lightTheme
                    placeholder='Search Songs...'
                    onChangeText={query => { this.getTracks(query); }}
                />

                <FlatList
                    data={this.state.song}
                    renderItem={({ item }) =>
                        <SongComponent navigation={this.props.navigation} item={item} />}
                    keyExtractor={(item, index) => index.toString()}
                />
                <View style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'center', marginVertical: 28, marginHorizontal: 20 }}>
                    <GradientButton
                        style={{ marginVertical: 8 }}
                        text="Home"
                        textStyle={{ fontStyle: 'italic', fontSize: 20 }}
                        gradientBegin="#D82918"
                        gradientEnd="#FFA94F"
                        gradientDirection="diagonal"
                        height={40}
                        width={345}
                        radius={0}
                        position= 'absolute'

                        onPressAction={() => {
                            this.props.navigation.replace('Home');
                        }}
                    />
                </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {

    },

    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 36,
        bottom: 0

    },
    button: {
        position: 'absolute',
        bottom: 0
    }
});

export default styles