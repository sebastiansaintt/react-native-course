import {View, Text, StyleSheet, FlatList, Modal, Pressable, Button} from 'react-native';
import {useState} from 'react';
import {useRouter} from 'expo-router';

export default function Wishes(){
    const data = [ 
            {"id": 4, "name": 'iphone', "price": 1000},
            {"id": 5, "name": 'iphone', "price": 1000},
            {"id": 6, "name": 'iphone', "price": 1000},
            {"id": 7, "name": 'iphone', "price": 1000},
            {"id": 8, "name": 'iphone', "price": 1000},
            {"id": 9, "name": 'iphone', "price": 1000},
            {"id": 10, "name": 'iphone', "price": 1000},
    ]
    const [modalVisible, setModalVisible] = useState(false);
    const router = useRouter();
    return (
        <View style={styles.container}>
            <View>
                <Pressable
                onPress={()=> setModalVisible(true)}
                >
                    <Text>Add Wish</Text>
                </Pressable>
                <Modal
                animationType='slide'
                visible={modalVisible}
                presentationStyle='pageSheet'
                >
                    <Text>Modal</Text>
                    <Button title='Close' onPress={()=> setModalVisible(false)} />
                </Modal>
            </View>
            <FlatList
            data={data}
            keyExtractor={(item)=>item.id.toString()}
            renderItem={({item}) => (
                <Pressable onPress={() => router.push(`/products/${item.id}`)}>
                    <View style={styles.wish} key={item.id}>
                    <Text style={styles.primaryText}>{item.name}</Text>
                    <Text style={styles.secondaryText}>{item.price}</Text>
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
    },
    wish: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        margin:10,
        padding: 40,
        backgroundColor: 'midnightblue',
        borderRadius: 10
    },
    primaryText: {
        fontSize: 20,
        fontFamily: "Inter_700Bold",
        color: 'white'
    },
    secondaryText: {
        fontSize: 15,
        fontFamily: "Inter_400Regular",
        color: 'white'
    }
})