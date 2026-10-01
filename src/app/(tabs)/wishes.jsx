import {View, Text, StyleSheet, FlatList, Pressable} from 'react-native';
import data from '../../data/data.json';
import { useRouter } from 'expo-router';

export default function Profile(){
    const router = useRouter();
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
                <Pressable onPress={() => router.push(`/products/${item.id}`)} style={styles.itemContainer}>
                    <View style={styles.itemContent}>
                        <Text style={styles.itemName}>{item.name}</Text>
                        <Text style={styles.itemPrice}>${item.price}</Text>
                    </View>
                </Pressable>
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