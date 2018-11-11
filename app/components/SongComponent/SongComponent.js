import React from 'react';
import { Text, View } from 'react-native';
import styles from './SongStyles'
import { ListItem } from 'react-native-elements'

export class SongComponent extends React.Component {

    constructor(props) {
        super(props);
        // this.goTo = this.goTo.bind(this);
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
                <Text style={styles.textStyle}> Album: {this.props.item.album}</Text>
                <Text style={styles.textStyle}> Artist: {this.props.item.artist}</Text>
                <Text style={styles.textStyle}> Year: {this.props.item.year}</Text>
            </View>
        );
    }
}