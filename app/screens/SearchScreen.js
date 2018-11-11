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
spotifyApi.setAccessToken('BQBEMCts05hDuTY3UMaGucEDkwkCLAjTA4PdlWgqWt88Q0_FTgd4nNiJtDqY-xxUTw5-3VFDIJckVQ5sd-yZ-ra_4xuUSE1T2QwvvM_XuKkSumPns8xcAFzBVV-Hd4ZH3gClyPgs7g59OPe2MsaDp54KMg');


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
                    artist: data.body.tracks.items[0].artists[0].name
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
                    data={[{ name: this.state.song.name, lastname: this.state.song.artist }]}
                    //data={this.list}
                    renderItem={({ item }) => <SongComponent navigation={this.props.navigation} item={item} />}
                />
                <Button
                    title="Go Home"
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
        backgroundColor: '#232b2b',
        marginBottom: 40
    }

});

export default styles