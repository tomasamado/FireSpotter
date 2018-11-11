import React from 'react';
import { StyleSheet, View, Button, TextInput, Text, Image, StackNavigator } from 'react-native';


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


                <Text style={{ height: 70, marginTop: 50, textAlign: 'center' }}>
                    Learn fun audio features about your favorite songs such as danceability, energy, valence and more!
                </Text>

                <Button style={styles.button}
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
