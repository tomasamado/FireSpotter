import React from 'react';
import { View, Button, FlatList } from 'react-native';
import { SearchBar } from 'react-native-elements'
import { SongComponent } from '../components/SongComponent/SongComponent';
import { StyleSheet } from 'react-native';

export class SearchScreen extends React.Component {
    list = [];
    

    constructor(props) {
        super(props);
        this.list = [{ name: 'Claudia', lastname: 'Fernandez', age: 24, gender: 'F', key: '1' },
        { name: 'Pedro', lastname: 'Perez', age: 20, gender: 'M', key: '2' }, { name: 'Maria', lastname: 'Gonzalez', age: 34, gender: 'F', key: '3' }];
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
                    title="Go Home"
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
        backgroundColor: '#232b2b',
        marginBottom: 40
    }

});

export default styles