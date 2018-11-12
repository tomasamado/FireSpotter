import React from 'react';
import { Text, View, Image } from 'react-native';
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
            <View style={{flex: 1, flexDirection: 'row'}}>
                <Image
                    style={{ width: 64, height: 64, justifyContent: 'center', alignContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 10, marginLeft:8 }}
                    source={{ uri: this.props.item.cover }}
                />
                <View style={{flex:1, flexDirection: 'column'}}>
                <Text onPress={() => this.goTo()} style={styles.principalItem}>{this.props.item.name}</Text>
                <Text onPress={() => this.goTo()} style={styles.textStyle}>Artist: {this.props.item.artist}</Text>
                </View>
            </View>
        );
    }
}


