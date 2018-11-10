import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';


export class HomeScreen extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={styles.container}>

                <Text>
                    Hola
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
        backgroundColor: '#353839',
    },
    component: {
        alignItems: 'center',

    },
    button: {
    }
});