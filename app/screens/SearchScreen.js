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
spotifyApi.setAccessToken('BQCNSCrypqFldihGsqyEcw_s8o93BlE43Je767VQorSmTKyX_pmxOiyqOSp7s99YfEhs5Dlc_NLOZLY6tP0_YgD8pZd6-wqbusa1aE0T8A1fSMsoNKZzPCc0DnsybSQGX0rvdKr7bMeJtF2qPuH-OZH0Lw');


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
                    data={[{ name: this.state.song.name, artist: this.state.song.artist}]}
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