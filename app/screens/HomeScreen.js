import React from 'react';
import { StyleSheet, View, Button, Text, Image } from 'react-native';



export class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: 'Home',
        header: null,
    };

    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={{
                        width: 100, height: 100
                    }}
                    source={require('../../assets/spotify.png')}
                />
                <Text style={{ height: 70, marginTop: 10, textAlign: 'center', fontSize: 24 }}>
                    Spotifired
                </Text>

                <Text style={{ height: 70, marginTop: 10, textAlign: 'center', fontSize: 19 }}>
                    Learn fun audio features about your favorite songs such as danceability, energy, valence and more!
                </Text>

                <Text style={{ height: 120, marginTop: 10, textAlign: 'center', fontSize: 14, marginLeft: 30, marginRight: 30 }}>
                    Based on simple REST principles, the Spotify Web API endpoints return JSON metadata about music artists, albums, 
                    and tracks directly from the Spotify Data Catalogue.
                </Text>

                <Button color='black'
                    title="Search"
                    onPress={() => {
                        this.props.navigation.replace('Search');
                    }}
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
    component: {
        alignItems: 'center',

    },
    button: {

    }
});
