import {View, Text, StyleSheet, FlatList} from 'react-native';
import data from '../data/data.json';


export default function Profile(){
    const data = [ 
            {"id": 4, "name": 'iphone', "price": 1000},
            {"id": 5, "name": 'iphone', "price": 1000},
            {"id": 6, "name": 'iphone', "price": 1000},
            {"id": 7, "name": 'iphone', "price": 1000},
            {"id": 8, "name": 'iphone', "price": 1000},
            {"id": 9, "name": 'iphone', "price": 1000},
            {"id": 10, "name": 'iphone', "price": 1000},
    ]
    return (
        <View>
            <FlatList
            data={data}
            keyExtractor={(item)=>item.id.toString()}
            renderItem={({item}) => (
                <View>
                    <Text>{item.name}</Text>
                    <Text>{item.price}</Text>
                </View>
            )}
            
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})