import React from 'react';
import { View, Text, Image } from 'react-native';
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
                <Image style={{ width: 200, height: 200 }}
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