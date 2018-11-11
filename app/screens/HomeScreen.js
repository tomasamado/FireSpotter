import React from 'react';
import { StyleSheet, View, Button, TextInput, Text } from 'react-native';


export class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }

    static navigationOptions = {
        title: 'Home',
    };

    setInputText(text) {
        this.setState({ text })
    }

    render() {
        return (
            <View style={styles.container}>


                <TextInput
                    style={{ height: 70, marginTop: 50 }}
                    placeholder="Ingresa tu nombre"
                    onChangeText={(text) => this.setInputText(text)}
                />

                <Text>
                    {this.state.text}
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
        backgroundColor: '#fff',
    },
    component: {
        alignItems: 'center',

    },
    button: {
    }
});