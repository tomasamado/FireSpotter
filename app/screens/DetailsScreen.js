import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-elements'


export class DetailsScreen extends React.Component {
    static navigationOptions = {
        title: 'Details',
    };

    render() {
        const { navigation } = this.props;
        const item = navigation.getParam('item', {});

        return (
            <View styles={styles.container}>
                <Image 
                    style={{ width: 280, height: 280, justifyContent: 'center', alignContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 10}}
                    source={{ uri: item.cover }}
                />
                <Card title="">

                    <Text >{item.name} </Text>
                    <Text>Album: {item.album}</Text>
                    <Text>Artist: {item.artist}</Text>
                    <Text>Year: {item.year}</Text>
                </Card>
                <Button
                    title="Go Back"
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

    image:{
        width: 200, 
        height: 200,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
export default styles