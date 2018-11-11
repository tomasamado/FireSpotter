import React from 'react';
import { View, Text, Button } from 'react-native';

export class DetailsScreen extends React.Component {
    static navigationOptions = {
        title: 'Details',
    };

    render() {
        const { navigation } = this.props;
        const item = navigation.getParam('item', {});

        return (
            <View>
                <Text>Id: {item.key}</Text>
                <Text>Name: {item.name}</Text>
                <Text>Lastname: {item.lastname}</Text>
                <Text>Age: {item.age}</Text>
                <Text>Gender: {item.gender}</Text>
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