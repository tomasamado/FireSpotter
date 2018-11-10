import React from 'react';
import { Alert, Text, View } from 'react-native';
import styles from './SongStyles'


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
        let fullname = `${this.props.item.name} ${this.props.item.lastname}`;
        let keyType;
        if (parseInt(this.props.item.key) % 2 !== 0)
            keyType = `Key impar`;
        else
            keyType = 'Key par';


        return (
            <View style={styles.container}>
                <Text onPress={() => this.goTo()} style={styles.principalItem}>{this.props.item.name} {this.props.item.lastname}</Text>
                <Text onPress={() => {
                    Alert.alert(`You tapped ${this.props.item.name}`);
                }} style={styles.textStyle}>{(parseInt(this.props.item.key) % 2) !== 0 ? this.props.item.name : this.props.item.lastname}</Text>
                <Text style={styles.textStyle}>{keyType}</Text>
            </View>
        );
    }
}