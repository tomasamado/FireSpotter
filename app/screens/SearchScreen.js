import React from 'react';
import { View, Button, FlatList, Text } from 'react-native';
import { SearchBar } from 'react-native-elements'
import { SongComponent } from '../components/SongComponent/SongComponent';
import { StyleSheet } from 'react-native';


var SpotifyWebApi = require('spotify-web-api-node');
var spotifyApi = new SpotifyWebApi({
    clientId: '0c97682e61534996b733c2570805da2c',
    clientSecret: 'ef3edeba7b174259b46609d44625863e',
    redirectUri: 'http://localhost:8888/callback'
});
spotifyApi.setAccessToken('BQDqYhrJaptqXakJlDQFwaVSS38vW7JuYqe1tSJ_Oomjbwgj0Zk1vJ2DOuP56NrsbjTp-HwXHK5VW5Rh2FWCvRXiOuACZ7dx6dIoLXqqzuvK93NSry3XXtCTs26dLatWXEDTxLgihPcQKgfAao8p4ZGgfQ');


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
            this.setState({
                song: {
                    name: data.body.tracks.items[0].name,
                    artist: data.body.tracks.items[0].artists[0].name,
                    album: data.body.tracks.items[0].album.name,
                    year: data.body.tracks.items[0].album.release_date.substring(0, 4),
                    cover: data.body.tracks.items[0].album.images[1].url
                }
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
                    data={[{ name: this.state.song.name, artist: this.state.song.artist, album: this.state.song.album, year: this.state.song.year, cover:this.state.song.cover}]}
                    //data={this.list}
                    renderItem={({ item }) => <SongComponent navigation={this.props.navigation} item={item} />}
                />
                <Button
                    title="Home"
                    onPress={() => {
                        this.props.navigation.replace('Home');
                    }}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        marginBottom: 40
    }

});

export default styles