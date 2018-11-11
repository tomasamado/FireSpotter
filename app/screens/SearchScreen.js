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
        this.list = [{ name: 'Claudia', lastname: 'Fernandez', age: 24, gender: 'F', key: '1' },
        { name: 'Pedro', lastname: 'Perez', age: 20, gender: 'M', key: '2' }, { name: 'Maria', lastname: 'Gonzalez', age: 34, gender: 'F', key: '3' }];
        console.log(this.list);
        this.state = {
            song: { name: 'Not Checked' }
        }
        // this.getTracks();
        //this.getTracks();
    }
    static navigationOptions = {
        title: 'Songs',
    };
    // getTracki() {
    //     spotifyApi.searchTracks('track:Alright artist:Kendrick Lamar')
    //         .then((data) => {
    //             console.log('Search tracks by "Alright" in the track name and "Kendrick Lamar" in the artist name', data.body);
    //         }, function (err) {
    //             console.log('Something went wrong!', err);
    //         });

    // }
    getTracks(searchInput) {
        spotifyApi.searchTracks(searchInput).then((data) => {
            //console.log(data)
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
                <Text>
                    track : {this.state.song.name}
                    artist : {this.state.song.artist}
                </Text>
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