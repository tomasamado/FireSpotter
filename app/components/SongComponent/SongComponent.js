import React from 'react';
import { Text, View } from 'react-native';
import styles from './SongStyles'

export class SongComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    goTo() {
        this.props.navigation.navigate('Details', {
            item: this.props.item
        });
    }

    render() {
        console.log(this.props.item)
        let item = this.props.item;

        return (
            <View style={styles.container}>
                <Text onPress={() => this.goTo()} style={styles.principalItem}>{this.props.item.name}</Text>
                <Text onPress={() => this.goTo()} style={styles.textStyle}> Artist: {this.props.item.artist}</Text>
            </View>
        );
    }
}