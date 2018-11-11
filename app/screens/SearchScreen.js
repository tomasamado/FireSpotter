import React from 'react';
import { View, Button, FlatList } from 'react-native';
import { SearchBar } from 'react-native-elements'
import { SongComponent } from '../components/SongComponent/SongComponent';
import { StyleSheet } from 'react-native';

export class SearchScreen extends React.Component {
    list = [];
    

    constructor(props) {
        super(props);
        this.list = [{ name: 'Song Name', album: 'Album', year: 2010, artist: 'Artist', key: '1' },
        { name: 'Pedro', album: 'Perez', year: 20, artist: 'mijiscma', key: '2' }, { name: 'Maria', album: 'Gonzalez', year: 2001, artist: 'Felicia', key: '3' }];
        console.log(this.list)
    }
    static navigationOptions = {
        title: 'Songs',
    };

    render() {
        return (
            <View style={styles.container}>
                <SearchBar
                    placeholder='Search Songs...' />
                <FlatList
                    data={this.list}
                    renderItem={({ item }) => <SongComponent navigation={this.props.navigation} item={item} />}
                />
                <Button
                    title="Home"
                    onPress={() => {
                        this.props.navigation.replace('Home');
                    }}
                />
            </View>
        );
    }
    
}
const styles = StyleSheet.create({
    container: {
        marginBottom: 40
    }

});

export default styles