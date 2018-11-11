import React from 'react';
import { View, Text } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'

export class DetailsScreen extends React.Component {
    static navigationOptions = {
        title: 'Details',
    };

    render() {
        const { navigation } = this.props;
        const item = navigation.getParam('item', {});

        return (
            <View>

                <Card title="" image={require('../../assets/cover.jpg')} >

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