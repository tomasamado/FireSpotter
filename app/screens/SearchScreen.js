import React from 'react';
import { View, Button, List, FlatList, Text } from 'react-native';
import { SearchBar } from 'react-native-elements'
import { SongComponent } from '../components/SongComponent/SongComponent';
import { StyleSheet } from 'react-native';


var SpotifyWebApi = require('spotify-web-api-node');
var spotifyApi = new SpotifyWebApi({
    clientId: '0c97682e61534996b733c2570805da2c',
    clientSecret: 'ef3edeba7b174259b46609d44625863e',
    redirectUri: 'http://localhost:8888/callback'
});
spotifyApi.setAccessToken('BQDy5xDCcD8OLLwzgbNdruMKXCcGWm3aJjPM4fjqUmD9gvTS7NvAEDB_RdKcZ3Znp8czbD7vPRpeNMNQLUKFtaRkv0Cj6hdfvm_i03E5fUe-dIoHQ0waNgB7JwvNeFHcpG3ZuM_Ex_x1-r_osDIHD6_gXA');


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

    };

    getTracks(searchInput) {
        spotifyApi.searchTracks(searchInput).then((data) => {
            var song = [];
            for (var i = 0; i < 5; i++) {
                song.push({
                    name: data.body.tracks.items[i].name,
                    artist: data.body.tracks.items[i].artists[0].name,
                    album: data.body.tracks.items[i].album.name,
                    year: data.body.tracks.items[i].album.release_date.substring(0, 4),
                    cover: data.body.tracks.items[i].album.images[1].url
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
            <View style={styles.container}>
                <SearchBar
                    lightTheme
                    placeholder='Search Songs...'
                    onChangeText={query => { this.getTracks(query); }}
                />

                <FlatList
                    data={this.state.song}
                    //data={this.list}
                    renderItem={({ item }) =>
                        <SongComponent navigation={this.props.navigation} item={item} />}
                    keyExtractor={(item, index) => index.toString()}
                />
                <View styles={styles.bottom}>
                    <Button style={styles.button}
                        title="Home"
                        onPress={() => {
                            this.props.navigation.replace('Home');
                        }}
                    />
                </View>
            </View>
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